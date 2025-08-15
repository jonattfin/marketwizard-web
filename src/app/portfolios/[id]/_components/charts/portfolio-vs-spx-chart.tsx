import {range} from "@es-toolkit/es-toolkit";
import {LineChart} from "@mui/x-charts/LineChart";
import {PortfolioPerformance} from "@/api/types";
import {getMonthName} from "@/app/constants";

type PortfolioVsSpxLineChartProps = {
  performance?: PortfolioPerformance;
}

export default function PortfolioVsSpxLineChart({performance}: Readonly<PortfolioVsSpxLineChartProps>) {
  if (!performance) {
    return null;
  }

  const series = [];
  let numberOfMonths = 0;
  for (const performanceKey in performance.insights) {
    if (performanceKey !== 'SPX' && performanceKey !== 'Portfolio') {
      continue;
    }

    series.push({
      data: performance?.insights[performanceKey]?.months,
      label: performanceKey
    })

    numberOfMonths = performance?.insights[performanceKey]?.months?.length;
  }

  const xLabels = range(0, numberOfMonths).map(getMonthName);

  return (
    <LineChart
      height={300}
      series={series}
      xAxis={[{scaleType: 'point', data: xLabels}]}
      yAxis={[{width: 50}]}
    />
  );
}