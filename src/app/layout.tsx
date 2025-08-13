'use client';

import {Geist, Geist_Mono} from "next/font/google";

import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {styled} from "@mui/material/styles";

import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next"

import AppMenu from '../components/menus';
import {useState} from 'react';

// for MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./globals.css";
import {Grid} from "@mui/material";
import WatchlistMenu from "@/components/menus/watchlistMenu";

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
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
  const [theme, setTheme] = useState<string>("dark");

  return (
    <html lang="en">
    <head title={"Create Next App"}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
    <ThemeProvider theme={theme=== "dark"? darkTheme: lightTheme}>
      <CssBaseline/>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Grid container spacing={0}>
        <Grid size={9}>
          <CustomBox>
            <header>
              <AppMenu {...{theme, setTheme}}/>
            </header>
            <main>
              {children}
            </main>
            <hr/>
            <footer>
            </footer>
          </CustomBox>
        </Grid>
        <Grid size={3}>
          <WatchlistMenu/>
        </Grid>
      </Grid>
      <Analytics/>
      <SpeedInsights/>
      </body>
    </ThemeProvider>
    </html>
  );
}
