'use client';

import Link from 'next/link'

import {type Portfolio} from "@/api/types";
import PortfolioTabs from './portfolio-tabs';
import PortfolioSummary from "./portfolio-summary";
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import {Suspense} from "react";
import Loading from "@/shared/loading";

export type PortfolioDetailsProps = {
  id: string
}

function usePortfolioById(id: string) {
  interface Data {
    portfolioById: Portfolio;
  }

  interface Variables {
    id: string;
  }

  const GET_PORTFOLIO_BY_ID: TypedDocumentNode<Data, Variables> = gql`
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

  const {data: {portfolioById: portfolio}} = useSuspenseQuery(GET_PORTFOLIO_BY_ID, {variables: {id}});
  return {portfolio};
}

export default function PortfolioDetails({id}: Readonly<PortfolioDetailsProps>) {
  const {portfolio} = usePortfolioById(id);

  return (
    <Suspense fallback={<Loading/>}>
      {JSON.stringify(portfolio, null, 2)}
      <PortfolioSummary title={""} subtitle={""}></PortfolioSummary>
      <PortfolioTabs portfolioId={portfolio.id}/>
    </Suspense>
  );
}
