'use client';

import {Grid} from "@mui/material";
import PortfolioCard, {Portfolio} from "./_components/portfolioCard"

export default function Portfolios() {

  const portfolios: Portfolio[] = [];
  for (let i = 0; i < 5; i++) {
    portfolios.push({
      id: i.toString(),
      name: `portfolio ${i}`,
      imageUrl: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
      holdings: (Math.random() * 10).toFixed(0),
      lastUpdated: 'one minute ago',
      totalAmount: (Math.random() * 1000).toFixed(2),
      yield: (Math.random() * 10).toFixed(2)
    })
  }

  return (
    <div>
      <h2>Portfolios (Beta)</h2>
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
