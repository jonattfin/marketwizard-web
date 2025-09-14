import {
  GetPortfoliosQuery,
  useGetPortfoliosQuery,
  useGetPortfolioByIdQuery,
  GetPortfolioByIdQuery, useGetWatchlistAssetsQuery, useOnStockPriceUpdatedSubscription
} from "./_generated/graphql";
import {DEFAULT_USER_ID, PAGE_SIZE} from "@/app/constants";
import {Asset, Portfolio} from "@/api/types";

import {StockQuote} from "@/api/types";

export function useStockQuotes() {
  const {data, loading, error} = useOnStockPriceUpdatedSubscription();

  const stockQuotes: StockQuote[] | undefined = data?.onStockPriceUpdated?.map(quote => {
    const stockQuote: StockQuote = {
      symbol: quote.symbol,
      currentPrice: quote.currentPrice,
      change: quote.change,
      percentChange: quote.percentChange,
    }

    return stockQuote;
  })

  return {stockQuotes: stockQuotes || [], loading, error};
}

export function useWatchlistAssets() {
  interface Data {
    watchlistAssets: {
      items: Asset[];
      totalCount: number;
    }
  }

  const {data, loading, error} = useGetWatchlistAssetsQuery({
    variables: {
      userId: DEFAULT_USER_ID
    }
  })

  const totalCount = data?.watchlistAssets?.totalCount || 0
  const watchlistAssets: Asset[] | undefined = data?.watchlistAssets?.items?.map(item => {
    const asset: Asset = {
      id: item.id,
      name: item.name,
      symbol: item.symbol,
      type: item.type,
      lastPrice: item.lastPrice || 0,
      description: item.symbol,
      priceHistories: []
    }

    return asset;
  })

  return {watchlistAssets: watchlistAssets || [], totalCount, loading, error};
}

export const usePortfolio = (id: String) => {
  const {data, loading, error} = useGetPortfolioByIdQuery({
    variables: {
      id
    },
  });

  const portfolio = mapPortfolioData(data);
  return {portfolio, loading, error};
}

export const usePortfolios = (pageNumber: number) => {
  const {data, loading, error} = useGetPortfoliosQuery({
    variables: {
      take: PAGE_SIZE,
      skip: (pageNumber - 1) * PAGE_SIZE,
    },
  });

  const {portfolios, totalCount} = mapPortfoliosData(data);
  return {portfolios, totalCount, loading, error};
}

function mapPortfoliosData(query: GetPortfoliosQuery | undefined) {
  if (!query) {
    return {
      portfolios: [],
      totalCount: 0,
    }
  }

  const portfolios: Portfolio[] | undefined = query.portfolios?.items?.map((portfolio) => ({
    id: portfolio.id as string,
    name: portfolio.name,
    description: portfolio.description,
    imageUrl: portfolio.imageUrl,
    userId: DEFAULT_USER_ID
  }));

  return {
    portfolios: portfolios || [],
    totalCount: query.portfolios?.totalCount || 0,
  }
}

function mapPortfolioData(query: GetPortfolioByIdQuery | undefined) {
  if (!query) {
    return undefined;
  }

  return {
    id: query.portfolioById?.id as string,
    name: query.portfolioById?.name as string,
    description: query.portfolioById?.name as string,
    imageUrl: query.portfolioById?.description as string,
    userId: DEFAULT_USER_ID
  }
}