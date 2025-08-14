import {range} from "@es-toolkit/es-toolkit";
import {LineChart} from "@mui/x-charts/LineChart";
import {PerformanceType, Portfolio} from "@/api/types";
import {getMonthName} from "@/app/constants";

type PortfolioVsSpxLineChartProps = {
  portfolio?: Portfolio;
}

export default function PortfolioVsSpxLineChart({portfolio}: PortfolioVsSpxLineChartProps) {
  if (!portfolio) {
    return null;
  }

  const portfolioPerformance = portfolio?.performance[PerformanceType.Portfolio]
  const spxPerformance = portfolio?.performance[PerformanceType.Spx];

  const xLabels = range(0, portfolioPerformance?.months?.length - 1).map(getMonthName);

  return (
    <LineChart
      height={300}
      series={[
        { data: portfolioPerformance?.months, label: 'Portfolio' },
        { data: spxPerformance?.months, label: 'SPX' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  );
}