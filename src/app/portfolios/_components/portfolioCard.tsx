import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import {Portfolio} from "@/api/types";
import {styled} from "@mui/material/styles";
import {CardMedia} from "@mui/material";

const CustomLink = styled(Link)`
    color: #555ab9;
`;

export default function PortfolioCard(props: Portfolio) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia sx={{ height: 140 }} image={props.imageUrl}>
      </CardMedia>
      <CardContent>
         <Typography variant="h5" component="div">
           {props.name}
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {props.description}
        </Typography>
        <Typography component={"div"}>
          <ul>
            <li>Risk level: {props.risk}</li>
            <li>Average annual return: {props.averageAnnualReturn}</li>
            <li>Maximum drawdown: {props.maximumDrawdown}</li>
            <li>Standard deviation: {props.standardDeviation}</li>
            <li>Sharpe ratio: {props.sharpeRatio}</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <CustomLink href={`/portfolios/${props.id}`}>Learn More</CustomLink>
      </CardActions>
    </Card>
  );
}
