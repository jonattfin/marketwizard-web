'use client';

import React, {useState} from 'react';

import {Suspense} from "react";
import Loading from "@/shared/loading";

import {useAddPortfolioMutation, useDeletePortfolioMutation, usePortfolios} from "@/app/portfolios/_components/hooks";
import PortfoliosListComponent from "@/app/portfolios/_components/portfolio-list-component";

export default function PortfoliosList() {
  const [page, setPage] = useState(1);
  const {portfolios, totalCount} = usePortfolios(page);

  const [addPortfolio] = useAddPortfolioMutation();
  const [deletePortfolio] = useDeletePortfolioMutation();

  const props = {
    portfolios,
    totalCount,
    onPortfolioAdd: async (name: string, description: string, imageUrl: string) => {
      await addPortfolio({variables: {name, description, imageUrl}});
    },
    onPortfolioDelete: async (id: string) => {
      await deletePortfolio({variables: {portfolioId: id}});
    },
    onPageChange: (page: number) => {
      setPage(page);
    },
    page,
  }

  return (
    <Suspense fallback={<Loading/>}>
      <PortfoliosListComponent {...props} />
    </Suspense>
  )
}