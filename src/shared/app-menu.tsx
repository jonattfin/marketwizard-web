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
import Link from "next/link";

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
        <Center>
          <Flex>
            <HStack wrap="wrap" gap="6">
              {["Dashboard", "Portfolios", "Watchlist", "Community", "Discover", "Screener"].map(renderLink)}
            </HStack>
          </Flex>
        </Center>
        <InputGroup flex="1" startElement={<LuSearch/>} endElement={<Kbd>⌘K</Kbd>}>
          <Input placeholder="Search"/>
        </InputGroup>
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

function renderLink(name: string = "Dashboard") {
  const palette = name == "Dashboard" ? "yellow" : "blue"

  let link = "";
  if (name === "Portfolios") {
    link = name.toLowerCase();
  }

  return (
    <Button variant="ghost">
      <Link key={name} href={`/${link}`}>
        {name}
      </Link>
    </Button>
  )
}