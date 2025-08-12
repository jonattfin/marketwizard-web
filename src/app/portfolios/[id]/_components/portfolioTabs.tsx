'use client';

import {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import {BasicBarChart, BasicPieChart, BasicLineChart, BasicScatterChart} from './charts';
import News from './news';
import Holdings from './holdings';
import {stocks} from '@/api';
import {Grid, Slider} from "@mui/material";

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
        <Tab label="Transactions"/>
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
        Transactions
        <BasicBarChart/>
        <News/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Analysis
        <BasicScatterChart/>
        <h3>Risks</h3>
        <Grid container spacing={2}>
          <Grid size={4}>
            <h4>Beta</h4>
            You'll have enough data to analyze by Sep 1 2025
            <Slider defaultValue={1} max={2} color={"error"} />
          </Grid>
           <Grid size={4}>
            <h4>Sharpe ratio</h4>
            You'll have enough data to analyze by Sep 1 2025
             <Slider defaultValue={1} max={3} color="success"/>
          </Grid>
           <Grid size={4}>
            <h4>Beta</h4>
            You'll have enough data to analyze by Sep 1 2025
             <Slider defaultValue={2} max={5} color="warning" />
          </Grid>
        </Grid>
        <News/>
      </CustomTabPanel>
    </Box>
  );
}