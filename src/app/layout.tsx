'use client';

import {Geist, Geist_Mono} from "next/font/google";

import {ApolloProvider} from '@apollo/client';
import {Provider} from "@/components/ui/provider";

import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next"

import {useState} from 'react';

import "./globals.css";

import {DarkTheme, LightTheme} from "@/app/constants";
import apolloClient from "@/app/apolloClient";
import AppMenu from "@/shared/app-menu";
import {Box} from "@chakra-ui/react";

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
  const [appTheme, setAppTheme] = useState<string>(DarkTheme);

  return (
    <html lang="en" suppressHydrationWarning>
    <head title={"Create Next App"}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
    <Provider>

      <ApolloProvider client={apolloClient}>
        <Box width="100%" padding="8">
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <header>
            <AppMenu/>
          </header>
          <main>

            {children}

          </main>
          <footer>
          </footer>
          <Analytics/>
          <SpeedInsights/>
          </body>
        </Box>
      </ApolloProvider>
    </Provider>
    </html>
  );
}
