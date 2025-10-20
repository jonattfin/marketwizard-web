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
};

export type AddPortfolioOutputDto = {
  __typename?: 'AddPortfolioOutputDto';
  id: Scalars['UUID']['output'];
};

export type AssetDto = {
  __typename?: 'AssetDto';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastPrice?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  quote?: Maybe<StockQuoteDto>;
  symbol: Scalars['String']['output'];
  type?: Maybe<AssetType>;
};

export type AssetDtoFilterInput = {
  and?: InputMaybe<Array<AssetDtoFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lastPrice?: InputMaybe<FloatOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AssetDtoFilterInput>>;
  quote?: InputMaybe<StockQuoteDtoFilterInput>;
  symbol?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<NullableOfAssetTypeOperationFilterInput>;
};

export type AssetDtoSortInput = {
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastPrice?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  quote?: InputMaybe<StockQuoteDtoSortInput>;
  symbol?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

export type AssetPriceHistoryDto = {
  __typename?: 'AssetPriceHistoryDto';
  date: Scalars['DateTime']['output'];
  price: Scalars['Float']['output'];
};

export enum AssetType {
  Crypto = 'CRYPTO',
  Etf = 'ETF',
  Stock = 'STOCK'
}

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

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
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

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
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

export type NullableOfAssetTypeOperationFilterInput = {
  eq?: InputMaybe<AssetType>;
  in?: InputMaybe<Array<InputMaybe<AssetType>>>;
  neq?: InputMaybe<AssetType>;
  nin?: InputMaybe<Array<InputMaybe<AssetType>>>;
};

export type PortfolioDetailsAssetDto = {
  __typename?: 'PortfolioDetailsAssetDto';
  numberOfShares: Scalars['Float']['output'];
  priceHistory: Array<AssetPriceHistoryDto>;
  pricePerShare: Scalars['Float']['output'];
  symbol: Scalars['String']['output'];
};

export type PortfolioDetailsDto = {
  __typename?: 'PortfolioDetailsDto';
  assets: Array<PortfolioDetailsAssetDto>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  holdings?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  totalValue?: Maybe<Scalars['Float']['output']>;
  unrealizedGain?: Maybe<Scalars['Float']['output']>;
};

export type PortfolioSummaryDto = {
  __typename?: 'PortfolioSummaryDto';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  holdings?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  totalValue?: Maybe<Scalars['Float']['output']>;
  unrealizedGain?: Maybe<Scalars['Float']['output']>;
};

export type PortfolioSummaryDtoFilterInput = {
  and?: InputMaybe<Array<PortfolioSummaryDtoFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  holdings?: InputMaybe<IntOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PortfolioSummaryDtoFilterInput>>;
  totalValue?: InputMaybe<FloatOperationFilterInput>;
  unrealizedGain?: InputMaybe<FloatOperationFilterInput>;
};

export type PortfolioSummaryDtoSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  holdings?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  totalValue?: InputMaybe<SortEnumType>;
  unrealizedGain?: InputMaybe<SortEnumType>;
};

/** A segment of a collection. */
export type PortfoliosCollectionSegment = {
  __typename?: 'PortfoliosCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<PortfolioSummaryDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  portfolioById?: Maybe<PortfolioDetailsDto>;
  portfolios?: Maybe<PortfoliosCollectionSegment>;
  stockBySymbol?: Maybe<StockDto>;
  swotAnalysis: SwotAnalysis;
  watchlistAssets?: Maybe<WatchlistAssetsCollectionSegment>;
};


export type QueryPortfolioByIdArgs = {
  portfolioId: Scalars['UUID']['input'];
};


export type QueryPortfoliosArgs = {
  order?: InputMaybe<Array<PortfolioSummaryDtoSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PortfolioSummaryDtoFilterInput>;
};


export type QueryStockBySymbolArgs = {
  stockSymbol: Scalars['String']['input'];
};


export type QuerySwotAnalysisArgs = {
  companyName: Scalars['String']['input'];
};


