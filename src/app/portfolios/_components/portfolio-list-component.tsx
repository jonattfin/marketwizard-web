'use client';

import React from 'react';
import {ButtonGroup, Center, IconButton, Pagination} from "@chakra-ui/react";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

import {Toaster, toaster} from "@/components/ui/toaster";

import PortfoliosCards from "@/app/portfolios/_components/portfolios-cards";
import {Portfolio} from "@/api/types";
import {PAGE_SIZE} from "@/app/constants";

export type PortfoliosListComponentProps = {
  portfolios: Portfolio[];
  totalCount: number;
  onPortfolioAdd: (name: string, description: string, imageUrl: string) => Promise<void>;
  onPortfolioDelete: (id: string) => Promise<void>;
  page: number;
  onPageChange: (page: number) => void;
}

export default function PortfoliosListComponent(
  {
    portfolios,
    totalCount,
    onPortfolioAdd,
    onPortfolioDelete,
    page,
    onPageChange,
  }: PortfoliosListComponentProps) {

  const handleAddPortfolio = async (name: string, description: string, imageUrl: string) => {
    try {
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

  return (
    <div>
      <Toaster/>
      <PortfoliosCards {...{
        portfolios,
        onDeletePortfolio: handleDeletePortfolio,
        onAddPortfolio: handleAddPortfolio
      }}/>
      <Center>
        <Pagination.Root count={totalCount} pageSize={PAGE_SIZE} defaultPage={page} onPageChange={(e) => onPageChange(e.page)}>
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
    </div>
  )
}