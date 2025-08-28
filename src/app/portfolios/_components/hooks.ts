import {Portfolio} from "@/api/types";
import {gql, TypedDocumentNode, useMutation, useSuspenseQuery} from "@apollo/client";

interface Data {
  portfolios: {
    nodes: Portfolio[];
    totalCount: number;
    pageInfo: {
      startCursor: string;
      endCursor: string;
    }
  }
}

export const GET_PORTFOLIOS: TypedDocumentNode<Data> = gql`
  query GetPortfolios {
     portfolios {
      totalCount
      nodes {
         id
         name
         description
         imageUrl
      }
    }
  }
  `

export function usePortfolios() {
  const {data: {portfolios: {nodes = [], pageInfo, totalCount}}} = useSuspenseQuery(GET_PORTFOLIOS);
  return {nodes, pageInfo, totalCount};
}

export function useAddPortfolioMutation() {
  const ADD_PORTFOLIO = gql`
    mutation addPortfolio($name: String!, $description: String!, $imageUrl: String!) {
      addPortfolio(portfolio: {
        name: $name,
        description: $description,
        imageUrl: $imageUrl,
        userId: "294778a7-0459-4f09-8a59-20ead8ad8aec"
      }) {
        id
      }
    }
  `;

  const [addPortfolio] = useMutation(ADD_PORTFOLIO);
  return [addPortfolio];
}