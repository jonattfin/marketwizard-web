export type BaseType = {
  loading: boolean;
  error?: {
    message?: string;
  };
}

export type UseStockQuotesType = {
  stockQuotes?: StockQuoteDto[];
} & BaseType;

export type UseWatchListAssetsType = {
  watchlistAssets?: AssetDto[] | null;
  totalCount: number;
} & BaseType;

export type UsePortfolioType = {
  portfolio?: PortfolioSummaryDto;
} & BaseType;

export type UsePortfoliosType = {
  portfolios: PortfolioSummaryDto[];
  totalCount: number;
} & BaseType;

export type UseStockType = {
  stock?: StockDto | null;
} & BaseType;

export enum AssetType {
  Stock,
  ETF,
  Crypto
}

export type StockQuoteDto = {
  symbol?: string;
  currentPrice?: number;
  change?: number;
  percentChange?: number;
  highPrice?: number;
  lowPrice?: number;
  openPrice?: number;
  previousClosePrice?: number;
};

export type AssetDto = {
  id: string;
  symbol: string;
  name: string;
  description?: string;
  type?: AssetType | null;
  lastPrice?: number | null;
  quote?: StockQuoteDto;
};

export type PortfolioAssetHistoryDto = {
  price: number;
  date: string;
}

export type PortfolioAssetDto = {
   symbol: string;
   numberOfShares: number;
   pricePerShare: number;
   priceHistory?:PortfolioAssetHistoryDto[]
}

export type PortfolioSummaryDto = {
  id: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  totalValue?: number | null;
  unrealizedGain?: number | null;
  createdAt?: Date;
  holdings?: number;
  assets?: PortfolioAssetDto[];
};

export type StockDto = {
  name?: string | null;
  description?: string | null;
  imageUrl?: string;
  currentPrice?: number | null;
  marketCap?: number | null;
  symbol?: string;
};

export type AddPortfolioType = {
  name: string;
  description: string;
  imageUrl: string;
}

export type UpdatePortfolioType = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export type DeletePortfolioType = {
  portfolioId: string;
}

export type UseSwotAnalysisType = {
  swotAnalysis: {
    strengths?: string[];
    weaknesses?: string[];
    opportunities?: string[];
    threats?: string[];
  },
} & BaseType;