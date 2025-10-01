import {StockDto} from "@/graphql/_generated/graphql";
import {ValuationChart} from "@/app/stocks/[symbol]/_components/overview";
import {Button, Card, createListCollection, Flex, Listbox} from "@chakra-ui/react";

export function createValuation(stock?: StockDto) {
  return (
    <Card.Root>
      <Card.Header>Valuation</Card.Header>
      <Card.Body>
        Is AMZN undervalued compared to its fair value, analyst forecasts and its price relative to the market?
        <div>&nbsp;</div>
        <Flex>
          <div>{createValuationCollection()}</div>
          <ValuationChart/>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline">Data</Button>
        <Button size="xs" variant="outline">Learn</Button>
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