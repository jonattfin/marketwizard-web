import {
  AddPortfolioType,
  AssetDto, DeletePortfolioType, UpdatePortfolioType,
  UsePortfoliosType,
  UsePortfolioType,
  UseStockQuotesType,
  UseStockType,
  UseWatchListAssetsType
} from "@/api/types";
import {
  useAddPortfolioMutation, useDeletePortfolioMutation,
  useGetPortfolioByIdQuery, useGetPortfoliosQuery, useGetStockBySymbolQuery,
  useGetWatchlistAssetsQuery,
  useOnStockPriceUpdatedSubscription, useUpdatePortfolioMutation
} from "@/api/graphql/_generated/graphql";
import {PAGE_SIZE} from "@/app/constants";

export const usePortfolio = (id: string | undefined): UsePortfolioType => {
  const {data, loading, error} = useGetPortfolioByIdQuery({
    variables: {
      id
    },
    skip: !id
  });

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
    loading,
    ...(error && {error: {message: error.message}}),
  }
}

export const usePortfolios = (pageNumber: number): UsePortfoliosType => {
  const {data, loading, error} = useGetPortfoliosQuery({
    variables: {
      take: PAGE_SIZE,
      skip: (pageNumber - 1) * PAGE_SIZE,
    },
  });

  return {
    portfolios: data?.portfolios?.items || [],
    totalCount: data?.portfolios?.totalCount || 0,
    loading,
    ...(error && {error: {message: error.message}}),
  }
}

export const useStock = (symbol: string): UseStockType => {
  const {data, loading, error} = useGetStockBySymbolQuery({
    variables: {
      symbol
    },
  });

  return {
    stock: data?.stockBySymbol,
    loading,
    ...(error && {error: {message: error.message}}),
  }
}

export const useStockQuotes = (): UseStockQuotesType => {
  const {data, loading, error} = useOnStockPriceUpdatedSubscription();

  return {
    stockQuotes: data?.onStockPriceUpdated,
    loading,
    ...(error && {error: {message: error.message}}),
  }
}

export const useWatchlistAssets = (): UseWatchListAssetsType => {
  const {data, loading, error} = useGetWatchlistAssetsQuery({
    variables: {}
  })

  return {
    watchlistAssets: data?.watchlistAssets?.items?.map(item => {
      const newItem: AssetDto = {
        symbol: item?.symbol,
        id: item?.id,
        name: item?.name,
        lastPrice: item?.lastPrice,
      }

      return newItem;
    }),
    totalCount: data?.watchlistAssets?.totalCount || 0,
    loading,
    ...(error && {error: {message: error.message}}),
  }
}

export const useAddPortfolio = () => {
  const [addPortfolio] = useAddPortfolioMutation();

  return [
    async ({name, description, imageUrl}: AddPortfolioType): Promise<void> => {
      await addPortfolio({variables: {name, description, imageUrl}, refetchQueries: "active"})
    }
  ]
}

export const useDeletePortfolio = () => {
  const [deletePortfolio] = useDeletePortfolioMutation();

  return [
    async ({portfolioId}: DeletePortfolioType): Promise<void> => {
      await deletePortfolio({variables: {portfolioId}, refetchQueries: "active"})
    }
  ]
}

export const useUpdatePortfolio = () => {
  const [updatePortfolio] = useUpdatePortfolioMutation();

  return [
    async ({id, name, description, imageUrl}: UpdatePortfolioType): Promise<void> => {
      await updatePortfolio({variables: {id, name, description, imageUrl}, refetchQueries: "active"})
    }
  ]
}