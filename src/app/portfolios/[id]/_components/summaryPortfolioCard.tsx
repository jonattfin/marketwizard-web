'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export type SummaryPortfolioCardProps = {
  title: string;
  subtitle: string;
  note?: string;
}

export default function SummaryPortfolioCard({title, subtitle, note}: SummaryPortfolioCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          {subtitle}
        </Typography>
        <Typography variant="body2">
          {note}
        </Typography>
      </CardContent>
    </Card>
  );
}
