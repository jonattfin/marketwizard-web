import {Portfolio} from "@/api/types";
import {Grid} from "@mui/material";
import PortfolioCard from "@/app/portfolios/_components/portfolio-card";

export type PortfoliosCardsProps = {
  readonly portfolios: Portfolio[];
}

export default function PortfoliosCards({portfolios}: PortfoliosCardsProps) {
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