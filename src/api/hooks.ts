
import {
  useStock,
  useWatchlistAssets,
  useStockQuotes,
  usePortfolio,
  usePortfolios,
  useAddPortfolio,
  useDeletePortfolio,
  useUpdatePortfolio,
  useWatchlists,
  useSwotAnalysis
} from "@/api/graphql/graphql-hooks";

const api = {
  useStock,
  useWatchlistAssets,
  useStockQuotes,
  usePortfolio,
  usePortfolios,
  useAddPortfolio,
  useDeletePortfolio,
  useUpdatePortfolio,
  useWatchlists,
  useSwotAnalysis
}

export default api;