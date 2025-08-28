'use client';

import React from 'react';

import {Suspense, useState} from "react";
import Loading from "@/shared/loading";

import {addPortfolioMutation, usePortfolios} from "@/app/portfolios/_components/hooks";
import PortfoliosListComponent from "@/app/portfolios/_components/portfolio-list-component";

export default function PortfoliosList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const {nodes:portfolios, totalCount} = usePortfolios(rowsPerPage);
  const [addPortfolio] = addPortfolioMutation();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleSubmit = async (name: string, description: string, imageUrl: string) => {
    await addPortfolio({variables: {name, description, imageUrl}});
  }

  return (
    <Suspense fallback={<Loading/>}>
      <PortfoliosListComponent portfolios={portfolios} totalCount={totalCount} onSubmit={handleSubmit} />
    </Suspense>
  )
}