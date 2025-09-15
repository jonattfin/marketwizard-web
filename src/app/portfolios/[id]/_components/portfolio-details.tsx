'use client';

import {Blockquote, Breadcrumb, Button, Flex, FormatNumber, Heading, Text} from "@chakra-ui/react"

import Loading from "@/shared/loading";
import {usePortfolio} from "@/graphql/hooks";
import PortfolioTabs from "./portfolio-tabs";

export type PortfolioDetailsProps = {
  id: string | undefined
}

export default function PortfolioDetails({id}: Readonly<PortfolioDetailsProps>) {
  const {portfolio, loading, error} = usePortfolio(id);

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
      <div>&nbsp;</div>
      <Flex direction="column">
        <Flex gap="4" justify="flex-start">
          <Heading>{portfolio.name}</Heading>
        </Flex>
        <div>&nbsp;</div>
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
