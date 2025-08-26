'use client';

import Box from "@mui/material/Box";
import {Accordion, Breadcrumbs, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "@mui/material/Card";
import Link from 'next/link'

import {type Portfolio} from "@/api/types";
import PortfolioTabs from './portfolio-tabs';
import PortfolioSummary from "./portfolio-summary";
import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";
import {Suspense} from "react";
import Loading from "@/shared/loading";

export type PortfolioDetailsProps = {
  id: string
}

function usePortfolioById(id: string) {
  interface Data {
    portfolioById: Portfolio;
  }

  interface Variables {
    id: string;
  }

  const GET_PORTFOLIO_BY_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetPortfolioById($id: UUID!) {
     portfolioById(portfolioId: $id) {
         id
         name
         description
         imageUrl
         totalValue
         unrealizedGain
    }
  }
`;

  const {data: {portfolioById: portfolio}} = useSuspenseQuery(GET_PORTFOLIO_BY_ID, {variables: {id}});
  return {portfolio};
}

export default function PortfolioDetails({id}: Readonly<PortfolioDetailsProps>) {
  const {portfolio} = usePortfolioById(id);

  return (
    <Suspense fallback={<Loading/>}>
      <Card sx={{minWidth: 275}}>
        <CardMedia sx={{height: 400}} image={portfolio?.imageUrl}/>
        <CardContent>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/portfolios">
              Portfolios
            </Link>
            <div>
              {portfolio?.name} Portfolio
            </div>
          </Breadcrumbs>
          <h3>{portfolio?.name} Portfolio</h3>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {portfolio?.description}
              {/*<ul>*/}
              {/*  <li>Risk level: {portfolio?.risk}</li>*/}
              {/*  <li>Average annual return: {portfolio?.averageAnnualReturn}</li>*/}
              {/*  <li>Maximum drawdown: {portfolio?.maximumDrawdown}</li>*/}
              {/*  <li>Standard deviation: {portfolio?.standardDeviation}</li>*/}
              {/*  <li>Sharpe ratio: {portfolio?.sharpeRatio}</li>*/}
              {/*</ul>*/}
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Performance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid size={4}>
                  <PortfolioSummary {...{
                    title: "Portfolio value",
                    subtitle: `${portfolio.totalValue} USD`,
                    note: "-"
                  }}/>
                </Grid>
                <Grid size={4}>
                  <PortfolioSummary {...{
                    title: "Unrealized gain",
                    subtitle: `${portfolio.unrealizedGain} USD`,
                    note: "-"
                  }}/>
                </Grid>
                <Grid size={4}>
                  <PortfolioSummary {...{
                    title: "Realized gain",
                    subtitle: "0 USD",
                    note: "-"
                  }}/>
                </Grid>
              </Grid>
              <div>&nbsp;</div>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
      <br/>
      <Box>
        <PortfolioTabs portfolioId={portfolio.id}/>
      </Box>
    </Suspense>
  );
}
