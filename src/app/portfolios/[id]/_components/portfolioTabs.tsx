'use client';

import {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import {BasicBarChart, BasicPieChart, BasicLineChart, BasicScatterChart} from './charts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function PortfolioTabs() {
   const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="Overview" />
        <Tab label="Holdings" />
        <Tab label="Transactions" />
        <Tab label="Analysis" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <>
          Overview
          <BasicBarChart />
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Holdings
        <BasicPieChart/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Transactions
        <BasicLineChart/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Analysis
        <BasicScatterChart/>
      </CustomTabPanel>
    </Box>
  );
}