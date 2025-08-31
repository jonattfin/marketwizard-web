'use client';

import {PortfolioPerformance} from "@/api/types";
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import {Table, Tabs} from "@chakra-ui/react";
import {LuFolder, LuSquareCheck, LuUser} from "react-icons/lu";
import {Chart, useChart} from "@chakra-ui/charts"
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts"

function usePortfolioPerformance(id: string) {
  interface Data {
    portfolioById: PortfolioPerformance;
  }

  interface Variables {
    id: string;
  }

  const GET_PERFORMANCE_BY_PORTFOLIO_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetPortfolioPerformanceById($id: UUID!) {
    portfolioById(portfolioId: $id) {
      id
      portfolioAssets {
        type
        numberOfShares
        pricePerShare
        asset {
          symbol
          priceHistories {
            price
            date
          }
        }
      }
    }
  }
`;

  const {data: {portfolioById: performance}} = useSuspenseQuery(
    GET_PERFORMANCE_BY_PORTFOLIO_ID,
    {
      variables: {id}
    });

  return {performance};
}

export type PortfolioTabsComponentProps = {
  readonly portfolioId: string;
}

export default function PortfolioTabsComponent({portfolioId}: PortfolioTabsComponentProps) {
  const {performance} = usePortfolioPerformance(portfolioId);

  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">
          <LuUser/>
          Overview
        </Tabs.Trigger>
        <Tabs.Trigger value="holdings">
          <LuFolder/>
          Holdings
        </Tabs.Trigger>
        <Tabs.Trigger value="transactions">
          <LuSquareCheck/>
          Transactions
        </Tabs.Trigger>
        <Tabs.Trigger value="analyis">
          <LuSquareCheck/>
          Analyis
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">{Overview(performance)}</Tabs.Content>
      <Tabs.Content value="holdings">{Holdings(performance)}</Tabs.Content>
      <Tabs.Content value="transactions">Transactions</Tabs.Content>
      <Tabs.Content value="analysis">Analysis</Tabs.Content>
    </Tabs.Root>
  );
}

function Overview(performance: PortfolioPerformance) {
  const chart = useChart({
    data: [
      {windows: 186, mac: 80, linux: 120, month: "January"},
      {windows: 165, mac: 95, linux: 110, month: "February"},
      {windows: 190, mac: 87, linux: 125, month: "March"},
      {windows: 195, mac: 88, linux: 130, month: "May"},
      {windows: 182, mac: 98, linux: 122, month: "June"},
      {windows: 175, mac: 90, linux: 115, month: "August"},
      {windows: 180, mac: 86, linux: 124, month: "October"},
      {windows: 185, mac: 91, linux: 126, month: "November"},
    ],
    series: [
      {name: "windows", color: "teal.solid"},
      {name: "mac", color: "purple.solid"},
      {name: "linux", color: "blue.solid"},
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border")} vertical={false}/>
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          dataKey={chart.key("windows")}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={{stroke: chart.color("border")}}
          content={<Chart.Tooltip/>}
        />
        <Legend verticalAlign="top" align="right" content={<Chart.Legend/>}/>
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            strokeWidth={2}
            stroke={chart.color(item.color)}
            dot={false}
            activeDot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

function Holdings(performance: PortfolioPerformance) {
  const items = performance.portfolioAssets.map(p => ({
    symbol: p.asset.symbol,
    name: p.asset.symbol,
    numberOfShares: p.numberOfShares,
    pricePerShare: p.pricePerShare,
  }))

  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Symbol</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">NumberOfShares</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">PricePerShare</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.symbol}>
            <Table.Cell>{item.symbol}</Table.Cell>
            <Table.Cell textAlign="end">{item.numberOfShares}</Table.Cell>
            <Table.Cell textAlign="end">{item.pricePerShare}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}