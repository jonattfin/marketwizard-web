'use client';

import {Button, Center, Flex, Grid, GridItem, Menu, Portal} from "@chakra-ui/react"

export default function AppMenu() {
  return (
    <Center>
      <Flex>
        {["Products", "Community", "Markets", "Brokers", "More"].map(renderMenu)}
      </Flex>
    </Center>
  )
}

function renderMenu(name: string = "Products") {
  const palette = name == "Products"? "yellow": "blue"

  return (
    <Menu.Root key={name}>
      <Menu.Trigger asChild>
        <Button variant="ghost" colorPalette={palette}>
          {name}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">Screeners</Menu.Item>
            <Menu.Item value="new-file">Calendars</Menu.Item>
            <Menu.Item value="new-win">Portfolios</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}


