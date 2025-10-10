import {UsePortfoliosType, UsePortfolioType, UseStockType} from "@/api/types";
import {useSuspenseQuery} from "@tanstack/react-query";

const BaseApiUrl = "http://localhost:5196/api"

export const usePortfolio = (id: string | undefined): UsePortfolioType => {
  const {isPending, error, data, isFetching} = useSuspenseQuery({
    queryKey: [`portfolio_${id}`],
    queryFn: async () => {
      const response = await fetch(
        `${BaseApiUrl}/portfolios/${id}`,
      )
      return await response.json()
    },
  })

  return {
    portfolio: {
      id: data?.portfolioById?.id,
      name: data?.portfolioById?.name,
      description: data?.portfolioById?.description,
      imageUrl: data?.portfolioById?.imageUrl,
      totalValue: data?.portfolioById?.totalValue,
      unrealizedGain: data?.portfolioById?.unrealizedGain,
      assets: data?.portfolioById?.assets
    },
    loading: isPending,
    ...(error && {error: {message: error.message}}),
  }
}

export const usePortfolios = (pageNumber: number): UsePortfoliosType => {
  const {isPending, error, data, isFetching} = useSuspenseQuery({
    queryKey: ['portfolios'],
    queryFn: async () => {
      const response = await fetch(
        `${BaseApiUrl}/portfolios`,
      )
      return await response.json()
    },
  })

  return {
    portfolios: data?.portfolios?.items || [],
    totalCount: data?.portfolios?.totalCount || 0,
    loading: isPending,
    ...(error && {error: {message: error.message}}),
  }
}

export const useStock = (symbol: string): UseStockType => {
  const {isPending, error, data, isFetching} = useSuspenseQuery({
    queryKey: [`stock_${symbol}`],
    queryFn: async () => {
      const response = await fetch(
        `${BaseApiUrl}/stocks/${symbol}`,
      )
      return await response.json()
    },
  })

  return {
    stock: data?.stockBySymbol,
    loading: isPending,
    ...(error && {error: {message: error.message}}),
  }
}