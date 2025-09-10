import {gql, TypedDocumentNode, useSubscription, useSuspenseQuery} from "@apollo/client";
import {Asset} from "@/api/types";
import {DEFAULT_USER_ID} from "@/app/constants";


export function useWatchlistAssets() {
  interface Data {
    watchlistAssets: {
      items: Asset[];
      totalCount: number;
    }
  }

  const GET_WATCHLIST_ASSETS: TypedDocumentNode<Data> = gql`
    query GetWatchlistAssets($userId: UUID!) {
      watchlistAssets(userId: $userId) {
        totalCount
        items {
          id
          symbol
          name
          type
          lastPrice
        }
      }
    }
  `;

  const {data: {watchlistAssets: {items = [], totalCount}}} = useSuspenseQuery(GET_WATCHLIST_ASSETS, {
    variables: {
      userId: DEFAULT_USER_ID
    },
  });
  return {watchlistAssets: items, totalCount};
}

export interface StockQuote {
    symbol: string;
    currentPrice: number;
    highPrice: number;
    lowPrice: number;
    openPrice: number;
    previousClosePrice: number;
}

export function useStockQuotes() {
  interface Data {
    onStockPriceUpdated: StockQuote[]
  }

  const STOCK_PRICE_SUBSCRIPTION= gql`
    subscription OnStockPriceUpdated {
      onStockPriceUpdated {
        symbol
        currentPrice
        highPrice
        lowPrice
        previousClosePrice
        openPrice
      }
    }
  `;

  const {data, loading, error} = useSubscription<Data>(STOCK_PRICE_SUBSCRIPTION);
  return {data, loading, error};
}