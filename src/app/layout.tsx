'use client';

import {Geist, Geist_Mono} from "next/font/google";
import {Theme} from "@chakra-ui/react"

import {ApolloProvider} from '@apollo/client';
import {Provider} from "@/components/ui/provider";

import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next"

import "./globals.css";

import apolloClient from "@/app/apolloClient";
import AppMenu from "@/shared/app-menu";
import Watchlist from "@/shared/watchlist";
import {Box, Grid, GridItem} from "@chakra-ui/react";
import {ThemeContext} from "@emotion/react";
import {useState} from "react";
import {styled} from "storybook/theming";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const StyledContainer = styled(Box)`
    min-height: 100vh;
`

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <html lang="en" suppressHydrationWarning>
    <head title={"Create Next App"}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>

    <ApolloProvider client={apolloClient}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Provider>
        <ThemeContext value={theme}>
          <Theme appearance={theme}>
            <header>
            </header>
            <main>
              <Grid templateColumns="repeat(4, 1fr)" gap="6">
                <GridItem colSpan={3}>
                  <Box padding="20px">
                    <AppMenu theme={theme} setTheme={(theme) => setTheme(theme)}/>
                    <div>&nbsp;</div>
                    <StyledContainer>
                      {children}
                    </StyledContainer>
                  </Box>
                </GridItem>
                <GridItem>
                  <Watchlist/>
                </GridItem>
              </Grid>
            </main>
            <footer>
            </footer>
            <Analytics/>
            <SpeedInsights/>
          </Theme>
        </ThemeContext>
      </Provider>
      </body>
    </ApolloProvider>

    </html>
  );
}
