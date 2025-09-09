import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import {Asset} from "@/api/types";
import {DEFAULT_USER_ID} from "@/app/constants";

interface Data {
  watchlistAssets: {
    items: Asset[];
    totalCount: number;
  }
}

export const GET_WATCHLIST_ASSETS: TypedDocumentNode<Data> = gql`
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


export function useWatchlistAssets() {
  const {data: {watchlistAssets: {items = [], totalCount}}} = useSuspenseQuery(GET_WATCHLIST_ASSETS, {
    variables: {
      userId: DEFAULT_USER_ID
    },
  });
  return {watchlistAssets: items, totalCount};
}