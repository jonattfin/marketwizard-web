import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {type PortfolioAsset, type Portfolio} from '@/api/types'

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

export type PortfolioHoldingsComponentProps = {
  portfolio?: Portfolio;
};

export default function PortfolioHoldingsComponent({portfolio}: PortfolioHoldingsComponentProps) {
  return (
    <>
      <h3>Holdings</h3>
      <Box sx={{height: 500, width: '100%'}}>
        <DataGrid
          rows={portfolio?.assets}
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
