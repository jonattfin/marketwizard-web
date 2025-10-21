import {
  AddPortfolioType,
  AssetDto, DeletePortfolioType, UpdatePortfolioType,
  UsePortfoliosType,
  UsePortfolioType,
  UseStockQuotesType,
  UseStockType, UseSwotAnalysisType,
  UseWatchListAssetsType, UseWatchListType
} from "@/api/types";
import {
  useAddPortfolioMutation, useDeletePortfolioMutation,
  useGetPortfolioByIdQuery, useGetPortfoliosQuery, useGetStockBySymbolQuery, useGetSwotAnalysisQuery,
  useGetWatchlistAssetsQuery, useGetWatchlistsQuery,
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

export const useWatchlists = (): UseWatchListType => {
  const {data, loading, error} = useGetWatchlistsQuery({
    variables: {}
  });

  return {
    watchlists: data?.watchlists?.items?.map(item => {
      return {
        id: item?.id as string,
        name: item?.name as string
      }
    }),
    totalCount: data?.watchlists?.totalCount || 0,
    loading,
    ...(error && {error: {message: error.message}}),
  }
}

export const useWatchlistAssets = (watchlistId?: string): UseWatchListAssetsType => {
  const {data, loading, error} = useGetWatchlistAssetsQuery({
    variables: {
      watchlistId
    },
    skip: !watchlistId
  })

  return {
    watchlistAssets: data?.watchlistAssets?.items?.map(item => {
      const newItem: AssetDto = {
        symbol: item?.symbol,
        id: item?.id,
        name: item?.name,
        lastPrice: item?.lastPrice,
        quote: {
          symbol: item?.quote?.symbol,
          change: item?.quote?.change,
          percentChange: item?.quote?.percentChange,
          currentPrice: item?.quote?.currentPrice
        }
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


export const useSwotAnalysis = (companyName: string): UseSwotAnalysisType => {
  const {data, loading, error} = useGetSwotAnalysisQuery({
    variables: {
      companyName
    },
    skip: companyName.length < 4
  });

  return {
    swotAnalysis: {
      strengths: data?.swotAnalysis?.strengths ?? [],
      weaknesses: data?.swotAnalysis?.weaknesses ?? [],
      opportunities: data?.swotAnalysis?.opportunities ?? [],
      threats: data?.swotAnalysis?.threats ?? [],
    },
    loading,
    ...(error && {error: {message: error.message}}),
  }
}