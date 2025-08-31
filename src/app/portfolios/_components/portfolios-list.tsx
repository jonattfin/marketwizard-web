'use client';

import React, {useState} from 'react';

import {Suspense} from "react";
import Loading from "@/shared/loading";

import {useAddPortfolioMutation, useDeletePortfolioMutation, usePortfolios} from "@/app/portfolios/_components/hooks";
import PortfoliosListComponent from "@/app/portfolios/_components/portfolio-list-component";

export default function PortfoliosList() {
  const {nodes:portfolios, totalCount} = usePortfolios();

  const [addPortfolio] = useAddPortfolioMutation();
  const [deletePortfolio] = useDeletePortfolioMutation();

  const handleAddPortfolio = async (name: string, description: string, imageUrl: string) => {
    await addPortfolio({variables: {name, description, imageUrl}});
  }

  const handleDeletePortfolio = async (id: string) => {
    await deletePortfolio({variables: {portfolioId: id}});
  }

  const props = {
    portfolios,
    totalCount,
    onPortfolioAdd: handleAddPortfolio,
    onPortfolioDelete: handleDeletePortfolio,
  }

  return (
    <Suspense fallback={<Loading/>}>
      <PortfoliosListComponent {...props} />
    </Suspense>
  )
}