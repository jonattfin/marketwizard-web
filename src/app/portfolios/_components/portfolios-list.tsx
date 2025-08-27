'use client';

import React from 'react';

import {Suspense, useState} from "react";
import {type Portfolio} from "@/api/types";
import PortfoliosCards from "@/app/portfolios/_components/portfolios-cards";
import {gql, TypedDocumentNode, useMutation, useSuspenseQuery} from "@apollo/client";
import Loading from "@/shared/loading";
import {Grid, TablePagination} from "@mui/material";
import CreatePortfolio from "@/app/portfolios/_components/create-portfolio";

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
      }
    }
  }
`;

  const {data: {portfolios: {nodes = [], pageInfo, totalCount}}} = useSuspenseQuery(GET_PORTFOLIOS);
  return {nodes, pageInfo, totalCount};
}

function addPortfolioMutation() {
  const ADD_PORTFOLIO = gql`
    mutation addPortfolio($name: String!, $description: String!, $imageUrl: String!) {
      addPortfolio(portfolio: {
        name: $name,
        description: $description,
        imageUrl: $imageUrl,
        userId: "294778a7-0459-4f09-8a59-20ead8ad8aec"
      }) {
        id
      }
    }
  `;

  const [addPortfolio, {data, loading, error}] = useMutation(ADD_PORTFOLIO, {
    refetchQueries: "all"
  });
  return [addPortfolio];
}

export default function PortfoliosList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [cursor, setCursor] = useState<string>();
  const [direction, setDirection] = useState<string>("forward");

  const {nodes, totalCount, pageInfo} = usePortfolios(rowsPerPage, direction, cursor);
  const [addPortfolio] = addPortfolioMutation();

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

  const handleSubmit = async (name: string, description: string, imageUrl: string) => {
    await addPortfolio({variables: {name, description, imageUrl}});
  }

  return (
    <Suspense fallback={<Loading/>}>
      <div>&nbsp;</div>
      <CreatePortfolio onSubmit={handleSubmit}/>
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