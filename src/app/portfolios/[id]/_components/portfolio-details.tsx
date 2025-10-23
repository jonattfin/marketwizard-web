'use client';

import {Blockquote, Breadcrumb, Button, Flex, FormatNumber, Heading, Text} from "@chakra-ui/react"

import Loading from "@/shared/loading";
import hooks from "@/api/hooks";
import PortfolioTabs from "./portfolio-tabs";

export type PortfolioDetailsType = {
  id: string | undefined
}

export default function PortfolioDetails({id}: Readonly<PortfolioDetailsType>) {
  const {portfolio, loading, error} = hooks.usePortfolio(id);

  if (loading) return <Loading/>;
  if (error || !portfolio) return `Page ${error}`;

  return (
    <>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/portfolios">Portfolios</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator/>
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>{portfolio.name}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <Flex direction="column">
        <Flex gap="4" justify="flex-start">
          <Heading>{portfolio.name}</Heading>
        </Flex>

        <Flex gap="4" justify="flex-end">
          <Button variant="outline" colorPalette={"green"} data-testid={"btn-add-transaction"}>Add transaction</Button>
        </Flex>
        <Text textStyle="md">
          Portfolio value: <FormatNumber value={(portfolio?.totalValue || 0) + (portfolio?.unrealizedGain || 0)} style="currency" currency="USD"/>
        </Text>
        <Text textStyle="md">
          Unrealized gain: <FormatNumber value={portfolio.unrealizedGain || 0} style="currency" currency="USD"/>
        </Text>

      </Flex>
      <div>&nbsp;</div>
      <Blockquote.Root>
        <Blockquote.Content>
          {portfolio.description}
        </Blockquote.Content>
      </Blockquote.Root>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <PortfolioTabs portfolio={portfolio}/>
    </>
  );
}
