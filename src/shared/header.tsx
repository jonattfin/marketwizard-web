'use client';

import {
  Avatar,
  Button,
  Flex,
  HStack, Icon,
  Switch,
  Separator, InputGroup, Input, IconButton
} from "@chakra-ui/react"

import {FaMoon, FaSun} from "react-icons/fa"
import Link from "next/link";
import {useState} from "react";
import {LuSearch, LuVoicemail} from "react-icons/lu";
import { SiCoinmarketcap } from "react-icons/si";

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

export default function Header({theme, setTheme}: AppMenuType) {
  const [activeLink, setActiveLink] = useState<string>("");
  const [companyName, setCompanyName] = useState("")

  const renderLink = (link: LinkWithLabel) => {
    let colorPalette = "";

    if (activeLink === link.href) {
      colorPalette = "orange";
    }

    return (
      <Button key={link.href} variant={"ghost"} colorPalette={colorPalette} onClick={() => {
        setActiveLink(link.href)
      }}>
        <Link href={`${link.href}`}>
          {link.label}
        </Link>
      </Button>
    )
  }

  return (
    <>
      <Flex gap="4" justify="space-around">
        <IconButton variant={"ghost"} colorPalette={"border"}>
          <SiCoinmarketcap /> Market Wizard.app
        </IconButton>
        <Flex>
          <HStack wrap="wrap" gap="6">
            {links.map(renderLink)}
          </HStack>
        </Flex>

        <InputGroup maxWidth={"md"} flex="1" startElement={<LuSearch/>}>
          <Input placeholder="120k companies worldwide" value={companyName} onChange={
            (e) => setCompanyName(e.target.value)}
          />
        </InputGroup>

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

    </>
  )
}