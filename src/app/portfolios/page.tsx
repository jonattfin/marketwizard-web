'use client';

import {Grid} from "@mui/material";
import PortfolioCard from "./_components/portfolioCard"
import {portfolios} from "@/api";

export default function Portfolios() {
  return (
    <div>
      <h2>Portfolios</h2>
      <Grid container spacing={2}>
        {portfolios.map((portfolio) => (
          <Grid key={portfolio.id} size={4}>
            <PortfolioCard {...portfolio}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
