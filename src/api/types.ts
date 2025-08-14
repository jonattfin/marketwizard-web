export type RiskLevel = 1 | 2 | 3 | 4 | 5;

export type PortfolioAsset = Asset & {
  numberOfShares: number;
  pricePerShare: number;
  performance: number;
  allocation: number;
};

export type PortfolioNews = {
  id: string;
  time: string;
  symbol: string;
  headline: string;
  provider: string;
}

export type AssetInsights = {
  weeks: number[],
  months: number[],
}

export type PortfolioPerformance = {
  insights: {
    [key: string]: AssetInsights,
  }
  ratios? : {
    beta: number,
    sharpe: number,
    sortino: number,
  }
}

export type Portfolio = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  lastUpdated: string;
  totalAmount: number;
  risk: RiskLevel;
  averageAnnualReturn: number;
  standardDeviation: number;
  sharpeRatio: number;
  maximumDrawdown: number;
  assets: PortfolioAsset[];
  news: PortfolioNews[];
  performance: PortfolioPerformance;
}

export enum AssetType {
  Stock,
  Commodity,
  Indice,
  Etf
}

export type Asset = {
  id: string;
  price: number;
  symbol: string;
  chg: number;
  changeAsPercentage: number;
  description: string;
  assetType: AssetType;
}