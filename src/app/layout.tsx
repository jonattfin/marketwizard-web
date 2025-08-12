'use client';

import {Geist, Geist_Mono} from "next/font/google";

import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {styled} from "@mui/material/styles";

import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next"

import AppMenu from '../components/menus';

// for MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./globals.css";
import Link from "next/link";

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

const CustomBox = styled(Box)`
    padding: ${({theme}) => theme.spacing(2)};
`;

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head title={"Create Next App"}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <CustomBox>
        <header>
          <AppMenu/>
        </header>
        <main>
          {children}
        </main>
        <hr/>
        <footer>
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href="/news">News</Link></li>
          </ul>
        </footer>
      </CustomBox>
      <Analytics/>
      <SpeedInsights/>
      </body>
    </ThemeProvider>
    </html>
  );
}
