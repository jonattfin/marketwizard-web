'use client';

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import range from 'lodash/range';
import random from 'lodash/random';

import {scatterData} from './data';
import {Stock} from "@/api/types";

export function BasicBarChart() {
  return (
    <BarChart
      xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={300}
    />
  );
}

export type BasicPieChartProps = {
  stocks: Stock[];
}

export function BasicPieChart({stocks}: BasicPieChartProps) {
  const data = stocks.map(stock => ({
    id: stock.id,
    value: stock.allocation,
    label: stock.symbol,
  }));

  return (
    <PieChart
      series={[
        {
          data
        },
      ]}
      width={200}
      height={200}
    />
  );
}

const spxData = range(9).map(x => random(1, 20));
const portfolioData = range(9).map(x => random(1, 20));
const xLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
];

export function BasicLineChart() {
  return (
    <LineChart
      height={300}
      series={[
        { data: portfolioData, label: 'Portfolio' },
        { data: spxData, label: 'SPX' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  );
}

export function BasicScatterChart() {
  return (
    <ScatterChart
      height={300}
      series={[
        {
          label: 'Portfolio',
          data: scatterData.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: 'SPX',
          data: scatterData.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
        },
      ]}
    />
  );
}
