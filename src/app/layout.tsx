'use client';

import {Geist, Geist_Mono} from "next/font/google";
import {Flex, Theme} from "@chakra-ui/react"

import {ApolloProvider} from '@apollo/client';
import {Provider} from "@/components/ui/provider";

import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next"

import "./globals.css";

import apolloClient from "@/app/apolloClient";
import AppMenu from "@/shared/app-menu";
import Watchlist from "@/shared/watchlist";
import {Box, Grid, GridItem} from "@chakra-ui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
    <head title={"Create Next App"}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
    <Provider>
      <Theme appearance="dark">
        <ApolloProvider client={apolloClient}>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <header>
          </header>
          <main>
            <Flex>
              <Box padding="20px">
                <AppMenu/>
                {children}
              </Box>
              <Watchlist/>
            </Flex>
          </main>
          <footer>
          </footer>
          <Analytics/>
          <SpeedInsights/>
          </body>
        </ApolloProvider>
      </Theme>
    </Provider>
    </html>
  );
}
