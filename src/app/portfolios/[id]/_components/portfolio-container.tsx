'use client';

import PortfolioComponent from "./portfolio-component";
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import {Portfolio} from "@/api/types";
import {Suspense} from "react";
import Loading from "@/shared/loading";

interface Data {
  portfolioById: Portfolio;
}

interface Variables {
  id: string;
}

const GET_PORTFOLIO_BY_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetPortfolioById($id: String!) {
     portfolioById(id: $id) {
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
`;

export type PortfolioContainerProps = {
  id: string;
}

export default function PortfolioContainer({id}: PortfolioContainerProps) {
  const {data: {portfolioById}} = useSuspenseQuery(GET_PORTFOLIO_BY_ID, {variables: {id}});

  return (
    <Suspense fallback={<Loading/>}>
      <PortfolioComponent portfolio={portfolioById}/>
    </Suspense>
  );
}