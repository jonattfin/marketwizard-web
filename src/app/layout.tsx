'use client';

import {Geist, Geist_Mono} from "next/font/google";

import {ApolloProvider} from '@apollo/client';
import {Provider} from "@/components/ui/provider";

import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next"

import "./globals.css";

import apolloClient from "@/app/apolloClient";
import Header from "@/shared/header";
import {Box, Container, Grid, GridItem, Separator, Theme} from "@chakra-ui/react";
import {ThemeContext} from "@emotion/react";
import {useState} from "react";
import {styled} from "storybook/theming";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Footer from "@/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const StyledContainer = styled(Box)`
    min-height: 80vh;
`;

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <ApolloProvider client={apolloClient}>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <ThemeContext value={theme}>
            <Theme appearance={theme}>
              <main>
                <Container>
                  <Box padding="20px">
                    <Header theme={theme} setTheme={(theme) => setTheme(theme)}/>
                    {/*<div>&nbsp;</div>*/}
                    <StyledContainer>
                      {children}
                    </StyledContainer>
                    <div>&nbsp;</div>
                    <Separator/>
                    <div>&nbsp;</div>
                    <Footer/>
                  </Box>
                </Container>
              </main>
              <Analytics/>
              <SpeedInsights/>
            </Theme>
          </ThemeContext>
        </Provider>
        </body>
      </ApolloProvider>
    </QueryClientProvider>
    </html>
  );
}
