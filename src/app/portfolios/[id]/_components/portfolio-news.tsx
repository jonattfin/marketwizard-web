'use client';

import * as React from 'react';

export type PortfolioNewsComponentProps = {
  portfolioId: string;
}


export default function PortfolioNewsComponent({portfolioId}: PortfolioNewsComponentProps) {
  return (
    <>
      {portfolioId}
      <h3>News</h3>
    </>
  );
}