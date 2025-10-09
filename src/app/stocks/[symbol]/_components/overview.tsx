'use client';

import {
  Button,
  Card,
  Flex,
  List,
  Stack,
  DataList,
  Highlight,
} from "@chakra-ui/react";
import {LuCircleCheck, LuMessageCircleWarning} from "react-icons/lu";

import {COMPANY_OVERVIEW} from "@/app/stocks/[symbol]/_components/Menu";
import {useState} from "react";
import {StockDto} from "@/api/types";

export type CompanyOverviewType = {
  stock?: StockDto | null;
}

export function createCompanyOverview({stock}: CompanyOverviewType) {
  return (
    <Stack>
      <Card.Root variant={"subtle"} id={COMPANY_OVERVIEW}>
        <Card.Header>Company Overview</Card.Header>
        <Card.Body>
          <Flex>
            <Stack>
              <div>{stock?.description}</div>
              <div>&nbsp;</div>
              <div>
                <RewardsSection/>
              </div>
              <div>
                <Button size="xs" variant="outline" colorPalette={"blue"}>See all risk checks</Button>
              </div>
            </Stack>
            <ValuationChart/>
          </Flex>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
          <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
        </Card.Footer>
      </Card.Root>
      <CommunityFairValuesSection stock={stock}/>
      <CompetitorsSection stock={stock}/>
      <PriceHistorySection/>
      <AboutSection stock={stock}/>
      <FundamentalsSection stock={stock}/>
    </Stack>
  )
}

function CommunityFairValuesSection({stock}: CompanyOverviewType) {

  const CreateNarrativeGraph = () => {
    return <div>&nbsp;</div>
  }

  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>{stock?.symbol} Community fair values</Card.Header>
      <Card.Body>
        <Flex>
          <Stack>
            <div>See what 2630 others think this stock is worth. Follow their fair value or set your own to get
              alerts.
            </div>
            <div>&nbsp;</div>
          </Stack>
        </Flex>
        <CreateNarrativeGraph/>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
        <Button size="xs" variant="outline" colorPalette={"blue"}>Learn</Button>
      </Card.Footer>
    </Card.Root>
  );
}

function CompetitorsSection({stock}: CompanyOverviewType) {
  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>{stock?.name} Competitors</Card.Header>
      <Card.Body>
        <Flex>
          <ValuationChart/>
          <ValuationChart/>
          <ValuationChart/>
          <ValuationChart/>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
      </Card.Footer>
    </Card.Root>
  )
}

function AboutSection({stock}: CompanyOverviewType) {
  const [showMore, setShowMore] = useState(true);

  const stats = [
    {label: "Founded", value: "1994"},
    {label: "Employees", value: "1556000"},
    {label: "CEO", value: "Andy Jassy"},
    {label: "Website", value: "https://www.aboutamazon.com/"},
  ]

  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>About the company</Card.Header>
      <Card.Body>
        {showMore && (
          <>
            <DataList.Root orientation="horizontal">
              {stats.map((item) => (
                <DataList.Item key={item.label}>
                  <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                  <DataList.ItemValue>{item.value}</DataList.ItemValue>
                </DataList.Item>
              ))}
            </DataList.Root>
            <div>&nbsp;</div>
            <div>{stock?.description}</div>
          </>
        )}
      </Card.Body>
      <Card.Footer justifyContent="flex-start">
        <Button size="xs" variant="outline" colorPalette={"blue"} onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less": "Show More"}
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

function PriceHistorySection() {
  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>Price History &amp; Performance</Card.Header>
      <Card.Body>

      </Card.Body>
    </Card.Root>

  );
}

function FundamentalsSection({stock}: CompanyOverviewType) {
  return (
    <Card.Root variant={"subtle"}>
      <Card.Header>{stock?.name} Fundamentals Summary</Card.Header>
      <Card.Body>
        <Flex>
          <div>

          </div>
          <div>
            <Stack>
              <Highlight query="33.3x" styles={{px: "0.5", bg: "orange.subtle", color: "orange.fg"}}>P/E ratio
                33.3x</Highlight>
              <Highlight query="3.5x" styles={{px: "0.5", bg: "orange.subtle", color: "orange.fg"}}>P/S ratio
                3.5x</Highlight>
            </Stack>
          </div>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button size="xs" variant="outline" colorPalette={"blue"}>Data</Button>
      </Card.Footer>
    </Card.Root>
  )
}

function RewardsSection() {
  return (
    <div>
      {"Rewards".toUpperCase()}
      <List.Root gap="2" variant="plain" align="center">
        <List.Item>
          <List.Indicator asChild color="green.500">
            <LuCircleCheck/>
          </List.Indicator>
          Trading at 17.5% below our estimate of its fair value
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <LuCircleCheck/>
          </List.Indicator>
          Earnings are forecast to grow 15.25% per year
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <LuCircleCheck/>
          </List.Indicator>
          Earnings grew by 59% over the past year
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <LuCircleCheck/>
          </List.Indicator>
          Analysts in good agreement that stock price will rise by 20.6%
        </List.Item>

      </List.Root>
      <div>&nbsp;</div>
      {"Risk Analysis".toUpperCase()}
      <List.Root gap="2" variant="plain" align="center">
        <List.Item>
          <List.Indicator asChild color="red.500">
            <LuMessageCircleWarning/>
          </List.Indicator>
          High level of non-cash earnings
        </List.Item>
      </List.Root>
    </div>
  )
}

export const ValuationChart = () => {
  return (
    <>valuation chart</>
  )
}