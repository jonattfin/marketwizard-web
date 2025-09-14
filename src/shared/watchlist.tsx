"use client"

import {Card, FormatNumber, Group, Icon, Table, Tag} from "@chakra-ui/react"
import {LuBookPlus, LuHand, LuGrip, LuInfo} from "react-icons/lu"

import {useMemo} from "react";
import {Asset, StockQuote} from "@/api/types";
import {useStockQuotes, useWatchlistAssets} from "@/graphql/hooks";
import {styled} from "storybook/theming";

const StyledCard = styled(Card.Root)`
    height: 100%;
`;

const StyledGroup = styled(Group)`
    padding: 10px;
`

type WatchlistItem = {
  symbol: string;
  last: number | undefined;
  change: number | undefined;
  percentChange: number | undefined;
}

const Watchlist = () => {
  const {watchlistAssets, totalCount, error: watchlistError} = useWatchlistAssets();
  const {stockQuotes, error} = useStockQuotes();

  const data = useMemo(() => createData(watchlistAssets, stockQuotes)
    , [watchlistAssets, stockQuotes])

  if (error || watchlistError) return `Error ${error}`;

  const renderTag = (value: number | undefined) => {
    if (!value) {
      return "--";
    }

    return (
      <Tag.Root size="md" colorPalette={value > 0 ? "green" : "orange"}>
        <Tag.Label><FormatNumber value={value}/></Tag.Label>
      </Tag.Root>
    )
  }

  return (
    <StyledCard>
      <StyledGroup grow>
        <div>Watchlist</div>
        <div>&nbsp;</div>
        <Group>
          <Icon size={"lg"} color={"grey"}>
            <LuBookPlus/>
          </Icon>
          <Icon size={"lg"} color={"grey"}>
            <LuHand/>
          </Icon>
          <Icon size={"lg"} color={"grey"}>
            <LuGrip/>
          </Icon>
        </Group>
      </StyledGroup>
      <Table.Root size="sm" interactive>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Symbol</Table.ColumnHeader>
            <Table.ColumnHeader>Last</Table.ColumnHeader>
            <Table.ColumnHeader>Chg</Table.ColumnHeader>
            <Table.ColumnHeader>Chg%</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.symbol}>
              <Table.Cell>
                <Group>
                  <Icon color="grey">
                    <LuInfo/>
                  </Icon>
                  <div>
                    {item.symbol}
                  </div>
                </Group>
              </Table.Cell>
              <Table.Cell>
                {item.last && (
                  <FormatNumber value={item.last} style="currency" currency="USD"/>
                )}
              </Table.Cell>
              <Table.Cell>
                {renderTag(item.change)}
              </Table.Cell>
              <Table.Cell>
                {renderTag(item.percentChange)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </StyledCard>
  )
}

function createData(watchlistAssets: Asset[], stockQuotes: StockQuote[]): WatchlistItem[] {
  const assetSymbols = watchlistAssets.map((asset: Asset) => asset.symbol);
  const filteredStockQuotes = stockQuotes.filter(s => assetSymbols.includes(s.symbol));

  return assetSymbols.map((symbol) => {
    const stockQuote = filteredStockQuotes.find(q => q.symbol === symbol);

    return {
      symbol: symbol,
      last: stockQuote?.currentPrice,
      change: stockQuote?.change,
      percentChange: stockQuote?.percentChange
    }
  });
}

export default Watchlist;
