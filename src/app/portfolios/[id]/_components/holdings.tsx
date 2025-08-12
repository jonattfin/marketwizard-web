'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Stock} from '@/api/types'

const columns: GridColDef<Stock>[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'symbol',
    headerName: 'Symbol',
    width: 150,
    editable: false,
  },
  {
    field: 'allocation',
    headerName: 'Allocation',
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

export type DataGridProps = {
  stocks: Stock[]
};

export default function DataGridDemo({stocks}: DataGridProps) {
  return (
    <>
      <h3>Holdings</h3>
      <Box sx={{height: 500, width: '100%'}}>
        <DataGrid
          rows={stocks}
          columns={columns}
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
    </>
  );
}
