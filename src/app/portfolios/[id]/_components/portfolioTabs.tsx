'use client';

import {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import {BasicPieChart, BasicLineChart, BasicScatterChart} from './charts';
import News from './news';
import Holdings from './holdings';
import {stocks} from '@/api';
import {Grid, Slider} from "@mui/material";
import random from "lodash/random";
import orderBy from "lodash/orderBy";

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

export default function PortfolioTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderRisks = () => {
    return (
      <>
        <h3>Risks</h3>
        <Grid container spacing={2}>
          <Grid size={4}>
            <h4>Beta</h4>
            Should have enough data to analyze by Sep 1 2025
            <Slider defaultValue={1} max={2} color={"error"}/>
          </Grid>
          <Grid size={4}>
            <h4>Sharpe ratio</h4>
            Should have enough data to analyze by Sep 1 2025
            <Slider defaultValue={1} max={3} color="success"/>
          </Grid>
          <Grid size={4}>
            <h4>Sortino ratio</h4>
            Should have enough data to analyze by Sep 1 2025
            <Slider defaultValue={2} max={5} color="warning"/>
          </Grid>
        </Grid>
      </>
    )
  }

  const renderPerformance = () => {
    const stocksWithPerformance = orderBy(stocks.map((stock) => (
      {
        symbol: stock.symbol,
        performance: random(-5, 20)
      }
    )), ["performance"], ["desc"])

    return (
      <>
        <h3>Holdings performance</h3>
        <Grid container spacing={2}>
          {stocksWithPerformance.map(({symbol, performance}) => (
            <>
              <Grid size={1}>
                {symbol}
              </Grid>
              <Grid size={10}>
                <Slider defaultValue={Math.abs(performance)} max={20} color={performance > 0 ? "success" : "error"}/>
              </Grid>
              <Grid size={1}>
                {performance}%
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
        {/*<Tab label="Transactions"/>*/}
        <Tab label="Analysis"/>
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <>
          Overview
          <BasicLineChart/>
          <News/>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Holdings
        <BasicPieChart stocks={stocks}/>
        <Holdings stocks={stocks}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Analysis
        <BasicScatterChart/>
        {renderRisks()}
        <div>&nbsp;</div>
        {renderPerformance()}
      </CustomTabPanel>
    </Box>
  );
}