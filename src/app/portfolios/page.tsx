'use client';

import {Grid} from "@mui/material";
import PortfolioCard from "./_components/portfolioCard"
import api from "@/api";
import {useEffect, useState} from "react";
import {type Portfolio} from "@/api/types";

export default function Portfolios() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    async function fetchPortfolios() {
      const portfolios = await api.fetchPortfolios();
      setPortfolios(portfolios);
    }
    fetchPortfolios().catch(console.error);
  }, []);

  return (
    <div>
      <h2>Portfolios</h2>
      <Grid container spacing={2}>
        {portfolios.map((portfolio) => (
          <Grid key={portfolio.id} size={4}>
            <PortfolioCard {...{portfolio}} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