export type QueryWatchlistAssetsArgs = {
  order?: InputMaybe<Array<AssetDtoSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetDtoFilterInput>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StockDto = {
  __typename?: 'StockDto';
  currentPrice?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  marketCap?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  symbol: Scalars['String']['output'];
};

export type StockQuoteDto = {
  __typename?: 'StockQuoteDto';
  change?: Maybe<Scalars['Decimal']['output']>;
  currentPrice?: Maybe<Scalars['Decimal']['output']>;
  highPrice?: Maybe<Scalars['Decimal']['output']>;
  lowPrice?: Maybe<Scalars['Decimal']['output']>;
  openPrice?: Maybe<Scalars['Decimal']['output']>;
  percentChange?: Maybe<Scalars['Decimal']['output']>;
  previousClosePrice?: Maybe<Scalars['Decimal']['output']>;
  symbol: Scalars['String']['output'];
};

export type StockQuoteDtoFilterInput = {
  and?: InputMaybe<Array<StockQuoteDtoFilterInput>>;
  change?: InputMaybe<DecimalOperationFilterInput>;
  currentPrice?: InputMaybe<DecimalOperationFilterInput>;
  highPrice?: InputMaybe<DecimalOperationFilterInput>;
  lowPrice?: InputMaybe<DecimalOperationFilterInput>;
  openPrice?: InputMaybe<DecimalOperationFilterInput>;
  or?: InputMaybe<Array<StockQuoteDtoFilterInput>>;
  percentChange?: InputMaybe<DecimalOperationFilterInput>;
  previousClosePrice?: InputMaybe<DecimalOperationFilterInput>;
  symbol?: InputMaybe<StringOperationFilterInput>;
};

export type StockQuoteDtoSortInput = {
  change?: InputMaybe<SortEnumType>;
  currentPrice?: InputMaybe<SortEnumType>;
  highPrice?: InputMaybe<SortEnumType>;
  lowPrice?: InputMaybe<SortEnumType>;
  openPrice?: InputMaybe<SortEnumType>;
  percentChange?: InputMaybe<SortEnumType>;
  previousClosePrice?: InputMaybe<SortEnumType>;
  symbol?: InputMaybe<SortEnumType>;
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
  onPortfolioCreated: Scalars['UUID']['output'];
  onPortfolioDeleted: Scalars['UUID']['output'];
  onPortfolioUpdated: Scalars['UUID']['output'];
  onStockPriceUpdated: Array<StockQuoteDto>;
};

export type SwotAnalysis = {
  __typename?: 'SwotAnalysis';
  companyName: Scalars['String']['output'];
  opportunities: Array<Scalars['String']['output']>;
  response: Scalars['String']['output'];
  strengths: Array<Scalars['String']['output']>;
  threats: Array<Scalars['String']['output']>;
  weaknesses: Array<Scalars['String']['output']>;
};

export type UpdatePortfolioInputDtoInput = {
  description: Scalars['String']['input'];
  id: Scalars['UUID']['input'];
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdatePortfolioOutputDto = {
  __typename?: 'UpdatePortfolioOutputDto';
  id: Scalars['UUID']['output'];
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

/** A segment of a collection. */
export type WatchlistAssetsCollectionSegment = {
  __typename?: 'WatchlistAssetsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<AssetDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
};

export type GetPortfolioByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPortfolioByIdQuery = { __typename?: 'Query', portfolioById?: { __typename?: 'PortfolioDetailsDto', id: any, name: string, description: string, imageUrl: string, totalValue?: number | null, unrealizedGain?: number | null, assets: Array<{ __typename?: 'PortfolioDetailsAssetDto', symbol: string, numberOfShares: number, pricePerShare: number, priceHistory: Array<{ __typename?: 'AssetPriceHistoryDto', price: number, date: any }> }> } | null };

export type GetPortfoliosQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPortfoliosQuery = { __typename?: 'Query', portfolios?: { __typename?: 'PortfoliosCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'PortfolioSummaryDto', id: any, name: string, description: string, imageUrl: string, createdAt?: any | null, totalValue?: number | null, unrealizedGain?: number | null }> | null } | null };

export type AddPortfolioMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
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
}>;


export type UpdatePortfolioMutation = { __typename?: 'Mutation', updatePortfolio: { __typename?: 'UpdatePortfolioOutputDto', id: any } };

export type GetWatchlistAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWatchlistAssetsQuery = { __typename?: 'Query', watchlistAssets?: { __typename?: 'WatchlistAssetsCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'AssetDto', id: any, symbol: string, name: string, type?: AssetType | null, lastPrice?: number | null, quote?: { __typename?: 'StockQuoteDto', symbol: string, currentPrice?: any | null, change?: any | null, percentChange?: any | null } | null }> | null } | null };

export type OnStockPriceUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnStockPriceUpdatedSubscription = { __typename?: 'Subscription', onStockPriceUpdated: Array<{ __typename?: 'StockQuoteDto', symbol: string, currentPrice?: any | null, change?: any | null, percentChange?: any | null }> };

export type GetStockBySymbolQueryVariables = Exact<{
  symbol: Scalars['String']['input'];
}>;


export type GetStockBySymbolQuery = { __typename?: 'Query', stockBySymbol?: { __typename?: 'StockDto', name?: string | null, description?: string | null, currentPrice?: number | null, marketCap?: number | null, symbol: string } | null };

export type GetSwotAnalysisQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type GetSwotAnalysisQuery = { __typename?: 'Query', swotAnalysis: { __typename?: 'SwotAnalysis', response: string, strengths: Array<string>, weaknesses: Array<string>, threats: Array<string>, opportunities: Array<string> } };


export const GetPortfolioByIdDocument = gql`
    query GetPortfolioById($id: UUID!) {
  portfolioById(portfolioId: $id) {
    id
    name
    description
    imageUrl
    totalValue
    unrealizedGain
    assets {
      symbol
      numberOfShares
      pricePerShare
      priceHistory {
        price
        date
      }
    }
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
      totalValue
      unrealizedGain
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
    mutation addPortfolio($name: String!, $description: String!, $imageUrl: String!) {
  addPortfolio(
    portfolioInput: {name: $name, description: $description, imageUrl: $imageUrl}
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
    mutation UpdatePortfolio($id: UUID!, $name: String!, $description: String!, $imageUrl: String!) {
  updatePortfolio(
    portfolioInput: {id: $id, name: $name, description: $description, imageUrl: $imageUrl}
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
export const GetWatchlistAssetsDocument = gql`
    query GetWatchlistAssets {
  watchlistAssets {
    totalCount
    items {
      id
      symbol
      name
      type
      lastPrice
      quote {
        symbol
        currentPrice
        change
        percentChange
      }
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
 *   },
 * });
 */
export function useGetWatchlistAssetsQuery(baseOptions?: Apollo.QueryHookOptions<GetWatchlistAssetsQuery, GetWatchlistAssetsQueryVariables>) {
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
export const GetStockBySymbolDocument = gql`
    query GetStockBySymbol($symbol: String!) {
  stockBySymbol(stockSymbol: $symbol) {
    name
    description
    currentPrice
    marketCap
    symbol
  }
}
    `;

/**
 * __useGetStockBySymbolQuery__
 *
 * To run a query within a React component, call `useGetStockBySymbolQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStockBySymbolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStockBySymbolQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *   },
 * });
 */
export function useGetStockBySymbolQuery(baseOptions: Apollo.QueryHookOptions<GetStockBySymbolQuery, GetStockBySymbolQueryVariables> & ({ variables: GetStockBySymbolQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStockBySymbolQuery, GetStockBySymbolQueryVariables>(GetStockBySymbolDocument, options);
      }
export function useGetStockBySymbolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStockBySymbolQuery, GetStockBySymbolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStockBySymbolQuery, GetStockBySymbolQueryVariables>(GetStockBySymbolDocument, options);
        }
export function useGetStockBySymbolSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStockBySymbolQuery, GetStockBySymbolQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStockBySymbolQuery, GetStockBySymbolQueryVariables>(GetStockBySymbolDocument, options);
        }
export type GetStockBySymbolQueryHookResult = ReturnType<typeof useGetStockBySymbolQuery>;
export type GetStockBySymbolLazyQueryHookResult = ReturnType<typeof useGetStockBySymbolLazyQuery>;
export type GetStockBySymbolSuspenseQueryHookResult = ReturnType<typeof useGetStockBySymbolSuspenseQuery>;
export type GetStockBySymbolQueryResult = Apollo.QueryResult<GetStockBySymbolQuery, GetStockBySymbolQueryVariables>;
export const GetSwotAnalysisDocument = gql`
    query GetSwotAnalysis($companyName: String!) {
  swotAnalysis(companyName: $companyName) {
    response
    strengths
    weaknesses
    threats
    opportunities
  }
}
    `;

/**
 * __useGetSwotAnalysisQuery__
 *
 * To run a query within a React component, call `useGetSwotAnalysisQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSwotAnalysisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSwotAnalysisQuery({
 *   variables: {
 *      companyName: // value for 'companyName'
 *   },
 * });
 */
export function useGetSwotAnalysisQuery(baseOptions: Apollo.QueryHookOptions<GetSwotAnalysisQuery, GetSwotAnalysisQueryVariables> & ({ variables: GetSwotAnalysisQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSwotAnalysisQuery, GetSwotAnalysisQueryVariables>(GetSwotAnalysisDocument, options);
      }
export function useGetSwotAnalysisLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSwotAnalysisQuery, GetSwotAnalysisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSwotAnalysisQuery, GetSwotAnalysisQueryVariables>(GetSwotAnalysisDocument, options);
        }
export function useGetSwotAnalysisSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSwotAnalysisQuery, GetSwotAnalysisQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSwotAnalysisQuery, GetSwotAnalysisQueryVariables>(GetSwotAnalysisDocument, options);
        }
export type GetSwotAnalysisQueryHookResult = ReturnType<typeof useGetSwotAnalysisQuery>;
export type GetSwotAnalysisLazyQueryHookResult = ReturnType<typeof useGetSwotAnalysisLazyQuery>;
export type GetSwotAnalysisSuspenseQueryHookResult = ReturnType<typeof useGetSwotAnalysisSuspenseQuery>;
export type GetSwotAnalysisQueryResult = Apollo.QueryResult<GetSwotAnalysisQuery, GetSwotAnalysisQueryVariables>;