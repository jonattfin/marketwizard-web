import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export type Portfolio = {
  id: string;
  name: string;
  imageUrl: string;
  lastUpdated: string;
  totalAmount: string;
  yield: string;
  holdings: string;
}

export default function PortfolioCard(props: Portfolio) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Image src={props.imageUrl} width={500} height={200} alt='A beautiful English Setter'/>
         <Typography variant="h5" component="div">
           {props.name || "My portfolio"}
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          updated {props.lastUpdated || "one minute ago"}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          {props.totalAmount || 0} USD
        </Typography>
        <Typography variant="body2">
          Yield: {props.yield || 0}%
          <br />
          Holdings: {props.holdings || 0}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
