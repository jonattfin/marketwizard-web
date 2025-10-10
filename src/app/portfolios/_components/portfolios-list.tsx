'use client';

import React, {useCallback, useMemo, useState} from 'react';

import Loading from "@/shared/loading";

import PortfoliosListComponent from "@/app/portfolios/_components/portfolio-list-component";
import hooks from "@/api/hooks";
import {useAddPortfolio, useDeletePortfolio, useUpdatePortfolio} from "@/api/graphql/graphql-hooks";

export default function PortfoliosList() {
  const [page, setPage] = useState(1);
  const {portfolios, totalCount, loading, error} = hooks.usePortfolios(page);

  const [addPortfolio] = useAddPortfolio()
  const [deletePortfolio] = useDeletePortfolio()
  const [updatePortfolio] = useUpdatePortfolio();

  const onPortfolioAdd = useCallback(async (name: string, description: string, imageUrl: string) => {
    await addPortfolio({name, description, imageUrl});
    setPage(1);
  }, [addPortfolio]);

  const onPortfolioDelete = useCallback(async (id: string) => {
    await deletePortfolio({portfolioId: id});
    setPage(1);
  }, [deletePortfolio]);

  const onPortfolioUpdate = useCallback(async (id: string, name: string, description: string, imageUrl: string) => {
    await updatePortfolio(
      {
        id,
        name,
        description,
        imageUrl,
      });
  }, [updatePortfolio]);

  const onPageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  const props = useMemo(() => ({
    portfolios,
    totalCount,
    onPortfolioAdd,
    onPortfolioDelete,
    onPortfolioUpdate,
    onPageChange,
    page,
  }), [portfolios, totalCount, onPortfolioAdd, onPortfolioDelete, onPortfolioUpdate, onPageChange, page]);

  if (loading) return <Loading/>;
  if (error) return `Page ${JSON.stringify(error)}`;

  return (
    <PortfoliosListComponent {...props} />
  )
}