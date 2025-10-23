'use client';

import {Tabs} from "@chakra-ui/react";
import {LuFolder, LuSquareCheck, LuUser} from "react-icons/lu";
import PortfolioOverview from "@/app/portfolios/[id]/_components/portfolio-overview";
import PortfolioAnalysis from "@/app/portfolios/[id]/_components/portfolio-analysis";
import PortfolioHoldings from "@/app/portfolios/[id]/_components/portfolio-holdings";
import {PortfolioSummaryDto} from "@/api/types";

export type PortfolioTabsComponentType = {
  readonly portfolio: PortfolioSummaryDto;
}

export default function PortfolioTabsComponent({portfolio}: PortfolioTabsComponentType) {

  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">
          <LuUser/>
          Overview
        </Tabs.Trigger>
        <Tabs.Trigger value="holdings">
          <LuFolder/>
          Holdings
        </Tabs.Trigger>
        <Tabs.Trigger value="analysys">
          <LuSquareCheck/>
          Analysis
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">
        <PortfolioOverview />
      </Tabs.Content>
      <Tabs.Content value="holdings"><PortfolioHoldings portfolio={portfolio}/></Tabs.Content>
      <Tabs.Content value="analysys"><PortfolioAnalysis/></Tabs.Content>
    </Tabs.Root>
  );
}

