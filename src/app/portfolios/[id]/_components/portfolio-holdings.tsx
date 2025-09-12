import * as React from 'react';

import {Suspense} from "react";
import Loading from "@/shared/loading";

export type PortfolioHoldingsComponentProps = {
  readonly portfolioId: string;
};

export default function PortfolioHoldingsComponent({portfolioId}: PortfolioHoldingsComponentProps) {

  return (
    <Suspense fallback={<Loading/>}>
      {portfolioId}
      <h3>Holdings</h3>
    </Suspense>
  );
}