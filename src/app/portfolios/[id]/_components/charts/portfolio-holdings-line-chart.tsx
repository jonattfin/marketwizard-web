'use client';

import {LineChart, LineSeries} from "@mui/x-charts/LineChart";
import {PortfolioPerformance} from "@/api/types";

type PortfolioHoldingsLineChartProps = {
  performance?: PortfolioPerformance;
}

export default function PortfolioHoldingsLineChart({performance}: Readonly<PortfolioHoldingsLineChartProps>) {
  if (!performance) {
    return null;
  }

  const series: LineSeries[] = [];
  const xAxisData: string[] = [];

  performance.portfolioAssets.forEach(({asset}) => {
    const yData: number[] = [];

    asset.priceHistories.forEach(histories => {
      xAxisData.push(new Date(histories.date).getMonth().toString());
      yData.push(histories.price)
    })

    series.push({
      label: asset.symbol,
      data: yData,
      showMark: true
    })
  })

  return (
    <LineChart
      height={300}
      series={series}
      xAxis={[{scaleType: 'point', data: xAxisData}]}
      yAxis={[{width: 50}]}
    />
  );
}