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

export enum PerformanceType {
  Portfolio,
  Spx
}

export type PortfolioPerformance = {
  [PerformanceType.Portfolio]: {
    days: number[],
    months: number[]
  },
  [PerformanceType.Spx]: {
    days: number[],
    months: number[]
  },
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