import {Portfolio} from "@/api/types";

import PortfolioCard from "@/app/portfolios/_components/portfolio-card";
import React from "react";
import {Grid} from "@chakra-ui/react";

export type PortfoliosCardsProps = {
  readonly portfolios: Portfolio[];
}

export default function PortfoliosCards({portfolios}: PortfoliosCardsProps) {
  return (
    <>
      <h1>Portfolios</h1>
      <div>&nbsp;</div>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id}>
            <PortfolioCard {...{portfolio}} />
          </div>
        ))}
      </Grid>
      <br/>
    </>
  );
}