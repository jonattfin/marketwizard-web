import {GridItem, Grid, Center, Stack} from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="6">
      <GridItem>
        <Center>
          <Stack>
            <div>Markets</div>
            <div>&nbsp;</div>
            <div><Link href={"#"}>US: NYSE and NASDAQ</Link></div>
            <div><Link href={"#"}>UK: FTSE</Link></div>
            <div><Link href={"#"}>Japan: NIKKEI</Link></div>
            <div><Link href={"#"}>Germany: DAX</Link></div>
          </Stack>
        </Center>
      </GridItem>

      <GridItem>
        <Center>
          <Stack>
            <div>Investing ideas</div>
            <div>&nbsp;</div>
            <div><Link href={"#"}>Undervalued companies</Link></div>
            <div><Link href={"#"}>Dividend Powerhouses</Link></div>
            <div><Link href={"#"}>Insider buying</Link></div>
            <div><Link href={"#"}>Artificial intelligence</Link></div>
          </Stack>
        </Center>
      </GridItem>

      <GridItem>
        <Center>
          <Stack>
            <div>Market Wizard</div>
            <div>&nbsp;</div>
            <div><Link href={"#"}>Plans and pricing</Link></div>
            <div><Link href={"#"}>About us</Link></div>
            <div><Link href={"#"}>Our people</Link></div>
            <div><Link href={"#"}>Contact us</Link></div>
          </Stack>
        </Center>
      </GridItem>
    </Grid>
  )
}