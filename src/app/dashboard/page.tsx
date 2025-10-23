'use client';

import {
  Avatar,
  Button,
  Card,
  createListCollection,
  Flex,
  Grid,
  GridItem,
  Portal,
  Select,
  Separator,
  Stack,
  Tabs
} from "@chakra-ui/react";
import Loading from "@/shared/loading";

export default function Dashboard() {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="6">
        <GridItem colSpan={3}>
          <Loading/>
        </GridItem>

        <GridItem>
          <Loading/>
        </GridItem>
      </Grid>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <Grid templateColumns="repeat(4, 1fr)" gap="6">
        <GridItem>
          <Flex gap="4" direction="column">
            <div>Upcoming Events</div>
            <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
              <Tabs.List>
                <Tabs.Trigger value="tab-1">Earning Release</Tabs.Trigger>
                <Tabs.Trigger value="tab-2">Ex-dividend</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab-1">
                <Loading/>
              </Tabs.Content>
              <Tabs.Content value="tab-2">
                <Loading/>
              </Tabs.Content>
            </Tabs.Root>
            <div>Recently Viewed</div>
            <Loading/>
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex gap="4" direction="column">
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
          </Flex>
        </GridItem>

        <GridItem>
          <Stack>
            <div>Market Performance</div>

            <Select.Root collection={markets} defaultValue={[markets.items[0].value]}>
              <Select.HiddenSelect/>
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select framework"/>
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator/>
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {markets.items.map((market) => (
                      <Select.Item item={market} key={market.value}>
                        {market.label}
                        <Select.ItemIndicator/>
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>


            <Flex gap="4" direction="column">
              <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
                <Tabs.List>
                  <Tabs.Trigger value="tab-1">Top Gainers</Tabs.Trigger>
                  <Tabs.Trigger value="tab-2">Top Losers</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab-1">
                  <Loading/>
                </Tabs.Content>
                <Tabs.Content value="tab-2">
                  <Loading/>
                </Tabs.Content>
              </Tabs.Root>
              <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
                <Tabs.List>
                  <Tabs.Trigger value="tab-1">Top Industries</Tabs.Trigger>
                  <Tabs.Trigger value="tab-2">Worst Industries</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab-1">
                  <Loading/>
                </Tabs.Content>
                <Tabs.Content value="tab-2">
                  <Loading/>
                </Tabs.Content>
              </Tabs.Root>

              <div>International markets</div>

              <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
                <Tabs.List>
                  <Tabs.Trigger value="tab-1">Top Gainers</Tabs.Trigger>
                  <Tabs.Trigger value="tab-2">Top Losers</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab-1">
                  <Loading/>
                </Tabs.Content>
                <Tabs.Content value="tab-2">
                  <Loading/>
                </Tabs.Content>
              </Tabs.Root>
            </Flex>
          </Stack>
        </GridItem>
      </Grid>

    </>
  )
}

const CustomCard = () => {
  return (
    <Card.Root overflow="hidden" variant={"subtle"}>
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src="https://picsum.photos/200/300"/>
          <Avatar.Fallback name="Nue Camp"/>
        </Avatar.Root>
        <Card.Title mt="2">Nue Camp</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
      </Card.Footer>
    </Card.Root>
  )
}

const markets = createListCollection({
  items: [
    {label: "United States", value: "United_States"},
  ],
})