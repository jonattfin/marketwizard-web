import {Portfolio} from "@/api/types";

import PortfolioCard from "@/app/portfolios/_components/portfolio-card";
import React from "react";
import {Grid, Heading} from "@chakra-ui/react";
import CreatePortfolio from "@/app/portfolios/_components/create-portfolio";

export type PortfoliosCardsProps = {
  readonly portfolios: Portfolio[];
  onAddPortfolio: (name: string, description: string, image: string) => Promise<void>;
  onDeletePortfolio: (id: string) => Promise<void>;
}

export default function PortfoliosCards({portfolios, onDeletePortfolio, onAddPortfolio}: PortfoliosCardsProps) {
  return (
    <>
      <Heading>Portfolios</Heading>
      <div>&nbsp;</div>
      <CreatePortfolio onAddPortfolio={onAddPortfolio}/>
      <div>&nbsp;</div>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id}>
            <PortfolioCard {...{portfolio}} onDeletePortfolio={onDeletePortfolio}/>
          </div>
        ))}
      </Grid>
      <br/>
    </>
  );
}