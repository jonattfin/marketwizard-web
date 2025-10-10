'use client';

import {
  Button,
  Card,
  Flex,
  List,
  Stack,
  DataList,
  Highlight, Container,
} from "@chakra-ui/react";
import {LuCircleCheck, LuMessageCircleWarning} from "react-icons/lu";
import {Chart, useChart} from "@chakra-ui/charts"
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Tooltip,
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis
} from "recharts"

import {COMPANY_OVERVIEW} from "@/app/stocks/[symbol]/_components/Menu";
import {useState} from "react";
import {StockDto} from "@/api/types";


export type CompanyOverviewType = {
  stock?: StockDto | null;
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
            <Container maxWidth={"300px"}>
              <ValuationChart/>
            </Container>
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
        <NarrativeGraph/>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
        <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
      </Card.Footer>
    </Card.Root>
  );
}


function NarrativeGraph() {
  const chart = useChart({
    data: [
      {allocation: 60, type: "Stock", color: "red.solid"},
      {allocation: 45, type: "Crypto", color: "blue.solid"},
      {allocation: 12, type: "ETF", color: "green.solid"},
      {allocation: 4, type: "Cash", color: "yellow.solid"},
    ],
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
        <Bar isAnimationActive={false} dataKey={chart.key("allocation")}>
          {chart.data.map((item) => (
            <Cell key={item.type} fill={chart.color(item.color)}/>
          ))}
        </Bar>
      </BarChart>
    </Chart.Root>
  )
}

function CompetitorsSection({stock}: CompanyOverviewType) {
  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>{stock?.name} Competitors</Card.Header>
      <Card.Body>
        <Flex justify="space-between">
          <ValuationChart/>
          <ValuationChart/>
          <ValuationChart/>
          <ValuationChart/>
          <ValuationChart/>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
        <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
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
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

function PriceHistorySection() {
  const data = [
    {name: "Product A", uv: 4000, pv: 2400, amt: 2400},
    {name: "Product B", uv: 3000, pv: 1398, amt: 2210},
    {name: "Product C", uv: -1000, pv: 9800, amt: 2290},
    {name: "Product D", uv: 500, pv: 3908, amt: 2000},
    {name: "Product E", uv: -2000, pv: 4800, amt: 2181},
    {name: "Product F", uv: -250, pv: 3800, amt: 2500},
    {name: "Product G", uv: 3490, pv: 4300, amt: 2100},
  ]

  const gradientOffset = () => {
    const max = Math.max(...data.map((i) => i.uv))
    const min = Math.min(...data.map((i) => i.uv))
    if (max <= 0) return 0
    if (min >= 0) return 1
    return max / (max - min)
  }

  const offset = gradientOffset()

  const chart = useChart({
    data,
    series: [
      {name: "uv", color: "teal.solid"},
      {name: "pv", color: "purple.solid"},
    ],
  })

  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>Price History &amp; Performance</Card.Header>
      <Card.Body>
        <Chart.Root maxH="sm" chart={chart}>
          <AreaChart data={chart.data}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.color("border")}/>
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey={chart.key("name")}
              tickFormatter={(value) => value.replace("Product ", "")}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={chart.formatNumber({
                style: "currency",
                currency: "USD",
                currencyDisplay: "narrowSymbol",
                notation: "compact",
              })}
            />
            <Tooltip
              cursor={false}
              animationDuration={100}
              content={<Chart.Tooltip/>}
            />
            <defs>
              <Chart.Gradient
                id="uv-gradient"
                stops={[
                  {offset, color: "teal.solid", opacity: 1},
                  {offset, color: "red.solid", opacity: 1},
                ]}
              />
            </defs>
            <Area
              type="monotone"
              isAnimationActive={false}
              dataKey={chart.key("uv")}
              fill="url(#uv-gradient)"
              fillOpacity={0.2}
              stroke={chart.color("gray.solid")}
            />
          </AreaChart>
        </Chart.Root>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
        <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
      </Card.Footer>
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
        <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
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
      {windows: 110, month: "January"},
      {windows: 130, month: "February"},
      {windows: 110, month: "March"},
      {windows: 90, month: "May"},
      {windows: 75, month: "June"},
    ],
    series: [{name: "windows", color: "teal.solid"}],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data}>
        <PolarGrid stroke={chart.color("border")}/>
        <PolarAngleAxis dataKey={chart.key("month")}/>
        <Tooltip content={<Chart.Tooltip/>}/>
        {chart.series.map((item) => (
          <Radar
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