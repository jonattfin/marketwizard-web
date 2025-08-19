export type RiskLevel = 1 | 2 | 3 | 4 | 5;

export type PortfolioAsset = {
  id: string;
  symbol: string;
  description: string;
  numberOfShares: number;
  pricePerShare: number;
};

export type PortfolioNews = {
  id: string;
  time: string;
  symbol: string;
  headline: string;
  provider: string;
}

export type PortfolioRatio = {
  beta: number,
  sharpe: number,
  sortino: number,
}

export type PortfolioAssetReturn = {
  assetName: string;
  weeks: number[],
  months: number[],
}

export type PortfolioPerformance = {
  ratio : PortfolioRatio;
  returns: PortfolioAssetReturn[];
}

export type Portfolio = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export type Asset = {
  id: string;
  name: string;
  symbol: string;
  description: string;
}