'use client';

import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

import {PerformanceType, Portfolio} from "@/api/types";

export type PortfolioScatterChartProps = {
  portfolio?: Portfolio;
}

export default function PortfolioScatterChart({portfolio}: PortfolioScatterChartProps) {
  if (!portfolio) {
    return;
  }

  const portfolioData = portfolio?.performance[PerformanceType.Portfolio].days;
  const spxData = portfolio?.performance[PerformanceType.Spx].days;

  return (
    <ScatterChart
      height={300}
      series={[
        {
          label: 'Portfolio',
          data: portfolioData.map((value, indice) => ({ x: indice, y: value, id: `data-${indice}` })),
        },
        {
          label: 'SPX',
          data: spxData.map((value, indice) => ({ x: indice, y: value, id: `data-${indice}` })),
        },
      ]}
    />
  );
}
