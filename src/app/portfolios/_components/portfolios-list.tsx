'use client';

import React from 'react';

import {Suspense} from "react";
import Loading from "@/shared/loading";

import {useAddPortfolioMutation, usePortfolios} from "@/app/portfolios/_components/hooks";
import PortfoliosListComponent from "@/app/portfolios/_components/portfolio-list-component";

export default function PortfoliosList() {
  const {nodes:portfolios, totalCount} = usePortfolios();
  const [addPortfolio] = useAddPortfolioMutation();

  const handleSubmit = async (name: string, description: string, imageUrl: string) => {
    await addPortfolio({variables: {name, description, imageUrl}});
  }

  return (
    <Suspense fallback={<Loading/>}>
      <PortfoliosListComponent portfolios={portfolios} totalCount={totalCount} onSubmit={handleSubmit} />
    </Suspense>
  )
}