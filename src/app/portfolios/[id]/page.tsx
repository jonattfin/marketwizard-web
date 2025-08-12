import PortfolioTabs from './_components/portfolioTabs';
import SummaryPortfolioCard from "./_components/summaryPortfolioCard";

import {portfolios} from "@/api";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

export default async function Portfolio({params}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params;
  const portfolio = portfolios.find((portfolio) => portfolio.id === id);

  return (
    <>
      <h3>{portfolio?.name}</h3>
      {portfolio?.description}
      <div>&nbsp;</div>
      <Box>

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
        <PortfolioTabs/>
      </Box>
    </>
  );
}


