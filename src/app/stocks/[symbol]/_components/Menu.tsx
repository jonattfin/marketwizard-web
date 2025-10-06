import {Button, Card, createListCollection, List, Link} from "@chakra-ui/react";

export const COMPANY_OVERVIEW = "Company Overview";
export const COMPANY_VALUATION = "Valuation";
export const FUTURE_GROWTH = "Future Growth";
export const PAST_PERFORMANCE = "Past Performance";
export const FINANCIAL_HEALTH = "Financial Health";
export const DIVIDEND = "Dividend";
export const Management = "Management";
export const Ownership = "Ownership";


export default function CompanyMenu() {
  const values = [
    COMPANY_OVERVIEW, COMPANY_VALUATION, FUTURE_GROWTH, PAST_PERFORMANCE,
    FINANCIAL_HEALTH, DIVIDEND, Management, Ownership
  ];

  const collection = createListCollection({
    items: values.map(v => ({
      label: v,
      value: v
    }))
  })

  return (
    <Card.Root width="320px" variant={"subtle"}>
      <Card.Body gap="2">
        <List.Root gap="2" variant="plain">
          {collection.items.map((item) => (
            <List.Item>
              <Button variant="ghost" width={"100%"} asChild>
                <Link key={item.value} href={`#${item.value}`}>{item.label}</Link>
              </Button>
            </List.Item>
          ))}
        </List.Root>
      </Card.Body>
    </Card.Root>
  )
}

