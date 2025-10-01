'use client';

import {StockDto} from "@/graphql/_generated/graphql";
import {Button, Card, Flex, List, Stack, DataList} from "@chakra-ui/react";
import {LuCircleCheck, LuCircleDashed} from "react-icons/lu";
import {Chart, useChart} from "@chakra-ui/charts";
import {Bar, BarChart, CartesianGrid, PolarAngleAxis, PolarGrid, Radar, RadarChart, XAxis, YAxis} from "recharts";

import {random} from "@es-toolkit/es-toolkit";

export function createCompanyOverview(stock?: StockDto) {
  return (
    <Stack>
      <Card.Root>
        <Card.Header>Company Overview</Card.Header>
        <Card.Body>
          <Flex>
            <Stack>
              <div>{stock?.description}</div>
              <div>&nbsp;</div>
              <div>
                {createRewardsSection()}
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
      {createCommunityFairValuesSection(stock)}
      {createCompetitorsSection(stock)}
      {createAboutSection(stock)}
    </Stack>
  )
}

function createCommunityFairValuesSection(stock?: StockDto) {

  const createNarrativeGraph = () => {
    const chart = useChart({
      data: [
        {allocation: 60, type: "Stock"},
        {allocation: 45, type: "Crypto"},
        {allocation: 12, type: "ETF"},
        {allocation: 4, type: "Cash"},
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
    <Card.Root>
      <Card.Header>{stock?.symbol} Community fair values</Card.Header>
      <Card.Body>
        <Flex>
          <Stack>
            <div>{stock?.description}</div>
            <div>&nbsp;</div>
            <div>
              {/*{createNarrativeGraph()}*/}
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
  );
}

function createCompetitorsSection(stock?: StockDto) {
  return (
    <Card.Root>
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

function createAboutSection(stock?: StockDto) {
  const stats = [
    {label: "Founded", value: "1994"},
    {label: "Employees", value: "1556000"},
    {label: "CEO", value: "Andy Jassy"},
    {label: "Website", value: "https://www.aboutamazon.com/"},
  ]

  const showMore = true;

  return (
    <Card.Root>
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
        <Button size="xs" variant="outline" colorPalette={"blue"}>Show less</Button>
      </Card.Footer>
    </Card.Root>
  )
}


function createRewardsSection() {
  return (
    <List.Root gap="2" variant="plain" align="center">
      <List.Item>
        <List.Indicator asChild color="green.500">
          <LuCircleCheck/>
        </List.Indicator>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </List.Item>
      <List.Item>
        <List.Indicator asChild color="green.500">
          <LuCircleCheck/>
        </List.Indicator>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </List.Item>
      <List.Item>
        <List.Indicator asChild color="green.500">
          <LuCircleDashed/>
        </List.Indicator>
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </List.Item>
    </List.Root>
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