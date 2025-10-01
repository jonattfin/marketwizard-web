import {StockDto} from "@/graphql/_generated/graphql";
import {Button, Card, Flex, List, Stack} from "@chakra-ui/react";
import {LuCircleCheck, LuCircleDashed} from "react-icons/lu";
import {Chart, useChart} from "@chakra-ui/charts";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart} from "recharts";

export function createCompanyOverview(stock?: StockDto) {
  return (
    <Card.Root>
      <Card.Header>Company Overview</Card.Header>
      <Card.Body>
        <Flex>
          <Stack>
            <div>{stock?.description}</div>
            <div>&nbsp;</div>
            <div>
              {createRewards()}
            </div>
          </Stack>
          <ValuationChart/>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline">Data</Button>
        <Button size="xs" variant="outline">Learn</Button>
      </Card.Footer>
    </Card.Root>
  )
}

function createRewards() {
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
      {windows: 110, month: "Value"},
      {windows: 130, month: "Future"},
      {windows: 110, month: "Past"},
      {windows: 90, month: "Health"},
      {windows: 75, month: "Dividend"},
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