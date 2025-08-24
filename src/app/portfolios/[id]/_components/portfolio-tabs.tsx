'use client';

import {Suspense, useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {range} from "@es-toolkit/es-toolkit";

import News from './portfolio-news';
import {Grid, Slider} from "@mui/material";
import {PortfolioPerformance} from "@/api/types";
import {
  PortfolioVsSpxLineChart,
  PortfolioScatterChart, PortfolioHoldingsLineChart,
} from "./charts";
import Loading from "@/shared/loading";

import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";

function usePortfolioPerformance(id: string) {
  interface Data {
    portfolioPerformanceById: PortfolioPerformance;
  }

  interface Variables {
    id: string;
  }

  const GET_PERFORMANCE_BY_PORTFOLIO_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetPortfolioPerformanceById($id: UUID!) {
     portfolioPerformanceById(portfolioId: $id) {
      id
      ratio {
        betaRatio
        sharpeRatio
        sortinoRatio
      }
      returns {
        assetName
        weeklyReturns
        monthlyReturns
      }
    }
  }
`;

  const {data: {portfolioPerformanceById: performance}} = useSuspenseQuery(
    GET_PERFORMANCE_BY_PORTFOLIO_ID,
    {
      variables: {id}
    });

  return {performance};
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  );
}

export type PortfolioTabsComponentProps = {
  readonly portfolioId: string;
}

export default function PortfolioTabsComponent({portfolioId}: PortfolioTabsComponentProps) {
  const [value, setValue] = useState(0);

  const {performance} = usePortfolioPerformance(portfolioId);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const buildMarks = (maxValue = 0) => {
    return range(maxValue + 1).map((_, i) => (
      {
        value: i,
        label: i
      }
    ));
  }

  const renderRisks = () => {
    return (
      <>
        <h3>Risks</h3>
        <Grid container spacing={2}>
          <Grid size={4}>
            <h4>Beta</h4>
            Should have enough data to analyze by Sep 1 2025
            <Slider defaultValue={performance?.ratio?.betaRatio} max={2} color={"error"} marks={buildMarks(2)}/>
          </Grid>
          <Grid size={4}>
            <h4>Sharpe ratio</h4>
            Should have enough data to analyze by Sep 1 2025
            <Slider defaultValue={performance?.ratio?.sharpeRatio} max={3} color="success" marks={buildMarks(3)}/>
          </Grid>
          <Grid size={4}>
            <h4>Sortino ratio</h4>
            Should have enough data to analyze by Sep 1 2025
            <Slider defaultValue={performance?.ratio?.sortinoRatio} max={5} color="warning" marks={buildMarks(5)}/>
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <Box sx={{width: '100%'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="Overview"/>
        <Tab label="Holdings"/>
        <Tab label="Analysis"/>
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <>
          Overview
          <Suspense fallback={<Loading/>}>
            <PortfolioVsSpxLineChart performance={performance}/>
            <News portfolioId={portfolioId}/>
          </Suspense>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Holdings
        <Suspense fallback={<Loading/>}>
          <PortfolioHoldingsLineChart performance={performance}/>
        </Suspense>
        {/*<PortfolioHoldings portfolioId={portfolioId}/>*/}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Analysis
        <Suspense fallback={<Loading/>}>
          <PortfolioScatterChart performance={performance}/>
          {renderRisks()}
          <div>&nbsp;</div>
        </Suspense>
      </CustomTabPanel>
    </Box>
  );
}