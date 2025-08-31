"use client"

import {For, HStack, IconButton, Stack, TreeView, createTreeCollection, useTreeViewContext} from "@chakra-ui/react"
import {LuFile, LuFolder, LuPlus, LuTrash} from "react-icons/lu"
import {useState} from "react";

const Watchlist = () => {
  const [collection, setCollection] = useState(initialCollection)

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
    <>
      <div>&nbsp;</div>
      <TreeView.Root collection={collection} maxW="sm" colorPalette={"yellow"} variant="subtle">
        <TreeView.Label>Watchlist</TreeView.Label>
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
    </>
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

const initialCollection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "indices",
        name: "INDICES",
        children: [
          {id: "indices/zag-js", name: "zag-js"},
          {id: "indices/pandacss", name: "panda"},
          {
            id: "node_modules/@types",
            name: "@types",
            children: [
              {id: "node_modules/@types/react", name: "react"},
              {id: "node_modules/@types/react-dom", name: "react-dom"},
            ],
          },
        ],
      },
      {
        id: "STOCKS",
        name: "STOCKS",
        children: [
          {id: "src/app.tsx", name: "app.tsx"},
          {id: "src/index.ts", name: "index.ts"},
        ],
      },
      {
        id: "ETF",
        name: "ETF",
        children: [
          {id: "src/app.tsx", name: "app.tsx"},
          {id: "src/index.ts", name: "index.ts"},
        ],
      },
      {
        id: "COMMODITIES",
        name: "COMMODITIES",
        children: [
          {id: "src/app.tsx", name: "app.tsx"},
          {id: "src/index.ts", name: "index.ts"},
        ],
      },
    ],
  },
})

export default Watchlist;
