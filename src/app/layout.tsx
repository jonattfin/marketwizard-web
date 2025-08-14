'use client';

import {Geist, Geist_Mono} from "next/font/google";

import {ThemeProvider, createTheme, styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next"

import AppMenu from '../shared/app-menu';
import {useEffect, useState} from 'react';

// for MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./globals.css";
import {Grid} from "@mui/material";
import WatchlistMenu from "@/shared/watchlist-menu";
import api from "@/api";
import {DarkTheme, LightTheme} from "@/app/constants";
import {type Asset} from "@/api/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const darkTheme = createTheme({
  palette: {
    mode: DarkTheme
  },
});

const lightTheme = createTheme({
  palette: {
    mode: LightTheme,
  },
});

const CustomBox = styled(Box)`
    padding: ${({theme}) => theme.spacing(2)};
`;

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const [appTheme, setAppTheme] = useState<string>(DarkTheme);
  const [watchlist, setWatchlist] = useState<Asset[]>([]);

  useEffect(() => {
    async function fetchWatchlist() {
      const watchlist = await api.fetchWatchlist();
      setWatchlist(watchlist);
    }
    fetchWatchlist().catch(console.error);
  }, []);

  return (
    <html lang="en">
    <head title={"Create Next App"}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
    <ThemeProvider theme={appTheme === "dark"? darkTheme: lightTheme}>
      <CssBaseline/>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Grid container spacing={0}>
        <Grid size={9}>
          <CustomBox>
            <header>
              <AppMenu {...{appTheme, setAppTheme}}/>
            </header>
            <main>
              {children}
            </main>
            <footer>
            </footer>
          </CustomBox>
        </Grid>
        <Grid size={3}>
          <WatchlistMenu assets={watchlist}/>
        </Grid>
      </Grid>
      <Analytics/>
      <SpeedInsights/>
      </body>
    </ThemeProvider>
    </html>
  );
}
