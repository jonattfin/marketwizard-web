'use client';

import {useStock} from "@/graphql/hooks";
import Loading from "@/shared/loading";
import {Container, createListCollection, Flex, Listbox, Stack} from "@chakra-ui/react";
import {useState} from "react";

import {createCompanyOverview} from "@/app/stocks/[symbol]/_components/overview";
import {createValuation} from "@/app/stocks/[symbol]/_components/valuation";

export type StockDetailsProps = {
  symbol: string;
}

export default function StockDetails({symbol}: StockDetailsProps) {
  const {stock, loading, error} = useStock(symbol);
  const [value, setValue] = useState<string[]>(["Company Overview"])

  if (loading) return <Loading/>;
  if (error || !stock) return `Page ${error}`;

  return (
    <Flex>
      <div>
        {createCollection(value, setValue)}
      </div>
      <Container>
        <Stack separator={<div>&nbsp;</div>}>
          {createCompanyOverview(stock)}
          {createValuation(stock)}
        </Stack>
      </Container>
    </Flex>
  )
}

function createCollection(value: string[], setValue: (value: string[]) => void) {
  const values = ["Company Overview", "Valuation", "Future Growth", "Past Performance",
    "Financial Health", "Dividend", "Management", "Ownership"];

  const collection = createListCollection({
    items: values.map(v => ({
      label: v,
      value: v
    }))
  })

  return (
    <Listbox.Root collection={collection} width="320px" value={value}
                  onValueChange={(details) => setValue(details.value)}>
      {/*<Listbox.Label>Company Overview</Listbox.Label>*/}
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

