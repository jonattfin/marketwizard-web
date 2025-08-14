import {range} from "@es-toolkit/es-toolkit";
import {LineChart} from "@mui/x-charts/LineChart";
import {Portfolio} from "@/api/types";
import {getMonthName} from "@/app/constants";

type PortfolioVsSpxLineChartProps = {
  portfolio?: Portfolio;
}

export default function PortfolioVsSpxLineChart({portfolio}: Readonly<PortfolioVsSpxLineChartProps>) {
  if (!portfolio) {
    return null;
  }

  const series = [];
  let numberOfMonths = 0;
  for (const performanceKey in portfolio?.performance.insights) {
    if (performanceKey !== 'SPX' && performanceKey !== 'Portfolio') {
      continue;
    }

    series.push({
      data: portfolio?.performance?.insights[performanceKey]?.months,
      label: performanceKey
    })

    numberOfMonths = portfolio?.performance?.insights[performanceKey]?.months?.length;
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