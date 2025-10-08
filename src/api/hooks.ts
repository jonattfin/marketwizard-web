import {
  useGetPortfoliosQuery,
  useGetPortfolioByIdQuery, useGetWatchlistAssetsQuery, useOnStockPriceUpdatedSubscription, useGetStockBySymbolQuery
} from "@/api/graphql/_generated/graphql";
import {PAGE_SIZE} from "@/app/constants";

export function useStockQuotes() {
  const {data, loading, error} = useOnStockPriceUpdatedSubscription();

  return {stockQuotes: data?.onStockPriceUpdated || [], loading, error};
}

export function useWatchlistAssets() {
  const {data, loading, error} = useGetWatchlistAssetsQuery({
    variables: {}
  })

  const totalCount = data?.watchlistAssets?.totalCount || 0

  return {watchlistAssets: data?.watchlistAssets?.items || [], totalCount, loading, error};
}

export const usePortfolio = (id: string | undefined) => {
  const {data, loading, error} = useGetPortfolioByIdQuery({
    variables: {
      id
    },
    skip: !id
  });

  return {portfolio: data?.portfolioById, loading, error};
}

export const usePortfolios = (pageNumber: number) => {
  const {data, loading, error} = useGetPortfoliosQuery({
    variables: {
      take: PAGE_SIZE,
      skip: (pageNumber - 1) * PAGE_SIZE,
    },
  });

  return {portfolios: data?.portfolios?.items || [], totalCount: data?.portfolios?.totalCount || 0, loading, error};
}

export const useStock = (symbol: string) => {
  const {data, loading, error} = useGetStockBySymbolQuery({
    variables: {
      symbol
    },
  });

  return {stock: data?.stockBySymbol, loading, error};
}
