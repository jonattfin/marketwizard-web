import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import DataTable from './datatable'
import {styled} from "@mui/material/styles";
import {type Asset} from "@/api/types";
import {Suspense} from "react";
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import Loading from "@/shared/loading";

const CustomBox = styled(Box)`
    padding: 0 5px;
`;

function useWatchlist() {
  interface Data {
    watchlistAssets: {
      nodes: Asset[];
    }
  }

  const GET_WATCHLIST_ASSETS: TypedDocumentNode<Data> = gql`
  query GetWatchlistAssets {
     watchlistAssets {
      nodes {
        id
        symbol
        name
        type
        description
        lastPrice
        priceHistories {
          price
          date
      }
    }
  }
}
`;

  const {data: {watchlistAssets: {nodes: assets = []}}, error} = useSuspenseQuery(GET_WATCHLIST_ASSETS);

  if (error) {
    return {assets: []};
  }

  return {assets};
}

export default function WatchlistMenu() {
  const {assets} = useWatchlist();

  return (
    <Suspense fallback={<Loading/>}>
      <CustomBox>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">ETF</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DataTable rows={assets.filter(a => a.type === "ETF")}/>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Stocks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DataTable rows={assets.filter(a => a.type === "STOCK")}/>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">Crypto</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DataTable rows={assets.filter(a => a.type === "CRYPTO")}/>
          </AccordionDetails>
          <AccordionActions>
          </AccordionActions>
        </Accordion>
      </CustomBox>
    </Suspense>
  );
}
