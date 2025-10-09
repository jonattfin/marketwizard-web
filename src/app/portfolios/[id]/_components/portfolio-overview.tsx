"use client"

import {PortfolioSummaryDto} from "@/api/types";

type PortfolioOverviewType = {
  portfolio: PortfolioSummaryDto
}

const PortfolioOverview = ({portfolio}: PortfolioOverviewType) => {
 return <div>portfolio overview</div>
}


export default PortfolioOverview;
