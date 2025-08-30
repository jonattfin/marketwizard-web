'use client';

import * as React from 'react';

export type PortfolioSummaryComponentProps = {
  title: string;
  subtitle: string;
  note?: string;
}

export default function PortfolioSummaryComponent({title, subtitle, note}: PortfolioSummaryComponentProps) {

  return (
   JSON.stringify({title, subtitle, note})
  );
}
