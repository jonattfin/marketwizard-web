'use client';

import {useState} from "react";

import {PortfolioPerformance} from "@/api/types";

import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";

function usePortfolioPerformance(id: string) {
  interface Data {
    portfolioById: PortfolioPerformance;
  }

  interface Variables {
    id: string;
  }

  const GET_PERFORMANCE_BY_PORTFOLIO_ID: TypedDocumentNode<Data, Variables> = gql`
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

  const {data: {portfolioById: performance}} = useSuspenseQuery(
    GET_PERFORMANCE_BY_PORTFOLIO_ID,
    {
      variables: {id}
    });

  return {performance};
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export type PortfolioTabsComponentProps = {
  readonly portfolioId: string;
}

export default function PortfolioTabsComponent({portfolioId}: PortfolioTabsComponentProps) {
  const [value, setValue] = useState(0);

  const {performance} = usePortfolioPerformance(portfolioId);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>tabs</div>
  );
}