import {Portfolio} from "@/api/types";

import React from "react";
import {Button, Card, Image, Text, Heading, Grid, Link as ChakraLink, FormatNumber} from "@chakra-ui/react"
import CreatePortfolio from "@/app/portfolios/_components/create-portfolio";
import Link from "next/link";

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

type PortfolioCardProps = {
  onDeletePortfolio: (id: string) => Promise<void>;
  readonly portfolio: Portfolio;
}

function PortfolioCard({portfolio, onDeletePortfolio}: PortfolioCardProps) {
  return (
    <Card.Root overflow="hidden">
      <Image
        src={portfolio.imageUrl}
        alt={portfolio.description}
      />
      <Card.Body gap="2">
        <Card.Title>
          <ChakraLink asChild>
            <Link href={`/portfolios/${portfolio.id}`}>{portfolio.name}</Link>
          </ChakraLink>
        </Card.Title>
        <Card.Description>
          {portfolio.description}
        </Card.Description>
        <Text letterSpacing="tight" mt="2">
          Total value: <FormatNumber value={portfolio.totalValue} style="currency" currency="USD"/>
        </Text>
        <Text letterSpacing="tight" mt="2">
          Unrealized gain: <FormatNumber value={portfolio.unrealizedGain} style="currency" currency="USD"/>
        </Text>
        <Text letterSpacing="tight" mt="2">
          Holdings: {portfolio.portfolioAssets.length}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button colorPalette={"yellow"} variant={"outline"}>Update</Button>
        <Button colorPalette={"red"} variant={"outline"} onClick={async () => {
          await onDeletePortfolio(portfolio.id);
        }}>Delete</Button>
      </Card.Footer>
    </Card.Root>
  );
}