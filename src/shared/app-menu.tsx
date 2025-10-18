'use client';

import {
  Avatar,
  Button,
  Center,
  Flex,
  HStack, Icon,
  Switch,
  Separator
} from "@chakra-ui/react"

import {FaMoon, FaSun} from "react-icons/fa"
import Link from "next/link";

export type AppMenuType = {
  theme: string;
  setTheme: (theme: "dark" | "light") => void;
}

type LinkWithLabel = {
  label: string;
  href: string;
}

const links: LinkWithLabel[] = [
  {label: "Dashboard", href: "/"},
  {label: "Portfolios", href: "/portfolios"},
  {label: "Watchlist", href: "/watchlist"},
  {label: "SWOT Analysis", href: "/swot-analysis"},
]

export default function AppMenu({theme, setTheme}: AppMenuType) {
  return (
    <>
      <Flex gap="4" justify="space-between">
        <Flex>
          <HStack wrap="wrap" gap="6">
            {links.map(renderLink)}
          </HStack>
        </Flex>


        <div>
          <>
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
            <>&nbsp;</>
            <>&nbsp;</>
          </>
          <Avatar.Root>
            <Avatar.Fallback name="John Doe"/>
          </Avatar.Root>
        </div>
      </Flex>
      <div>&nbsp;</div>
      <Separator/>
      <div>&nbsp;</div>
    </>
  )
}

function renderLink(link: LinkWithLabel) {
  return (
    <Button variant="ghost" key={link.href}>
      <Link href={`${link.href}`}>
        {link.label}
      </Link>
    </Button>
  )
}