'use client';

import * as React from 'react';
import {type PortfolioNews} from '@/api/types'
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";

export type PortfolioNewsComponentProps = {
  portfolioId: string;
}

function usePortfolioNews(id: string) {
  interface Data {
    portfolioNewsById: {
      nodes: PortfolioNews[];
    }
  }

  interface Variables {
    id: string;
  }

  const GET_NEWS_BY_PORTFOLIO_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetNewsByPortfolioId($id: UUID!) {
     portfolioNewsById(portfolioId: $id) {
      nodes {
        id
        time
        symbol
        headline
        provider
      }
    }
  }
`;

  const {data: {portfolioNewsById: {nodes = []}}} = useSuspenseQuery(GET_NEWS_BY_PORTFOLIO_ID, {variables: {id}});
  return {nodes};
}

export default function PortfolioNewsComponent({portfolioId}: PortfolioNewsComponentProps) {
  const {} = usePortfolioNews(portfolioId)

  return (
    <>
      <h3>News</h3>
    </>
  );
}