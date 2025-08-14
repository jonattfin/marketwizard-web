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
import {type Asset, AssetType} from "@/api/types";

const CustomBox = styled(Box)`
  padding: 0 5px;
`;

export type WatchlistMenuProps = {
  readonly assets: Asset[];
}

export default function WatchlistMenu({assets}: WatchlistMenuProps) {
  return (
    <CustomBox>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Indices</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable rows={assets.filter(a => a.assetType === AssetType.Indice)}/>
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
          <DataTable rows={assets.filter(a => a.assetType === AssetType.Stock)}/>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Commodities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable rows={assets.filter(a => a.assetType === AssetType.Commodity)}/>
        </AccordionDetails>
        <AccordionActions>
        </AccordionActions>
      </Accordion>
    </CustomBox>
  );
}
