'use client';

import {Suspense, useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {range} from "@es-toolkit/es-toolkit";

import {PortfolioPerformance} from "@/api/types";
import {
  PortfolioScatterChart, PortfolioHoldingsLineChart,
} from "./charts";
import Loading from "@/shared/loading";

import {gql, TypedDocumentNode, useSuspenseQuery} from "@apollo/client";

function usePortfolioPerformance(id: string) {
  interface Data {
    portfolioById: PortfolioPerformance;
  }

  interface Variables {
    id: string;
  }

  const GET_PERFORMANCE_BY_PORTFOLIO_ID: TypedDocumentNode<Data, Variables> = gql`
  query GetPortfolioPerformanceById($id: UUID!) {
    portfolioById(portfolioId: $id) {
      id
      portfolioAssets {
        type
        numberOfShares
        pricePerShare
        asset {
          symbol
          priceHistories {
            price
            date
          }
        }
      }
    }
  }
`;

  const {data: {portfolioById: performance}} = useSuspenseQuery(
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

  return (
    <Box sx={{width: '100%'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="Holdings"/>
        <Tab label="Analysis"/>
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        Holdings
        <Suspense fallback={<Loading/>}>
          <PortfolioHoldingsLineChart performance={performance}/>
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Analysis
        <Suspense fallback={<Loading/>}>
          <PortfolioScatterChart performance={performance}/>
          {/*{renderRisks()}*/}
          <div>&nbsp;</div>
        </Suspense>
      </CustomTabPanel>
    </Box>
  );
}