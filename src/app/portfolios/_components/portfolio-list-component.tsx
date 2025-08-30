'use client';

import React from 'react';

import {useState} from "react";
import PortfoliosCards from "@/app/portfolios/_components/portfolios-cards";

import CreatePortfolio from "@/app/portfolios/_components/create-portfolio";
import {Portfolio} from "@/api/types";
import {Button, HStack} from "@chakra-ui/react";
import {RiArrowRightLine, RiMailLine} from "react-icons/ri";

export type PortfoliosListComponentProps = {
  portfolios: Portfolio[];
  totalCount: number;
  onSubmit: (name: string, description: string, imageUrl: string) => void;
}

export default function PortfoliosListComponent({portfolios, totalCount, onSubmit}: PortfoliosListComponentProps) {
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

  const handleSubmit = async (name: string, description: string, imageUrl: string) => {
    onSubmit(name, description, imageUrl);
  }

  return (
    <>
      <div>&nbsp;</div>
      <HStack>
      <Button colorPalette="teal" variant="solid">
        <RiMailLine /> Email
      </Button>
      <Button colorPalette="teal" variant="outline">
        Call us <RiArrowRightLine />
      </Button>
    </HStack>
      <CreatePortfolio onSubmit={handleSubmit}/>
      <PortfoliosCards portfolios={portfolios}></PortfoliosCards>
    </>
  )
}