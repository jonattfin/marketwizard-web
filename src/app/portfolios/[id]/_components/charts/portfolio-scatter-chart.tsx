'use client';

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

  performance.portfolioAssets.forEach(({asset}) => {

    series.push({
      label: asset.symbol,
      data: asset.priceHistories.map(((ph, index) => {
        return {
          x: new Date(ph.date).getMonth(),
          y: ph.price,
          id: `data-${index}`
        }
      }))
    })
  })

  return (
    <ScatterChart
      height={300}
      series={series}
    />
  );
}
