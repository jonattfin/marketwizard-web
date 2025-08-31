'use client';

import {Breadcrumb, Image} from "@chakra-ui/react"

import {type Portfolio} from "@/api/types";
import PortfolioTabs from './portfolio-tabs';
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import {Suspense} from "react";
import Loading from "@/shared/loading";
import {Heading} from "@chakra-ui/react";

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
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/portfolios">Portfolios</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator/>
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>{portfolio.name}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <Heading>{portfolio.description}</Heading>
      <Image src={portfolio.imageUrl} height={320}></Image>
      <div>&nbsp;</div>
      <PortfolioTabs portfolioId={portfolio.id}/>
    </Suspense>
  );
}
