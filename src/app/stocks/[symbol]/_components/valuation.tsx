'use client';

import {ValuationChart} from "@/app/stocks/[symbol]/_components/overview";
import {Button, Card, createListCollection, Flex, Listbox} from "@chakra-ui/react";
import {COMPANY_VALUATION} from "@/app/stocks/[symbol]/_components/Menu";

export function createValuation() {
  return (
    <Card.Root variant={"subtle"} id={COMPANY_VALUATION}>
      <Card.Header>Valuation</Card.Header>
      <Card.Body>
        Is AMZN undervalued compared to its fair value, analyst forecasts and its price relative to the market?
        <div>&nbsp;</div>
        <Flex justify="space-between">
          {createValuationCollection()}
          <ValuationChart/>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
        <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export function createValuationCollection() {
  const values = [
    "Bellow fair value",
    "Significantly bellow fair value",
    "Price to Earnings vs Peers",
    "Price to Earning vs Industry",
    "Price to Earnings vs Fair Ratio",
    "Analyst Forecast"
  ];

  const collection = createListCollection({
    items: values.map(v => ({
      label: v,
      value: v
    }))
  })

  return (
    <Listbox.Root collection={collection} width="320px">
      <Listbox.Content>
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