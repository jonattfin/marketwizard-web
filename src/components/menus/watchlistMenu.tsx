import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import DataTable from './datatable'
import {indices, stocks, commodities} from "@/api";
import {Indice} from "@/api/types";
import random from "lodash/random";
import {styled} from "@mui/material/styles";

const CustomBox = styled(Box)`
  padding: 0 5px;
`;

export default function AccordionUsage() {

  const renderIndices = () => {
    return <DataTable rows={indices}/>;
  };

  const renderStocks = () => {
    const rows: Indice[] = stocks.map(stock => ({
      id: stock.id,
      symbol: stock.symbol,
      value: stock.price,
      description: stock.description,
      chg: random(1, 10),
      chgAsPercentage: 0
    }))

    return <DataTable rows={rows}/>;
  };

  const renderCommodities = () => {
     const rows: Indice[] = commodities.map(commodity => ({
      id: commodity.id,
      symbol: commodity.symbol,
      value: commodity.price,
      description: commodity.description,
      chg: random(1, 10),
      chgAsPercentage: 0
    }))

    return <DataTable rows={rows}/>;
  };

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
          {renderIndices()}
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
          {renderStocks()}
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
          {renderCommodities()}
        </AccordionDetails>
        <AccordionActions>
        </AccordionActions>
      </Accordion>
    </CustomBox>
  );
}
