'use client';

import StockDetails from "@/app/stocks/[symbol]/_components/stock-details";

export default async function StockPage({params}: Readonly<{
  params: Promise<{ symbol: string }>
}>) {
  const {symbol} = await params;

  return (
    <StockDetails symbol={symbol}></StockDetails>
  )
}