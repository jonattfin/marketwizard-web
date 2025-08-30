import {Portfolio} from "@/api/types";

import PortfolioCard from "@/app/portfolios/_components/portfolio-card";
import React from "react";
import {Grid, Heading} from "@chakra-ui/react";

export type PortfoliosCardsProps = {
  readonly portfolios: Portfolio[];
}

export default function PortfoliosCards({portfolios}: PortfoliosCardsProps) {
  return (
    <>
      <Heading>Portfolios</Heading>
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