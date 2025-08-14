'use client';

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

import {range, random} from "@es-toolkit/es-toolkit";

import {scatterData} from './data';
import {type Portfolio} from "@/api/types";

export type BasicPieChartProps = {
  readonly portfolio?: Portfolio;
}

export function BasicPieChart({portfolio}: BasicPieChartProps) {
  const data = portfolio?.assets.map(({id, symbol, allocation}) => ({
    id: id,
    value: allocation,
    label: symbol,
  })) ?? [];

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

const spxData = range(9).map(() => random(1, 20));
const portfolioData = range(9).map(() => random(1, 20));
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
