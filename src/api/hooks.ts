
import {
  useStock,
  useWatchlistAssets,
  useStockQuotes,
  usePortfolio,
  usePortfolios,
  useAddPortfolio,
  useDeletePortfolio,
  useUpdatePortfolio
} from "@/api/graphql/graphql-hooks";

const api = {
  useStock,
  useWatchlistAssets,
  useStockQuotes,
  usePortfolio,
  usePortfolios,
  useAddPortfolio,
  useDeletePortfolio,
  useUpdatePortfolio
}

export default api;