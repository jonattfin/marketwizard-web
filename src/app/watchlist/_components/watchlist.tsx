"use client"

import {
  Button,
  Card,
  FormatNumber,
  Group,
  Icon,
  Portal,
  Select,
  Table,
  Tag,
  createListCollection
} from "@chakra-ui/react"
import {LuInfo, LuBookPlus} from "react-icons/lu"

import {useMemo} from "react";
import hooks from "@/api/hooks";
import {AssetDto, StockQuoteDto} from "@/api/types";
import dayjs from "dayjs";
import Link from "next/link";

type WatchlistItem = {
  symbol: string;
  last: number | undefined;
  change: number | undefined;
  percentChange: number | undefined;
}

type DataType = {
  data: WatchlistItem[];
  date: Date;
}

const Watchlist = () => {
  const {watchlistAssets, totalCount, error: watchlistError} = hooks.useWatchlistAssets();
  const {stockQuotes, error} = hooks.useStockQuotes();

  const {data, date} = useMemo(() => createData(watchlistAssets, stockQuotes)
    , [watchlistAssets, stockQuotes]);

  if (error || watchlistError) return `Error ${JSON.stringify(error)}`;

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

  const watchlists = createListCollection({
    items: [
      {label: "Watchlist", value: "Watchlist"},
    ],
  })

  return (
    <Card.Root overflow="hidden">
      <Card.Body>
        <Select.Root variant={"subtle"} collection={watchlists} maxWidth={"xs"} defaultValue={[watchlists.items[0].value]}>
          <Select.HiddenSelect/>
          <Select.Label>Select watchlist</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select watchlist"/>
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator/>
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {watchlists.items.map((watchlist) => (
                  <Select.Item item={watchlist} key={watchlist.value}>
                    {watchlist.label}
                    <Select.ItemIndicator/>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        <div>&nbsp;</div>
        <div>Last updated at: {dayjs(date).format("h:mm:ss A")}</div>
        <div>&nbsp;</div>
        <Table.Root size="sm" interactive>
          <Table.Header bg="bg.subtle">
            <Table.Row>
              <Table.ColumnHeader>Symbol</Table.ColumnHeader>
              <Table.ColumnHeader>Last</Table.ColumnHeader>
              <Table.ColumnHeader>Chg</Table.ColumnHeader>
              <Table.ColumnHeader>Chg%</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data?.map((item) => (
              <Table.Row key={item.symbol}>
                <Table.Cell>
                  <Group>
                    <Icon color="grey">
                      <LuInfo/>
                    </Icon>
                    <div>
                      <Link href={`/stocks/${item.symbol}`}>{item.symbol}</Link>
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
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" colorPalette={"green"} data-testid={`add-btn`}>
          <LuBookPlus></LuBookPlus>
          Add stock</Button>
      </Card.Footer>
    </Card.Root>
  )
}

function createData(watchlistAssets: AssetDto[], stockQuotes: StockQuoteDto[]): DataType {
  const data = watchlistAssets?.map((asset) => {
    const stockQuote = stockQuotes?.find(q => q.symbol === asset.symbol) || asset.quote;

    return {
      symbol: asset.symbol,
      last: stockQuote?.currentPrice,
      change: stockQuote?.change,
      percentChange: stockQuote?.percentChange
    }
  });

  return {
    data,
    date: new Date()
  }
}

export default Watchlist;
