'use client';

import {Suspense, useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {range} from "@es-toolkit/es-toolkit";

import News from './portfolio-news';
import Holdings from './portfolio-holdings';
import {Grid, Slider} from "@mui/material";
import {type Portfolio} from "@/api/types";
import {PortfolioVsSpxLineChart, PortfolioHoldingsPieChart, PortfolioScatterChart} from "./charts";
import Loading from "@/shared/loading";

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
  readonly portfolio?: Portfolio;
}

export default function PortfolioTabsComponent({portfolio}: PortfolioTabsComponentProps) {
  const [value, setValue] = useState(0);

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
            <Slider defaultValue={portfolio?.performance?.ratios?.beta} max={2} color={"error"} marks={buildMarks(2)}/>
          </Grid>
          <Grid size={4}>
            <h4>Sharpe ratio</h4>
            Should have enough data to analyze by Sep 1 2025
            <Slider defaultValue={portfolio?.performance?.ratios?.sharpe} max={3} color="success" marks={buildMarks(3)}/>
          </Grid>
          <Grid size={4}>
            <h4>Sortino ratio</h4>
            Should have enough data to analyze by Sep 1 2025
            <Slider defaultValue={portfolio?.performance?.ratios?.sortino} max={5} color="warning" marks={buildMarks(5)}/>
          </Grid>
        </Grid>
      </>
    )
  }

  const renderPerformance = () => {
    return (
      <>
        <h3>Holdings performance</h3>
        <Grid container spacing={2}>
          {portfolio?.assets.map(({symbol, performance}) => (
            <>
              <Grid size={1}>
                {symbol}
              </Grid>
              <Grid size={10}>
                <Slider defaultValue={Math.abs(performance)} max={20} color={performance >= 0 ? "success" : "error"}/>
              </Grid>
              <Grid size={1}>
                {performance.toPrecision(3)}%
              </Grid>
            </>
          ))}
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
            <PortfolioVsSpxLineChart portfolio={portfolio}/>
          </Suspense>
          <News news={portfolio?.news || []}/>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Holdings
        <Suspense fallback={<Loading/>}>
          <PortfolioHoldingsPieChart portfolio={portfolio}/>
        </Suspense>
        <Holdings portfolio={portfolio}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Analysis
        <Suspense fallback={<Loading/>}>
          <PortfolioScatterChart portfolio={portfolio}/>
        </Suspense>
        {renderRisks()}
        <div>&nbsp;</div>
        {renderPerformance()}
      </CustomTabPanel>
    </Box>
  );
}