'use client';

import * as React from 'react';
import {ScatterChart} from '@mui/x-charts/ScatterChart';

import {PortfolioPerformance} from "@/api/types";

export type PortfolioScatterChartProps = {
  performance?: PortfolioPerformance;
}

export default function PortfolioScatterChart({performance}: Readonly<PortfolioScatterChartProps>) {
  if (!performance) {
    return;
  }

  const series = [];
  for (const performanceKey in performance?.insights) {
    if (performanceKey === 'SPX' || performanceKey === 'Portfolio') {
      continue;
    }

    series.push({
      data: performance?.insights[performanceKey]?.weeks.map((value, index) => {
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
