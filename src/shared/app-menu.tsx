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
  Switch
} from "@chakra-ui/react"
import {LuInfo, LuSearch} from "react-icons/lu";
import {FaMoon, FaSun} from "react-icons/fa"

export type AppMenuType = {
  theme: string;
  setTheme: (theme: "dark" | "light") => void;
}

export default function AppMenu({theme, setTheme}: AppMenuType) {
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
        <div>
          <Switch.Root colorPalette="orange" checked={theme === "dark"} onCheckedChange={(e) => {
            setTheme(e.checked ? "dark" : "light");
          }}>
            <Switch.HiddenInput/>
            <Switch.Control>
              <Switch.Thumb/>
              <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400"/>}>
                <Icon as={FaSun} color="yellow.400"/>
              </Switch.Indicator>
            </Switch.Control>
          </Switch.Root>

        </div>
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