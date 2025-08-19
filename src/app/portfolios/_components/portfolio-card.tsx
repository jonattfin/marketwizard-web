import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import {type Portfolio} from "@/api/types";
import {styled} from "@mui/material/styles";
import {CardMedia} from "@mui/material";

const CustomLink = styled(Link)`
    color: #555ab9;
`;

export type PortfolioCardProps = {
  readonly portfolio?: Portfolio;
}

export default function PortfolioCard({portfolio}: PortfolioCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia sx={{ height: 140 }} image={portfolio?.imageUrl}>
      </CardMedia>
      <CardContent>
         <Typography variant="h5" component="div">
           {portfolio?.name}
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {portfolio?.description}
        </Typography>
        {/*<Typography component={"div"}>*/}
        {/*  <ul>*/}
        {/*    <li>Risk level: {portfolio?.risk}</li>*/}
        {/*    <li>Average annual return: {portfolio?.averageAnnualReturn}</li>*/}
        {/*    <li>Maximum drawdown: {portfolio?.maximumDrawdown}</li>*/}
        {/*    <li>Standard deviation: {portfolio?.standardDeviation}</li>*/}
        {/*    <li>Sharpe ratio: {portfolio?.sharpeRatio}</li>*/}
        {/*  </ul>*/}
        {/*</Typography>*/}
      </CardContent>
      <CardActions>
        <CustomLink href={`/portfolios/${portfolio?.id}`}>Learn More</CustomLink>
      </CardActions>
    </Card>
  );
}
