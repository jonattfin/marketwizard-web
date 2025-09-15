
import React from "react";
import dayjs from "dayjs";
import {Button, Card, Image, Text, Heading, Grid, Link as ChakraLink, FormatNumber} from "@chakra-ui/react"
import CreatePortfolio from "@/app/portfolios/_components/create-portfolio";
import Link from "next/link";
import UpdatePortfolio from "@/app/portfolios/_components/update-portfolio";
import {PortfolioSummaryDto} from "@/graphql/_generated/graphql";

export type PortfoliosCardsProps = {
  readonly portfolios: PortfolioSummaryDto[];
  onAddPortfolio: (name: string, description: string, image: string) => Promise<void>;
  onDeletePortfolio: (id: string) => Promise<void>;
  onUpdatePortfolio: (id: string, name: string, description:string, imageUrl: string) => Promise<void>;
}

export default function PortfoliosCards({
                                          portfolios,
                                          onDeletePortfolio,
                                          onAddPortfolio,
                                          onUpdatePortfolio
                                        }: PortfoliosCardsProps) {
  return (
    <>
      <Heading>Portfolios</Heading>
      <div>&nbsp;</div>
      <CreatePortfolio onAddPortfolio={onAddPortfolio}/>
      <div>&nbsp;</div>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id}>
            <PortfolioCard {...{portfolio}} onDeletePortfolio={onDeletePortfolio}
                           onUpdatePortfolio={onUpdatePortfolio}/>
          </div>
        ))}
      </Grid>
      <br/>
    </>
  );
}

type PortfolioCardProps = {
  onDeletePortfolio: (id: string) => Promise<void>;
  onUpdatePortfolio: (id: string, name: string, description:string, imageUrl: string) => Promise<void>;
  readonly portfolio: PortfolioSummaryDto;
}

function PortfolioCard({portfolio, onDeletePortfolio, onUpdatePortfolio}: PortfolioCardProps) {
  return (
    <Card.Root overflow="hidden">
      <Image
        src={portfolio.imageUrl}
        alt={portfolio.description}
      />
      <Card.Body gap="2">
        <Card.Title data-testid={portfolio.id}>
          <ChakraLink asChild>
            <Link href={`/portfolios/${portfolio.id}`}>{portfolio.name}</Link>
          </ChakraLink>
        </Card.Title>
        <Card.Description>
          {portfolio.createdAt && (<div>Created at: {dayjs(portfolio.createdAt).format("DD/MM/YYYY")}</div>)}
          <br/>
          {portfolio.description}
        </Card.Description>
        <Text letterSpacing="tight" mt="1">
          Total value: <FormatNumber value={(portfolio?.totalValue || 0) + (portfolio?.unrealizedGain || 0)} style="currency" currency="USD"/>
        </Text>
        <Text letterSpacing="tight" mt="2">
          Unrealized gain: <FormatNumber value={portfolio?.unrealizedGain || 0} style="currency" currency="USD"/>
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <UpdatePortfolio portfolio={portfolio} onUpdatePortfolio={onUpdatePortfolio}></UpdatePortfolio>
        <Button data-testid={`delete-btn-${portfolio.id}`} colorPalette={"red"} variant={"outline"} onClick={async () => {
          await onDeletePortfolio(portfolio.id);
        }}>Delete</Button>
      </Card.Footer>
    </Card.Root>
  );
}