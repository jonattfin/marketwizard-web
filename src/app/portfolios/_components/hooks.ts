import {Portfolio} from "@/api/types";
import {gql, TypedDocumentNode, useMutation, useSuspenseQuery} from "@apollo/client";

interface Data {
  portfolios: {
    items: Portfolio[];
    totalCount: number;
  }
}

export const GET_PORTFOLIOS: TypedDocumentNode<Data> = gql`
  query GetPortfolios($take: Int, $skip: Int) {
     portfolios(take: $take, skip: $skip) {
      totalCount
      items {
         id
         name
         description
         imageUrl
         unrealizedGain
      }
    }
  }
  `;

export function usePortfolios(page: number = 1) {
  const {data: {portfolios: {items = [], totalCount}}} = useSuspenseQuery(GET_PORTFOLIOS, {
    variables: {take: 3, skip: (page - 1) * 3},
  });
  return {portfolios: items, totalCount};
}

export function useAddPortfolioMutation() {
  const ADD_PORTFOLIO = gql`
    mutation addPortfolio($name: String!, $description: String!, $imageUrl: String!) {
      addPortfolio(portfolioInput: {
        name: $name,
        description: $description,
        imageUrl: $imageUrl,
        userId: "294778a7-0459-4f09-8a59-20ead8ad8aec"
      }) {
        id
      }
    }
  `;

  const [addPortfolio] = useMutation(ADD_PORTFOLIO, {
    refetchQueries: "active",
  });
  return [addPortfolio];
}

export function useDeletePortfolioMutation() {
  const DELETE_PORTFOLIO = gql`
    mutation DeletePortfolio($portfolioId: UUID!) {
      deletePortfolio(portfolioId: $portfolioId)
    }
  `;

  const [deletePortfolio] = useMutation(DELETE_PORTFOLIO, {
    refetchQueries: "active",
  });
  return [deletePortfolio];
}