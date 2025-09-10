"use client"

import {HStack, IconButton, TreeView, createTreeCollection, useTreeViewContext, TreeCollection} from "@chakra-ui/react"
import {LuFile, LuFolder, LuPlus, LuTrash} from "react-icons/lu"
import {Suspense, useEffect, useState} from "react";
import {StockQuote, useStockQuotes, useWatchlistAssets} from "@/shared/hooks";
import {Asset} from "@/api/types";
import Loading from "@/shared/loading";

const Watchlist = () => {
  const {watchlistAssets, totalCount} = useWatchlistAssets();
  const {data, loading, error} = useStockQuotes();

  const [collection, setCollection] = useState<TreeCollection<Node>>(createCollection(watchlistAssets, []));

  useEffect(() => {
    if (loading) {
      console.log("Loading...");
    }

    if (error) {
      console.error(error);
    }

    if (data?.onStockPriceUpdated) {
      setCollection(createCollection(watchlistAssets, data?.onStockPriceUpdated));
    }

  }, [data, loading, error]);


  const removeNode = (props: TreeNodeProps) => {
    setCollection(collection.remove([props.indexPath]))
  }

  const addNode = (props: TreeNodeProps) => {
    const {node, indexPath} = props
    if (!collection.isBranchNode(node)) return
    const children = [
      {
        id: `untitled-${Date.now()}`,
        name: `untitled-${node.children?.length}.tsx`,
      },
      ...(node.children || []),
    ]
    setCollection(collection.replace(indexPath, {...node, children}))
  }

  return (
    <Suspense fallback={<Loading/>}>
      <div>&nbsp;</div>
      <TreeView.Root collection={collection} maxW="sm" colorPalette={"yellow"} variant="subtle">
        <TreeView.Label>Watchlist [{totalCount}]</TreeView.Label>
        <TreeView.Tree>
          <TreeView.Node
            indentGuide={<TreeView.BranchIndentGuide/>}
            render={({node, nodeState, indexPath}) =>
              nodeState.isBranch ? (
                <TreeView.BranchControl role="">
                  <LuFolder/>
                  <TreeView.BranchText>{node.name}</TreeView.BranchText>
                  <TreeNodeActions
                    node={node}
                    indexPath={indexPath}
                    onRemove={removeNode}
                    onAdd={addNode}
                  />
                </TreeView.BranchControl>
              ) : (
                <TreeView.Item>
                  <LuFile/>
                  <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  <TreeNodeActions
                    node={node}
                    indexPath={indexPath}
                    onRemove={removeNode}
                    onAdd={addNode}
                  />
                </TreeView.Item>
              )
            }
          />
        </TreeView.Tree>
      </TreeView.Root>
    </Suspense>
  )
}

interface TreeNodeProps extends TreeView.NodeProviderProps<Node> {
  onRemove?: (props: TreeView.NodeProviderProps<Node>) => void
  onAdd?: (props: TreeView.NodeProviderProps<Node>) => void
}

const TreeNodeActions = (props: TreeNodeProps) => {
  const {onRemove, onAdd, node} = props
  const tree = useTreeViewContext()
  const isBranch = tree.collection.isBranchNode(node)
  return (
    <HStack
      gap="0.5"
      position="absolute"
      right="0"
      top="0"
      scale="0.8"
      css={{
        opacity: 0,
        "[role=treeitem]:hover &": {opacity: 1},
      }}
    >
      <IconButton
        size="xs"
        variant="ghost"
        aria-label="Remove node"
        onClick={(e) => {
          e.stopPropagation()
          onRemove?.(props)
        }}
      >
        <LuTrash/>
      </IconButton>
      {isBranch && (
        <IconButton
          size="xs"
          variant="ghost"
          aria-label="Add node"
          onClick={(e) => {
            e.stopPropagation()
            onAdd?.(props)
            tree.expand([node.id])
          }}
        >
          <LuPlus/>
        </IconButton>
      )}
    </HStack>
  )
}

interface Node {
  id: string
  name: string
  children?: Node[]
  childrenCount?: number
}

function createCollection(watchlistAssets: Asset[], stocksQuote: StockQuote[]) {
  const children: Node[] = [];

  ["STOCK", "ETF", "CRYPTO"].forEach(node => {
    const createChildren = (): Node[] => {
      const currentAssets = watchlistAssets.filter(asset => asset.type === node);

      return currentAssets.map(asset => {
        const price = stocksQuote.find(stock => stock.symbol === asset.symbol)?.currentPrice || 'n/a';

        return {
          id: asset.id,
          name: `${asset.name} - Price: ${price}`,
        }
      })
    }

    children.push({
      id: node,
      name: node,
      children: createChildren(),
    },)
  })

  return createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children
    },
  })
}

export default Watchlist;
