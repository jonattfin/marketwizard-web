'use client';

import hooks from "@/api/hooks";
import Loading from "@/shared/loading";
import {Avatar, Button, Card, Container, Flex, Grid, GridItem, Stack} from "@chakra-ui/react";

import {createCompanyOverview} from "@/app/stocks/[symbol]/_components/overview";
import {createValuation} from "@/app/stocks/[symbol]/_components/valuation";
import CompanyMenu from "@/app/stocks/[symbol]/_components/Menu";

export type StockDetailsProps = {
  symbol: string;
}

export default function StockDetails({symbol}: StockDetailsProps) {
  const {stock, loading} = hooks.useStock(symbol);

  if (loading) return <Loading/>;

  return (
    <>
      <Card.Root variant={"subtle"}>
        <Card.Body gap="2">
          <Avatar.Root size="lg" shape="rounded">
            <Avatar.Fallback name={stock?.symbol}/>
          </Avatar.Root>
          <Card.Title mb="2">{stock?.name}</Card.Title>
          <Card.Description>
            {stock?.description}
          </Card.Description>
        </Card.Body>
        <Card.Footer justifyContent="flex-start">
          <Stack>
            <Flex>
              <Button variant="outline" colorPalette={"blue"}>Holding</Button>
              <div>&nbsp;</div>
              <Button variant="outline" colorPalette={"blue"}>Watching</Button>
            </Flex>
            <div>Updated 1d ago</div>
          </Stack>
        </Card.Footer>
      </Card.Root>
      <div>&nbsp;</div>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(4, 1fr)" gap="1">
        <GridItem>
          <CompanyMenu/>
        </GridItem>
        <GridItem colSpan={3}>
          <Stack>
            {createCompanyOverview(stock)}
            {createValuation()}
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}

