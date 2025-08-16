import * as React from 'react';
import {ScatterChart, ScatterSeries} from '@mui/x-charts/ScatterChart';

import {PortfolioPerformance} from "@/api/types";

export type PortfolioScatterChartProps = {
  performance?: PortfolioPerformance;
}

export default function PortfolioScatterChart({performance}: Readonly<PortfolioScatterChartProps>) {
  if (!performance) {
    return;
  }

  const series: ScatterSeries[] = [];

  performance.returns.forEach((p) => {
    series.push({
      data: p.weeks.map((value, index) => {
        return ({x: index, y: value, id: `data-${index}`})
      })
      ,
      label: p.assetName,
    })
    ;
  })

  return (
    <ScatterChart
      height={300}
      series={series}
    />
  );
}
