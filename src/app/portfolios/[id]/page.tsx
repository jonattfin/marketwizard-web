
'use client';

import PortfolioTabs from './_components/portfolioTabs';
import SummaryPortfolioCard from "./_components/summaryPortfolioCard";

import api from "@/api";
import Box from "@mui/material/Box";
import {Accordion, Breadcrumbs, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "@mui/material/Card";
import Link from 'next/link'
import {useEffect, useState} from "react";
import {type Portfolio} from "@/api/types";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState<Portfolio | undefined>();

  useEffect(() => {
    async function fetchPortfolio() {
      const portfolio = await api.fetchPortfolioById("11");
      setPortfolio(portfolio)
    }
    fetchPortfolio().catch(console.error)
  }, []);

  return (
    <>
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
              <ul>
                <li>Risk level: {portfolio?.risk}</li>
                <li>Average annual return: {portfolio?.averageAnnualReturn}</li>
                <li>Maximum drawdown: {portfolio?.maximumDrawdown}</li>
                <li>Standard deviation: {portfolio?.standardDeviation}</li>
                <li>Sharpe ratio: {portfolio?.sharpeRatio}</li>
              </ul>
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
                <Grid size={3}>
                  <SummaryPortfolioCard {...{
                    title: "Portfolio value",
                    subtitle: "39.59 USD",
                    note: "Cash -100000"
                  }}/>
                </Grid>
                <Grid size={3}>
                  <SummaryPortfolioCard {...{
                    title: "Unrealized gain",
                    subtitle: "+40.59 USD",
                    note: "Last day -50 -0.33%"
                  }}/>
                </Grid>
                <Grid size={3}>
                  <SummaryPortfolioCard {...{
                    title: "Total gain",
                    subtitle: "+40.59 USD",
                    note: "Realized gain 0.0"
                  }}/>
                </Grid>
                <Grid size={3}>
                  <SummaryPortfolioCard {...{
                    title: "Annualized yield",
                    subtitle: "23.17%",
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
        <PortfolioTabs portfolio={portfolio}/>
      </Box>
    </>
  );
}


