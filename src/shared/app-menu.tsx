'use client';

import {
  Avatar,
  Button,
  Center,
  Flex,
  HStack, Icon,
  Input,
  InputGroup,
  Kbd,
  Menu,
  Portal,
} from "@chakra-ui/react"
import {LuInfo, LuSearch} from "react-icons/lu";

export default function AppMenu() {
  return (
    <>
      <Flex gap={10}>
        <Button size="xs" variant="ghost">
          <Icon color={"grey"}>
            <LuInfo/>
          </Icon>
        </Button>
        <InputGroup flex="1" startElement={<LuSearch/>} endElement={<Kbd>⌘K</Kbd>}>
          <Input placeholder="Search"/>
        </InputGroup>
        <Center>
          <Flex>
            <HStack wrap="wrap" gap="6">
              {["Products", "Community", "Markets", "Brokers", "More"].map(renderMenu)}
            </HStack>
          </Flex>
        </Center>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>
          <Avatar.Root>
            <Avatar.Fallback name="John Doe"/>
          </Avatar.Root>
        </div>
      </Flex>
    </>
  )
}

function renderMenu(name: string = "Products") {
  const palette = name == "Products" ? "yellow" : "blue"

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