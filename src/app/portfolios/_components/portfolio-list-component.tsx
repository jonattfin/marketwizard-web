'use client';

import React from 'react';

import {useState} from "react";
import PortfoliosCards from "@/app/portfolios/_components/portfolios-cards";

import CreatePortfolio from "@/app/portfolios/_components/create-portfolio";
import {Portfolio} from "@/api/types";
import {Toaster, toaster} from "@/components/ui/toaster";
import {ButtonGroup, Center, IconButton, Pagination} from "@chakra-ui/react";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

export type PortfoliosListComponentProps = {
  portfolios: Portfolio[];
  totalCount: number;
  onPortfolioAdd: (name: string, description: string, imageUrl: string) => Promise<void>;
  onPortfolioDelete: (id: string) => Promise<void>;
}

export default function PortfoliosListComponent({
                                                  portfolios,
                                                  totalCount,
                                                  onPortfolioAdd,
                                                  onPortfolioDelete
                                                }: PortfoliosListComponentProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const handleAddPortfolio = async (name: string, description: string, imageUrl: string) => {
    try {
      await onPortfolioAdd(name, description, imageUrl);

      toaster.create({
        title: "Portfolio created",
        type: "success",
      });

    } catch (error) {
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

    } catch (error) {
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
        <Pagination.Root count={totalCount} pageSize={3} defaultPage={1}>
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