'use client';

import {useStock} from "@/graphql/hooks";
import Loading from "@/shared/loading";
import {Avatar, Button, Card, createListCollection, Flex, Listbox, Stack} from "@chakra-ui/react";
import {Suspense, useState} from "react";

import {createCompanyOverview} from "@/app/stocks/[symbol]/_components/overview";
import {createValuation} from "@/app/stocks/[symbol]/_components/valuation";

export type StockDetailsProps = {
  symbol: string;
}

export default function StockDetails({symbol}: StockDetailsProps) {
  const {stock} = useStock(symbol);
  const [value, setValue] = useState<string[]>(["Company Overview"])

  return (
    <Suspense fallback={<Loading/>}>
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
      <Flex>
        <div>
          {createCollection(value, setValue)}
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <Stack separator={<div>&nbsp;</div>}>
          {createCompanyOverview(stock)}
          {createValuation()}
        </Stack>
      </Flex>
    </Suspense>
  )
}

function createCollection(value: string[], setValue: (value: string[]) => void) {
  const values = [
    "Company Overview", "Valuation", "Future Growth", "Past Performance",
    "Financial Health", "Dividend", "Management", "Ownership"
  ];

  const collection = createListCollection({
    items: values.map(v => ({
      label: v,
      value: v
    }))
  })

  return (
    <Listbox.Root
      collection={collection} width="320px" value={value} variant={"subtle"}
      onValueChange={(details) => setValue(details.value)}>
      <Listbox.Content border={0}>
        {collection.items.map((item) => (
          <Listbox.Item item={item} key={item.value}>
            <Listbox.ItemText>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator/>
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

