import * as React from 'react';

import {type PortfolioAsset} from '@/api/types'

import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import {Suspense} from "react";
import Loading from "@/shared/loading";

function usePortfolioHoldings(id: string) {
  interface Data {
    portfolioAssetsById: {
      nodes: PortfolioAsset[]
    };
  }

  interface Variables {
    id: string;
  }

  const GET_ASSETS_BY_PORTFOLIO_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetPortfolioAssetsById($id: String!) {
     portfolioAssetsById(id: $id) {
      nodes {
        id
        symbol
        description
        numberOfShares
        pricePerShare
      }
    }
  }
`;

  const {data: {portfolioAssetsById: {nodes: assets = []}}} = useSuspenseQuery(
    GET_ASSETS_BY_PORTFOLIO_ID,
    {
      variables: {id}
    });

  return {assets}
}

export type PortfolioHoldingsComponentProps = {
  readonly portfolioId: string;
};

export default function PortfolioHoldingsComponent({portfolioId}: PortfolioHoldingsComponentProps) {

  const {assets} = usePortfolioHoldings(portfolioId);

  return (
    <Suspense fallback={<Loading/>}>
      <h3>Holdings</h3>
    </Suspense>
  );
}