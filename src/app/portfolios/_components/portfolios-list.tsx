'use client';

import React from 'react';

import {Suspense, useState} from "react";
import {type Portfolio} from "@/api/types";
import PortfoliosCards from "@/app/portfolios/_components/portfolios-cards";
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import Loading from "@/shared/loading";
import {Grid, TablePagination} from "@mui/material";

function usePortfolios(itemsPerPage: number = 6, direction = "backward", cursor?: string) {
  interface Data {
    portfolios: {
      nodes: Portfolio[];
      totalCount: number;
      pageInfo: {
        startCursor: string;
        endCursor: string;
      }
    }
  }

  let dynamicQuery = `first: ${itemsPerPage}`
  if (cursor) {
    const whereTo = direction === "backward" ? "before" : "after";
    dynamicQuery += `, ${whereTo}: "${cursor}"`
  }


  const GET_PORTFOLIOS: TypedDocumentNode<Data> = gql`
  query GetPortfolios {
     portfolios(${dynamicQuery}) {
      pageInfo {
        startCursor
        endCursor
      }
      totalCount
      nodes {
         id
         name
         description
         imageUrl
         lastUpdated
         totalAmount
         averageAnnualReturn
         standardDeviation
         sharpeRatio
      }
    }
  }
`;

  const {data: {portfolios: {nodes = [], pageInfo, totalCount}}} = useSuspenseQuery(GET_PORTFOLIOS);
  return {nodes, pageInfo, totalCount};
}

export default function PortfoliosList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [cursor, setCursor] = useState<string>();
  const [direction, setDirection] = useState<string>("forward");

  const {nodes, totalCount, pageInfo} = usePortfolios(rowsPerPage, direction, cursor);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    if (newPage > page) {
      setCursor(pageInfo.endCursor);
    } else {
      setCursor(pageInfo.startCursor);
      setDirection("backward");
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <Suspense fallback={<Loading/>}>
      <PortfoliosCards portfolios={nodes}></PortfoliosCards>
      <Grid container spacing={2}>
        <Grid size={4}/>
        <Grid size={4} alignContent={"center"}>
          <TablePagination
            component="div"
            count={totalCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
        <Grid size={4}/>
      </Grid>
    </Suspense>
  )
}