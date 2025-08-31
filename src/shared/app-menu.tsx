'use client';

import {Button, Center, Flex, HStack, Menu, Portal} from "@chakra-ui/react"

export default function AppMenu() {
  return (
    <Center>
      <Flex>
        <HStack wrap="wrap" gap="6">
          {["Products", "Community", "Markets", "Brokers", "More"].map(renderMenu)}
        </HStack>
      </Flex>
    </Center>
  )
}

function renderMenu(name: string = "Products") {
  const palette = name == "Products"? "yellow": "blue"

  return (
    <Menu.Root key={name}>
      <Menu.Trigger asChild>
        <Button variant="subtle" colorPalette={palette}>
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


