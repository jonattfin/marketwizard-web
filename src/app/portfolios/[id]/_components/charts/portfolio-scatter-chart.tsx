'use client';

import * as React from 'react';
import {ScatterChart} from '@mui/x-charts/ScatterChart';

import {Portfolio} from "@/api/types";

export type PortfolioScatterChartProps = {
  portfolio?: Portfolio;
}

export default function PortfolioScatterChart({portfolio}: Readonly<PortfolioScatterChartProps>) {
  if (!portfolio) {
    return;
  }

  const series = [];
  for (const performanceKey in portfolio?.performance.insights) {
    if (performanceKey === 'SPX' || performanceKey === 'Portfolio') {
      continue;
    }

    series.push({
      data: portfolio?.performance?.insights[performanceKey]?.weeks.map((value, index) => {
        return ({x: index, y: value, id: `data-${index}`})
      }),
      label: performanceKey
    })
  }

  return (
    <ScatterChart
      height={300}
      series={series}
    />
  );
}
