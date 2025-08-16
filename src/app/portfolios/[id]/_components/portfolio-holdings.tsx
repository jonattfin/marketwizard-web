import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {type PortfolioAsset} from '@/api/types'

import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import {Suspense} from "react";
import Loading from "@/shared/loading";

function usePortfolioHoldings(id: string) {
  interface Data {
    portfolioAssetsById: {
      nodes: PortfolioAsset[]
    };
  }

  interface Variables {
    id: string;
  }

  const GET_ASSETS_BY_PORTFOLIO_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetPortfolioAssetsById($id: String!) {
     portfolioAssetsById(id: $id) {
      nodes {
        id
        symbol
        description
        numberOfShares
        pricePerShare
      }
    }
  }
`;

  const {data: {portfolioAssetsById: {nodes: assets = []}}} = useSuspenseQuery(
    GET_ASSETS_BY_PORTFOLIO_ID,
    {
      variables: {id}
    });

  return {assets}
}

export type PortfolioHoldingsComponentProps = {
  readonly portfolioId: string;
};

export default function PortfolioHoldingsComponent({portfolioId}: PortfolioHoldingsComponentProps) {

  const {assets} = usePortfolioHoldings(portfolioId);

  return (
    <Suspense fallback={<Loading/>}>
      <h3>Holdings</h3>
      <Box sx={{height: 500, width: '100%'}}>
        <DataGrid
          rows={assets}
          columns={createColumns()}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Suspense>
  );
}

function createColumns() {
  const columns: GridColDef<PortfolioAsset>[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
      field: 'symbol',
      headerName: 'Symbol',
      width: 150,
      editable: false,
    },
    {
      field: 'pricePerShare',
      headerName: 'Price Per Share',
      width: 150,
      editable: false,
    },
    {
      field: 'numberOfShares',
      headerName: 'Number Of Shares',
      width: 150,
      editable: false,
    },
    {
      field: 'description',
      headerName: 'Description',
      type: 'string',
      width: 200,
      editable: false,
    },
  ];
  return columns;
}
