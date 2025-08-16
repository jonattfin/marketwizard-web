'use client';

import {Suspense} from "react";
import {type Portfolio} from "@/api/types";
import PortfoliosCards from "@/app/portfolios/_components/portfolios-cards";
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import Loading from "@/shared/loading";

interface Data {
  portfolios: {
    nodes: Portfolio[];
  }
}

const GET_PORTFOLIOS: TypedDocumentNode<Data> = gql`
  query GetPortfolios {
     portfolios {
      nodes {
         id
         name
         description
         imageUrl
         lastUpdated
         totalAmount
         averageAnnualReturn
         standardDeviation
         sharpeRatio
      }
    }
  }
`;

export default function PortfoliosList() {
  const {data: {portfolios: {nodes = []}}} = useSuspenseQuery(GET_PORTFOLIOS);

  return (
    <Suspense fallback={<Loading/>}>
      <PortfoliosCards portfolios={nodes}></PortfoliosCards>
    </Suspense>
  )
}