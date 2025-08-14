import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Asset} from '@/api/types'
import Typography from "@mui/material/Typography";

export type BasicTableProps = {
  rows: Asset[]
}

export default function BasicTable({rows = []}: Readonly<BasicTableProps>) {

  const renderText = (value?: number, suffix="") => {
    if (!value) {
      return;
    }

    const color = value > 0 ? "success" : "error";

    return (
      <Typography color={color}>
        {value}{suffix}
      </Typography>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Last</TableCell>
            <TableCell align="right">Chg</TableCell>
            <TableCell align="right">Chg%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.symbol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.symbol}
              </TableCell>
              <TableCell align="right">{row.price.toLocaleString("en-US")}</TableCell>
              <TableCell align="right">{renderText(row.chg)}</TableCell>
              <TableCell align="right">{renderText(row.changeAsPercentage, "%")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
