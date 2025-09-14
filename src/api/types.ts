export type PortfolioAssetReturn = {
  type: string;
  numberOfShares: number,
  pricePerShare: number,
  asset: Asset
}

export type Portfolio = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt?: string;
  totalValue?: number;
  unrealizedGain?: number;
  portfolioAssets?: PortfolioAssetReturn[];
}

export type PriceHistory = {
  price: number;
  date: Date;
}

export type Asset = {
  id: string;
  name: string;
  symbol: string;
  type: string;
  description: string;
  lastPrice: number;
  priceHistories: PriceHistory[];
}

export type StockQuote = {
  symbol: string;
  currentPrice: number;
  change: number;
  percentChange: number;
}