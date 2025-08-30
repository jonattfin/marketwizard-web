import {Portfolio} from "@/api/types";

import PortfolioCard from "@/app/portfolios/_components/portfolio-card";
import React from "react";

export type PortfoliosCardsProps = {
  readonly portfolios: Portfolio[];
}

export default function PortfoliosCards({portfolios}: PortfoliosCardsProps) {
  return (
    <div>
      <h2>Portfolios</h2>
      <div>
        {portfolios.map((portfolio) => (
          <div key={portfolio.id}>
            <PortfolioCard {...{portfolio}} />
          </div>
        ))}
      </div>
      <br/>
    </div>
  );
}