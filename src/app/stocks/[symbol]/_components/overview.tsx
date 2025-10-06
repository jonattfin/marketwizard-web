'use client';

import {StockDto} from "@/graphql/_generated/graphql";
import {
  Button,
  Card,
  Flex,
  List,
  Stack,
  DataList,
  Highlight,
} from "@chakra-ui/react";
import {LuCircleCheck, LuMessageCircleWarning} from "react-icons/lu";
import {Chart, useChart} from "@chakra-ui/charts";
import {
  Bar,
  BarChart,
  CartesianGrid, Line, LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart, Tooltip,
  XAxis,
  YAxis
} from "recharts";

import {random} from "es-toolkit";
import {COMPANY_OVERVIEW} from "@/app/stocks/[symbol]/_components/Menu";
import {useState} from "react";

export type CompanyOverviewType = {
  stock?: StockDto;
}

export function createCompanyOverview({stock}: CompanyOverviewType) {
  return (
    <Stack>
      <Card.Root variant={"subtle"} id={COMPANY_OVERVIEW}>
        <Card.Header>Company Overview</Card.Header>
        <Card.Body>
          <Flex>
            <Stack>
              <div>{stock?.description}</div>
              <div>&nbsp;</div>
              <div>
                <RewardsSection/>
              </div>
              <div>
                <Button size="xs" variant="outline" colorPalette={"blue"}>See all risk checks</Button>
              </div>
            </Stack>
            <ValuationChart/>
          </Flex>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
          <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
        </Card.Footer>
      </Card.Root>
      <CommunityFairValuesSection stock={stock}/>
      <CompetitorsSection stock={stock}/>
      <PriceHistorySection/>
      <AboutSection stock={stock}/>
      <FundamentalsSection stock={stock}/>
    </Stack>
  )
}

function CommunityFairValuesSection({stock}: CompanyOverviewType) {

  const CreateNarrativeGraph = () => {
    const chart = useChart({
      data: [
        {allocation: 60, type: "60"},
        {allocation: 45, type: "45"},
        {allocation: 12, type: "12"},
        {allocation: 4, type: "4"},
      ],
      series: [{name: "allocation", color: "teal.solid"}],
    })

    return (
      <Chart.Root maxH="sm" chart={chart}>
        <BarChart data={chart.data}>
          <CartesianGrid stroke={chart.color("border.muted")} vertical={false}/>
          <XAxis axisLine={false} tickLine={false} dataKey={chart.key("type")}/>
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          {chart.series.map((item) => (
            <Bar
              key={item.name}
              isAnimationActive={false}
              dataKey={chart.key(item.name)}
              fill={chart.color(item.color)}
            />
          ))}
        </BarChart>
      </Chart.Root>
    );
  }

  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>{stock?.symbol} Community fair values</Card.Header>
      <Card.Body>
        <Flex>
          <Stack>
            <div>See what 2630 others think this stock is worth. Follow their fair value or set your own to get
              alerts.
            </div>
            <div>&nbsp;</div>
          </Stack>
        </Flex>
        <CreateNarrativeGraph/>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
        <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
      </Card.Footer>
    </Card.Root>
  );
}

function CompetitorsSection({stock}: CompanyOverviewType) {
  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>{stock?.name} Competitors</Card.Header>
      <Card.Body>
        <Flex>
          <ValuationChart/>
          <ValuationChart/>
          <ValuationChart/>
          <ValuationChart/>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
      </Card.Footer>
    </Card.Root>
  )
}

function AboutSection({stock}: CompanyOverviewType) {
  const [showMore, setShowMore] = useState(true);

  const stats = [
    {label: "Founded", value: "1994"},
    {label: "Employees", value: "1556000"},
    {label: "CEO", value: "Andy Jassy"},
    {label: "Website", value: "https://www.aboutamazon.com/"},
  ]

  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>About the company</Card.Header>
      <Card.Body>
        {showMore && (
          <>
            <DataList.Root orientation="horizontal">
              {stats.map((item) => (
                <DataList.Item key={item.label}>
                  <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                  <DataList.ItemValue>{item.value}</DataList.ItemValue>
                </DataList.Item>
              ))}
            </DataList.Root>
            <div>&nbsp;</div>
            <div>{stock?.description}</div>
          </>
        )}
      </Card.Body>
      <Card.Footer justifyContent="flex-start">
        <Button size="xs" variant="outline" colorPalette={"blue"} onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less": "Show More"}
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

function PriceHistorySection() {
  const chart = useChart({
    data: [
      {sale: 10, month: "January"},
      {sale: 95, month: "February"},
      {sale: 87, month: "March"},
      {sale: 88, month: "May"},
      {sale: 65, month: "June"},
      {sale: 90, month: "August"},
    ],
    series: [{name: "sale", color: "teal.solid"}],
  })

  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>Price History &amp; Performance</Card.Header>
      <Card.Body>
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
              stroke={chart.color("border")}
            />
            <Tooltip
              animationDuration={100}
              cursor={false}
              content={<Chart.Tooltip/>}
            />
            {chart.series.map((item) => (
              <Line
                key={item.name}
                isAnimationActive={false}
                dataKey={chart.key(item.name)}
                stroke={chart.color(item.color)}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </Chart.Root>
      </Card.Body>
    </Card.Root>

  );
}

function FundamentalsSection({stock}: CompanyOverviewType) {
  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>{stock?.name} Fundamentals Summary</Card.Header>
      <Card.Body>
        <Flex>
          <div>

          </div>
          <div>
            <Stack>
              <Highlight query="33.3x" styles={{px: "0.5", bg: "orange.subtle", color: "orange.fg"}}>P/E ratio
                33.3x</Highlight>
              <Highlight query="3.5x" styles={{px: "0.5", bg: "orange.subtle", color: "orange.fg"}}>P/S ratio
                3.5x</Highlight>
            </Stack>
          </div>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
      </Card.Footer>
    </Card.Root>
  )
}

function RewardsSection() {
  return (
    <div>
      {"Rewards".toUpperCase()}
      <List.Root gap="2" variant="plain" align="center">
        <List.Item>
          <List.Indicator asChild color="green.500">
            <LuCircleCheck/>
          </List.Indicator>
          Trading at 17.5% below our estimate of its fair value
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <LuCircleCheck/>
          </List.Indicator>
          Earnings are forecast to grow 15.25% per year
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <LuCircleCheck/>
          </List.Indicator>
          Earnings grew by 59% over the past year
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <LuCircleCheck/>
          </List.Indicator>
          Analysts in good agreement that stock price will rise by 20.6%
        </List.Item>

      </List.Root>
      <div>&nbsp;</div>
      {"Risk Analysis".toUpperCase()}
      <List.Root gap="2" variant="plain" align="center">
        <List.Item>
          <List.Indicator asChild color="red.500">
            <LuMessageCircleWarning/>
          </List.Indicator>
          High level of non-cash earnings
        </List.Item>
      </List.Root>
    </div>
  )
}

export const ValuationChart = () => {
  const chart = useChart({
    data: [
      {windows: random(50, 100), month: "Value"},
      {windows: random(50, 100), month: "Future"},
      {windows: random(50, 100), month: "Past"},
      {windows: random(50, 100), month: "Health"},
      {windows: random(50, 100), month: "Dividend"},
    ],
    series: [{name: "windows", color: "teal.solid"}],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data}>
        <PolarGrid stroke={chart.color("border")}/>
        <PolarAngleAxis dataKey={chart.key("month")}/>
        {chart.series.map((item) => (
          <Radar
            dot={{fillOpacity: 1}}
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}