'use client';

import React from 'react';
import {ButtonGroup, Center, IconButton, Pagination} from "@chakra-ui/react";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

import {Toaster, toaster} from "@/components/ui/toaster";

import PortfoliosCards from "@/app/portfolios/_components/portfolios-cards";
import {PAGE_SIZE} from "@/app/constants";
import {PortfolioSummaryDto} from "@/api/types";

export type PortfoliosListComponentType = {
  portfolios: PortfolioSummaryDto[];
  totalCount: number;
  onPortfolioAdd?: (name: string, description: string, imageUrl: string) => Promise<void>;
  onPortfolioDelete?: (id: string) => Promise<void>;
  onPortfolioUpdate?: (id: string, name: string, description: string, imageUrl: string) => Promise<void>;
  page: number;
  onPageChange: (page: number) => void;
}

export default function PortfoliosListComponent(
  {
    portfolios,
    totalCount,
    onPortfolioAdd,
    onPortfolioDelete,
    onPortfolioUpdate,
    page,
    onPageChange,
  }: PortfoliosListComponentType) {

  const handleAddPortfolio = async (name: string, description: string, imageUrl: string) => {
    try {
      if (!onPortfolioAdd) {
        return;
      }

      await onPortfolioAdd(name, description, imageUrl);

      toaster.create({
        title: "Portfolio created",
        type: "success",
      });
    } catch {
      toaster.create({
        title: "Portfolio can't be created",
        type: "error",
      });
    }
  }

  const handleDeletePortfolio = async (id: string) => {
    try {
      if (!onPortfolioDelete) {
        return;
      }

      await onPortfolioDelete(id);

      toaster.create({
        title: "Portfolio deleted",
        type: "success",
      });

    } catch {
      toaster.create({
        title: "Portfolio can't be deleted",
        type: "error",
      });
    }
  }

  const handleUpdatePortfolio = async (id: string, name: string, description: string, imageUrl: string) => {
    try {
      if (!onPortfolioUpdate) {
        return;
      }

      await onPortfolioUpdate(id, name, description, imageUrl);

      toaster.create({
        title: "Portfolio updated",
        type: "success",
      });
    } catch {
      toaster.create({
        title: "Portfolio couldn't be updated",
        type: "error",
      });
    }
  }

  return (
    <div>
      <Toaster/>
      <PortfoliosCards {...{
        portfolios,
        onDeletePortfolio: handleDeletePortfolio,
        onAddPortfolio: handleAddPortfolio,
        onUpdatePortfolio: handleUpdatePortfolio,
      }}/>
      {totalCount > 0 && (
        <Center>
          <Pagination.Root count={totalCount} pageSize={PAGE_SIZE} defaultPage={page}
                           onPageChange={(e) => onPageChange(e.page)}>
            <ButtonGroup variant="ghost" size="sm">
              <Pagination.PrevTrigger asChild>
                <IconButton>
                  <LuChevronLeft/>
                </IconButton>
              </Pagination.PrevTrigger>

              <Pagination.Items
                render={(page) => (
                  <IconButton variant={{base: "ghost", _selected: "outline"}}>
                    {page.value}
                  </IconButton>
                )}
              />
              <Pagination.NextTrigger asChild>
                <IconButton>
                  <LuChevronRight/>
                </IconButton>
              </Pagination.NextTrigger>
            </ButtonGroup>
          </Pagination.Root>
        </Center>
      )}

    </div>
  )
}