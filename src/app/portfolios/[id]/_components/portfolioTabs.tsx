'use client';

import {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import {BasicPieChart, BasicLineChart, BasicScatterChart} from './charts';
import News from './news';
import Holdings from './holdings';
import {Grid, Slider} from "@mui/material";
import {Portfolio} from "@/api/types";

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

export type PortfolioTabsProps = {
  readonly portfolio?: Portfolio;
}

export default function PortfolioTabs({portfolio}: PortfolioTabsProps) {
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
        <Tab label="Analysis"/>
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <>
          Overview
          <BasicLineChart/>
          <News news={portfolio?.news || []}/>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Holdings
        <BasicPieChart portfolio={portfolio}/>
        <Holdings portfolio={portfolio}/>
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