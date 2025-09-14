'use client';

import React, {useCallback, useMemo, useState} from 'react';

import Loading from "@/shared/loading";

import PortfoliosListComponent from "@/app/portfolios/_components/portfolio-list-component";
import {Portfolio} from "@/api/types";
import {
  useAddPortfolioMutation,
  useDeletePortfolioMutation,
  useUpdatePortfolioMutation
} from "@/graphql/_generated/graphql";
import {DEFAULT_USER_ID} from "@/app/constants";
import {usePortfolios} from "@/graphql/hooks";

export default function PortfoliosList() {
  const [page, setPage] = useState(1);
  const {portfolios, totalCount, loading, error} = usePortfolios(page);

  const [addPortfolio] = useAddPortfolioMutation();
  const [deletePortfolio] = useDeletePortfolioMutation();
  const [updatePortfolio] = useUpdatePortfolioMutation();

  const onPortfolioAdd = useCallback(async (name: string, description: string, imageUrl: string) => {
    await addPortfolio({variables: {name, description, imageUrl, userId: DEFAULT_USER_ID}, refetchQueries: "active"});
  }, [addPortfolio]);

  const onPortfolioDelete = useCallback(async (id: string) => {
    await deletePortfolio({variables: {portfolioId: id}, refetchQueries: "active"});
  }, [deletePortfolio]);

  const onPortfolioUpdate = useCallback(async (portfolio: Portfolio) => {
    await updatePortfolio({
      variables: {
        id: portfolio.id,
        name: portfolio.name,
        description: portfolio.description,
        imageUrl: portfolio.imageUrl,
        userId: DEFAULT_USER_ID,
      },
      refetchQueries: "active"
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
  if (error) return `Page ${error}`;

  return (
    <PortfoliosListComponent {...props} />
  )
}