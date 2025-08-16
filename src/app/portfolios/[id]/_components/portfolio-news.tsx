import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {type PortfolioNews} from '@/api/types'
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";

export type PortfolioNewsComponentProps = {
  portfolioId: string;
}

function usePortfolioNews(id: string) {
  interface Data {
    portfolioNewsById: {
      nodes: PortfolioNews[];
    }
  }

  interface Variables {
    id: string;
  }

  const GET_NEWS_BY_PORTFOLIO_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetNewsByPortfolioId($id: String!) {
     portfolioNewsById(id: $id) {
      nodes {
        id
        time
        symbol
        headline
        provider
      }
    }
  }
`;

  const {data: {portfolioNewsById: {nodes = []}}} = useSuspenseQuery(GET_NEWS_BY_PORTFOLIO_ID, {variables: {id}});
  return {nodes};
}

export default function PortfolioNewsComponent({portfolioId}: PortfolioNewsComponentProps) {
  const {nodes} = usePortfolioNews(portfolioId)

  return (
    <>
      <h3>News</h3>
      <Box sx={{height: 400, width: '100%'}}>
        <DataGrid
          rows={nodes}
          columns={buildColumns()}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}

function buildColumns() {
  const columns: GridColDef<PortfolioNews>[] = [
    {field: 'time', headerName: 'Time', width: 90},
    {
      field: 'symbol',
      headerName: 'Symbol',
      width: 150,
      editable: true,
    },
    {
      field: 'headline',
      headerName: 'Headline',
      width: 450,
      editable: true,
    },
    {
      field: 'provider',
      headerName: 'Provider',
      width: 110,
      editable: true,
    },
  ];
  return columns;
}

