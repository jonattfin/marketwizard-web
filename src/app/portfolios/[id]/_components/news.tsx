'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {PortfolioNews} from '@/api/types'

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

export type DataGridProps = {
  news: PortfolioNews[];
}

export default function DataGridDemoP({news = []}: DataGridProps) {
  return (
    <>
      <h3>News</h3>
      <Box sx={{height: 400, width: '100%'}}>
        <DataGrid
          rows={news}
          columns={columns}
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
