import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AddPortfolioInputDtoInput = {
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};

export type AddPortfolioOutputDto = {
  __typename?: 'AddPortfolioOutputDto';
  id: Scalars['UUID']['output'];
};

export type Asset = {
  __typename?: 'Asset';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lastPrice?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  priceHistories: Array<AssetPriceHistory>;
  symbol: Scalars['String']['output'];
  type: AssetType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  watchlists: Array<Watchlist>;
};

export type AssetFilterInput = {
  and?: InputMaybe<Array<AssetFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdBy?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lastPrice?: InputMaybe<FloatOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AssetFilterInput>>;
  priceHistories?: InputMaybe<ListFilterInputTypeOfAssetPriceHistoryFilterInput>;
  symbol?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<AssetTypeOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  watchlists?: InputMaybe<ListFilterInputTypeOfWatchlistFilterInput>;
};

export type AssetPriceHistory = {
  __typename?: 'AssetPriceHistory';
  asset: Asset;
  assetId: Scalars['UUID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  date: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  price: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type AssetPriceHistoryFilterInput = {
  and?: InputMaybe<Array<AssetPriceHistoryFilterInput>>;
  asset?: InputMaybe<AssetFilterInput>;
  assetId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdBy?: InputMaybe<StringOperationFilterInput>;
  date?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<AssetPriceHistoryFilterInput>>;
  price?: InputMaybe<FloatOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  updatedBy?: InputMaybe<StringOperationFilterInput>;
};

export enum AssetType {
  Crypto = 'CRYPTO',
  Etf = 'ETF',
  Stock = 'STOCK'
}

export type AssetTypeOperationFilterInput = {
  eq?: InputMaybe<AssetType>;
  in?: InputMaybe<Array<AssetType>>;
  neq?: InputMaybe<AssetType>;
  nin?: InputMaybe<Array<AssetType>>;
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  ngt?: InputMaybe<Scalars['Float']['input']>;
  ngte?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  nlt?: InputMaybe<Scalars['Float']['input']>;
  nlte?: InputMaybe<Scalars['Float']['input']>;
};

export type GetAssetDto = {
  __typename?: 'GetAssetDto';
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lastPrice?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  type: AssetType;
};

export type GetAssetDtoFilterInput = {
  and?: InputMaybe<Array<GetAssetDtoFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lastPrice?: InputMaybe<FloatOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<GetAssetDtoFilterInput>>;
  symbol?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<AssetTypeOperationFilterInput>;
};

export type GetAssetDtoSortInput = {
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastPrice?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  symbol?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

export type GetPortfolioDto = {
  __typename?: 'GetPortfolioDto';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  portfolioAssets: Array<PortfolioAsset>;
  totalValue: Scalars['Float']['output'];
  unrealizedGain: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['UUID']['output'];
};

export type GetPortfolioDtoFilterInput = {
  and?: InputMaybe<Array<GetPortfolioDtoFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdBy?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<GetPortfolioDtoFilterInput>>;
  portfolioAssets?: InputMaybe<ListFilterInputTypeOfPortfolioAssetFilterInput>;
  totalValue?: InputMaybe<FloatOperationFilterInput>;
  unrealizedGain?: InputMaybe<FloatOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<UuidOperationFilterInput>;
};

export type GetPortfolioDtoSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  createdBy?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  totalValue?: InputMaybe<SortEnumType>;
  unrealizedGain?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
  updatedBy?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type ListFilterInputTypeOfAssetFilterInput = {
  all?: InputMaybe<AssetFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AssetFilterInput>;
  some?: InputMaybe<AssetFilterInput>;
};

export type ListFilterInputTypeOfAssetPriceHistoryFilterInput = {
  all?: InputMaybe<AssetPriceHistoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AssetPriceHistoryFilterInput>;
  some?: InputMaybe<AssetPriceHistoryFilterInput>;
};

export type ListFilterInputTypeOfPortfolioAssetFilterInput = {
  all?: InputMaybe<PortfolioAssetFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PortfolioAssetFilterInput>;
  some?: InputMaybe<PortfolioAssetFilterInput>;
};

export type ListFilterInputTypeOfWatchlistFilterInput = {
  all?: InputMaybe<WatchlistFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<WatchlistFilterInput>;
  some?: InputMaybe<WatchlistFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPortfolio: AddPortfolioOutputDto;
  deletePortfolio: Scalars['Boolean']['output'];
  updatePortfolio: UpdatePortfolioOutputDto;
};


export type MutationAddPortfolioArgs = {
  portfolioInput: AddPortfolioInputDtoInput;
};


export type MutationDeletePortfolioArgs = {
  portfolioId: Scalars['UUID']['input'];
};


export type MutationUpdatePortfolioArgs = {
  portfolioInput: UpdatePortfolioInputDtoInput;
};

export type PortfolioAsset = {
  __typename?: 'PortfolioAsset';
  asset: Asset;
  assetId: Scalars['UUID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  numberOfShares: Scalars['Float']['output'];
  pricePerShare: Scalars['Float']['output'];
  type: PortfolioOperationType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type PortfolioAssetFilterInput = {
  and?: InputMaybe<Array<PortfolioAssetFilterInput>>;
  asset?: InputMaybe<AssetFilterInput>;
  assetId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdBy?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  numberOfShares?: InputMaybe<FloatOperationFilterInput>;
  or?: InputMaybe<Array<PortfolioAssetFilterInput>>;
  pricePerShare?: InputMaybe<FloatOperationFilterInput>;
  type?: InputMaybe<PortfolioOperationTypeOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  updatedBy?: InputMaybe<StringOperationFilterInput>;
};

export enum PortfolioOperationType {
  Buy = 'BUY',
  Sell = 'SELL'
}

export type PortfolioOperationTypeOperationFilterInput = {
  eq?: InputMaybe<PortfolioOperationType>;
  in?: InputMaybe<Array<PortfolioOperationType>>;
  neq?: InputMaybe<PortfolioOperationType>;
  nin?: InputMaybe<Array<PortfolioOperationType>>;
};

/** A segment of a collection. */
export type PortfoliosCollectionSegment = {
  __typename?: 'PortfoliosCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<GetPortfolioDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  portfolioById?: Maybe<GetPortfolioDto>;
  portfolios?: Maybe<PortfoliosCollectionSegment>;
  watchlistAssets?: Maybe<WatchlistAssetsCollectionSegment>;
};


export type QueryPortfolioByIdArgs = {
  portfolioId: Scalars['UUID']['input'];
};


export type QueryPortfoliosArgs = {
  order?: InputMaybe<Array<GetPortfolioDtoSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GetPortfolioDtoFilterInput>;
};


export type QueryWatchlistAssetsArgs = {
  order?: InputMaybe<Array<GetAssetDtoSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['UUID']['input'];
  where?: InputMaybe<GetAssetDtoFilterInput>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StockQuote = {
  __typename?: 'StockQuote';
  change?: Maybe<Scalars['Decimal']['output']>;
  currentPrice?: Maybe<Scalars['Decimal']['output']>;
  highPrice?: Maybe<Scalars['Decimal']['output']>;
  lowPrice?: Maybe<Scalars['Decimal']['output']>;
  openPrice?: Maybe<Scalars['Decimal']['output']>;
  percentChange?: Maybe<Scalars['Decimal']['output']>;
  previousClosePrice?: Maybe<Scalars['Decimal']['output']>;
  symbol: Scalars['String']['output'];
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onPortfolioDeleted: Scalars['UUID']['output'];
  onPortfolioUpdated: Scalars['UUID']['output'];
  onStockPriceUpdated: Array<StockQuote>;
};

export type UpdatePortfolioInputDtoInput = {
  description: Scalars['String']['input'];
  id: Scalars['UUID']['input'];
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};

export type UpdatePortfolioOutputDto = {
  __typename?: 'UpdatePortfolioOutputDto';
  id: Scalars['UUID']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdBy?: InputMaybe<StringOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  updatedBy?: InputMaybe<StringOperationFilterInput>;
};

export type UserSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  createdBy?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
  updatedBy?: InputMaybe<SortEnumType>;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type Watchlist = {
  __typename?: 'Watchlist';
  assets: Array<Asset>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['UUID']['output'];
};

/** A segment of a collection. */
export type WatchlistAssetsCollectionSegment = {
  __typename?: 'WatchlistAssetsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<GetAssetDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type WatchlistFilterInput = {
  and?: InputMaybe<Array<WatchlistFilterInput>>;
  assets?: InputMaybe<ListFilterInputTypeOfAssetFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdBy?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<WatchlistFilterInput>>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<UuidOperationFilterInput>;
};

export type GetPortfolioByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPortfolioByIdQuery = { __typename?: 'Query', portfolioById?: { __typename?: 'GetPortfolioDto', id: any, name: string, description: string, imageUrl: string, totalValue: number, unrealizedGain: number } | null };

export type GetPortfoliosQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPortfoliosQuery = { __typename?: 'Query', portfolios?: { __typename?: 'PortfoliosCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'GetPortfolioDto', id: any, name: string, description: string, imageUrl: string, createdAt?: any | null, unrealizedGain: number, totalValue: number, portfolioAssets: Array<{ __typename?: 'PortfolioAsset', numberOfShares: number, pricePerShare: number, asset: { __typename?: 'Asset', id: any, symbol: string, name: string, lastPrice?: number | null, priceHistories: Array<{ __typename?: 'AssetPriceHistory', price: number }> } }> }> | null } | null };

export type AddPortfolioMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
}>;


export type AddPortfolioMutation = { __typename?: 'Mutation', addPortfolio: { __typename?: 'AddPortfolioOutputDto', id: any } };

export type DeletePortfolioMutationVariables = Exact<{
  portfolioId: Scalars['UUID']['input'];
}>;


export type DeletePortfolioMutation = { __typename?: 'Mutation', deletePortfolio: boolean };

export type UpdatePortfolioMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
}>;


export type UpdatePortfolioMutation = { __typename?: 'Mutation', updatePortfolio: { __typename?: 'UpdatePortfolioOutputDto', id: any } };

export type GetPortfolioPerformanceByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPortfolioPerformanceByIdQuery = { __typename?: 'Query', portfolioById?: { __typename?: 'GetPortfolioDto', id: any, portfolioAssets: Array<{ __typename?: 'PortfolioAsset', type: PortfolioOperationType, numberOfShares: number, pricePerShare: number, asset: { __typename?: 'Asset', symbol: string, priceHistories: Array<{ __typename?: 'AssetPriceHistory', price: number, date: any }> } }> } | null };

export type GetWatchlistAssetsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;


export type GetWatchlistAssetsQuery = { __typename?: 'Query', watchlistAssets?: { __typename?: 'WatchlistAssetsCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'GetAssetDto', id: any, symbol: string, name: string, type: AssetType, lastPrice?: number | null }> | null } | null };

export type OnStockPriceUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnStockPriceUpdatedSubscription = { __typename?: 'Subscription', onStockPriceUpdated: Array<{ __typename?: 'StockQuote', symbol: string, currentPrice?: any | null, change?: any | null, percentChange?: any | null }> };


export const GetPortfolioByIdDocument = gql`
    query GetPortfolioById($id: UUID!) {
  portfolioById(portfolioId: $id) {
    id
    name
    description
    imageUrl
    totalValue
    unrealizedGain
  }
}
    `;

/**
 * __useGetPortfolioByIdQuery__
 *
 * To run a query within a React component, call `useGetPortfolioByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfolioByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfolioByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortfolioByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPortfolioByIdQuery, GetPortfolioByIdQueryVariables> & ({ variables: GetPortfolioByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPortfolioByIdQuery, GetPortfolioByIdQueryVariables>(GetPortfolioByIdDocument, options);
      }
export function useGetPortfolioByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPortfolioByIdQuery, GetPortfolioByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPortfolioByIdQuery, GetPortfolioByIdQueryVariables>(GetPortfolioByIdDocument, options);
        }
export function useGetPortfolioByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPortfolioByIdQuery, GetPortfolioByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPortfolioByIdQuery, GetPortfolioByIdQueryVariables>(GetPortfolioByIdDocument, options);
        }
export type GetPortfolioByIdQueryHookResult = ReturnType<typeof useGetPortfolioByIdQuery>;
export type GetPortfolioByIdLazyQueryHookResult = ReturnType<typeof useGetPortfolioByIdLazyQuery>;
export type GetPortfolioByIdSuspenseQueryHookResult = ReturnType<typeof useGetPortfolioByIdSuspenseQuery>;
export type GetPortfolioByIdQueryResult = Apollo.QueryResult<GetPortfolioByIdQuery, GetPortfolioByIdQueryVariables>;
export const GetPortfoliosDocument = gql`
    query GetPortfolios($take: Int, $skip: Int) {
  portfolios(take: $take, skip: $skip, order: [{createdAt: DESC}]) {
    totalCount
    items {
      id
      name
      description
      imageUrl
      createdAt
      unrealizedGain
      totalValue
      portfolioAssets {
        asset {
          id
          symbol
          name
          lastPrice
          priceHistories {
            price
          }
        }
        numberOfShares
        pricePerShare
      }
    }
  }
}
    `;

/**
 * __useGetPortfoliosQuery__
 *
 * To run a query within a React component, call `useGetPortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfoliosQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetPortfoliosQuery(baseOptions?: Apollo.QueryHookOptions<GetPortfoliosQuery, GetPortfoliosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPortfoliosQuery, GetPortfoliosQueryVariables>(GetPortfoliosDocument, options);
      }
export function useGetPortfoliosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPortfoliosQuery, GetPortfoliosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPortfoliosQuery, GetPortfoliosQueryVariables>(GetPortfoliosDocument, options);
        }
export function useGetPortfoliosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPortfoliosQuery, GetPortfoliosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPortfoliosQuery, GetPortfoliosQueryVariables>(GetPortfoliosDocument, options);
        }
export type GetPortfoliosQueryHookResult = ReturnType<typeof useGetPortfoliosQuery>;
export type GetPortfoliosLazyQueryHookResult = ReturnType<typeof useGetPortfoliosLazyQuery>;
export type GetPortfoliosSuspenseQueryHookResult = ReturnType<typeof useGetPortfoliosSuspenseQuery>;
export type GetPortfoliosQueryResult = Apollo.QueryResult<GetPortfoliosQuery, GetPortfoliosQueryVariables>;
export const AddPortfolioDocument = gql`
    mutation addPortfolio($name: String!, $description: String!, $imageUrl: String!, $userId: UUID!) {
  addPortfolio(
    portfolioInput: {name: $name, description: $description, imageUrl: $imageUrl, userId: $userId}
  ) {
    id
  }
}
    `;
export type AddPortfolioMutationFn = Apollo.MutationFunction<AddPortfolioMutation, AddPortfolioMutationVariables>;

/**
 * __useAddPortfolioMutation__
 *
 * To run a mutation, you first call `useAddPortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPortfolioMutation, { data, loading, error }] = useAddPortfolioMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddPortfolioMutation(baseOptions?: Apollo.MutationHookOptions<AddPortfolioMutation, AddPortfolioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPortfolioMutation, AddPortfolioMutationVariables>(AddPortfolioDocument, options);
      }
export type AddPortfolioMutationHookResult = ReturnType<typeof useAddPortfolioMutation>;
export type AddPortfolioMutationResult = Apollo.MutationResult<AddPortfolioMutation>;
export type AddPortfolioMutationOptions = Apollo.BaseMutationOptions<AddPortfolioMutation, AddPortfolioMutationVariables>;
export const DeletePortfolioDocument = gql`
    mutation DeletePortfolio($portfolioId: UUID!) {
  deletePortfolio(portfolioId: $portfolioId)
}
    `;
export type DeletePortfolioMutationFn = Apollo.MutationFunction<DeletePortfolioMutation, DeletePortfolioMutationVariables>;

/**
 * __useDeletePortfolioMutation__
 *
 * To run a mutation, you first call `useDeletePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePortfolioMutation, { data, loading, error }] = useDeletePortfolioMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useDeletePortfolioMutation(baseOptions?: Apollo.MutationHookOptions<DeletePortfolioMutation, DeletePortfolioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePortfolioMutation, DeletePortfolioMutationVariables>(DeletePortfolioDocument, options);
      }
export type DeletePortfolioMutationHookResult = ReturnType<typeof useDeletePortfolioMutation>;
export type DeletePortfolioMutationResult = Apollo.MutationResult<DeletePortfolioMutation>;
export type DeletePortfolioMutationOptions = Apollo.BaseMutationOptions<DeletePortfolioMutation, DeletePortfolioMutationVariables>;
export const UpdatePortfolioDocument = gql`
    mutation UpdatePortfolio($id: UUID!, $name: String!, $description: String!, $imageUrl: String!, $userId: UUID!) {
  updatePortfolio(
    portfolioInput: {id: $id, name: $name, description: $description, imageUrl: $imageUrl, userId: $userId}
  ) {
    id
  }
}
    `;
export type UpdatePortfolioMutationFn = Apollo.MutationFunction<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>;

/**
 * __useUpdatePortfolioMutation__
 *
 * To run a mutation, you first call `useUpdatePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePortfolioMutation, { data, loading, error }] = useUpdatePortfolioMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpdatePortfolioMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>(UpdatePortfolioDocument, options);
      }
export type UpdatePortfolioMutationHookResult = ReturnType<typeof useUpdatePortfolioMutation>;
export type UpdatePortfolioMutationResult = Apollo.MutationResult<UpdatePortfolioMutation>;
export type UpdatePortfolioMutationOptions = Apollo.BaseMutationOptions<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>;
export const GetPortfolioPerformanceByIdDocument = gql`
    query GetPortfolioPerformanceById($id: UUID!) {
  portfolioById(portfolioId: $id) {
    id
    portfolioAssets {
      type
      numberOfShares
      pricePerShare
      asset {
        symbol
        priceHistories {
          price
          date
        }
      }
    }
  }
}
    `;

/**
 * __useGetPortfolioPerformanceByIdQuery__
 *
 * To run a query within a React component, call `useGetPortfolioPerformanceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfolioPerformanceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfolioPerformanceByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortfolioPerformanceByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPortfolioPerformanceByIdQuery, GetPortfolioPerformanceByIdQueryVariables> & ({ variables: GetPortfolioPerformanceByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPortfolioPerformanceByIdQuery, GetPortfolioPerformanceByIdQueryVariables>(GetPortfolioPerformanceByIdDocument, options);
      }
export function useGetPortfolioPerformanceByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPortfolioPerformanceByIdQuery, GetPortfolioPerformanceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPortfolioPerformanceByIdQuery, GetPortfolioPerformanceByIdQueryVariables>(GetPortfolioPerformanceByIdDocument, options);
        }
export function useGetPortfolioPerformanceByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPortfolioPerformanceByIdQuery, GetPortfolioPerformanceByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPortfolioPerformanceByIdQuery, GetPortfolioPerformanceByIdQueryVariables>(GetPortfolioPerformanceByIdDocument, options);
        }
export type GetPortfolioPerformanceByIdQueryHookResult = ReturnType<typeof useGetPortfolioPerformanceByIdQuery>;
export type GetPortfolioPerformanceByIdLazyQueryHookResult = ReturnType<typeof useGetPortfolioPerformanceByIdLazyQuery>;
export type GetPortfolioPerformanceByIdSuspenseQueryHookResult = ReturnType<typeof useGetPortfolioPerformanceByIdSuspenseQuery>;
export type GetPortfolioPerformanceByIdQueryResult = Apollo.QueryResult<GetPortfolioPerformanceByIdQuery, GetPortfolioPerformanceByIdQueryVariables>;
export const GetWatchlistAssetsDocument = gql`
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

/**
 * __useGetWatchlistAssetsQuery__
 *
 * To run a query within a React component, call `useGetWatchlistAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWatchlistAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWatchlistAssetsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetWatchlistAssetsQuery(baseOptions: Apollo.QueryHookOptions<GetWatchlistAssetsQuery, GetWatchlistAssetsQueryVariables> & ({ variables: GetWatchlistAssetsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWatchlistAssetsQuery, GetWatchlistAssetsQueryVariables>(GetWatchlistAssetsDocument, options);
      }
export function useGetWatchlistAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWatchlistAssetsQuery, GetWatchlistAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWatchlistAssetsQuery, GetWatchlistAssetsQueryVariables>(GetWatchlistAssetsDocument, options);
        }
export function useGetWatchlistAssetsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWatchlistAssetsQuery, GetWatchlistAssetsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWatchlistAssetsQuery, GetWatchlistAssetsQueryVariables>(GetWatchlistAssetsDocument, options);
        }
export type GetWatchlistAssetsQueryHookResult = ReturnType<typeof useGetWatchlistAssetsQuery>;
export type GetWatchlistAssetsLazyQueryHookResult = ReturnType<typeof useGetWatchlistAssetsLazyQuery>;
export type GetWatchlistAssetsSuspenseQueryHookResult = ReturnType<typeof useGetWatchlistAssetsSuspenseQuery>;
export type GetWatchlistAssetsQueryResult = Apollo.QueryResult<GetWatchlistAssetsQuery, GetWatchlistAssetsQueryVariables>;
export const OnStockPriceUpdatedDocument = gql`
    subscription OnStockPriceUpdated {
  onStockPriceUpdated {
    symbol
    currentPrice
    change
    percentChange
  }
}
    `;

/**
 * __useOnStockPriceUpdatedSubscription__
 *
 * To run a query within a React component, call `useOnStockPriceUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnStockPriceUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnStockPriceUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnStockPriceUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnStockPriceUpdatedSubscription, OnStockPriceUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnStockPriceUpdatedSubscription, OnStockPriceUpdatedSubscriptionVariables>(OnStockPriceUpdatedDocument, options);
      }
export type OnStockPriceUpdatedSubscriptionHookResult = ReturnType<typeof useOnStockPriceUpdatedSubscription>;
export type OnStockPriceUpdatedSubscriptionResult = Apollo.SubscriptionResult<OnStockPriceUpdatedSubscription>;