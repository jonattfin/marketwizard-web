"use client"

import {Chart, useChart} from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {PortfolioDetailsDto} from "@/graphql/_generated/graphql";
import {groupBy} from "@es-toolkit/es-toolkit";

type PortfolioOverviewProps = {
  portfolio: PortfolioDetailsDto
}

type CombinedAsset = {
  symbol: string;
  price: number;
  month: number;
}

const PortfolioOverview = ({portfolio}: PortfolioOverviewProps) => {
  const {data, series} = buildChartData(portfolio);

  const chart = useChart({
    data,
    series
  })

  return (
    <>
      <Chart.Root maxH="sm" chart={chart}>
        <AreaChart data={chart.data} margin={{top: 20, right: 30, bottom: 5, left: 0}}>
          <CartesianGrid stroke={chart.color("border.muted")} vertical={false}/>
          <YAxis stroke={chart.color("border")}/>
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey={chart.key("month")}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip
            cursor={false}
            animationDuration={100}
            content={<Chart.Tooltip/>}
          />
          <Legend content={<Chart.Legend/>}/>
          <ReferenceLine
            x="August"
            label={{
              value: "Black Friday",
              position: "insideTopRight",
              style: {fill: chart.color("red.fg"), fontWeight: "500"},
            }}
            stroke={chart.color("red.solid")}
          />
          {chart.series.map((item) => (
            <Area
              key={item.name}
              isAnimationActive={false}
              dataKey={chart.key(item.name)}
              fill={chart.color(item.color)}
              fillOpacity={0.2}
              stroke={chart.color(item.color)}
              stackId="a"
            />
          ))}
        </AreaChart>
      </Chart.Root>
    </>
  )
}

function buildChartData(portfolio: PortfolioDetailsDto) {
  const series: unknown[] = [];
  const data: unknown[] = []

  const combinedAssets: CombinedAsset[] = [];

  const colors = ["teal.solid", "green.solid", "blue.solid", "purple.solid", "orange.solid"];

  portfolio.assets.forEach((asset, index) => {
    series.push({name: asset.symbol, color: colors[index] || "grey.solid"});

    asset.priceHistory.forEach(price => {
      combinedAssets.push({
        symbol: asset.symbol,
        price: price.price,
        month: new Date(price.date).getMonth()
      });
    });

  });

  const groupedAssets = groupBy(combinedAssets, item => item.month);

  for (const month in groupedAssets) {
    const obj: any = {};
    for (const objElement of groupedAssets[month]) {
      obj[`${objElement.symbol}`] = objElement.price;
    }
    data.push({month, ...obj});
  }

  return {series, data};
}

export default PortfolioOverview;
