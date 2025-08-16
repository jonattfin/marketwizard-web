import {range} from "@es-toolkit/es-toolkit";
import {LineChart, LineSeries} from "@mui/x-charts/LineChart";
import {PortfolioPerformance} from "@/api/types";
import {getMonthName} from "@/app/constants";

type PortfolioVsSpxLineChartProps = {
  performance?: PortfolioPerformance;
}

export default function PortfolioVsSpxLineChart({performance}: Readonly<PortfolioVsSpxLineChartProps>) {
  if (!performance) {
    return null;
  }

  const series: LineSeries[] = [];

  performance.returns.forEach((p) => {
    series.push({
      data: p.months,
      label: p.assetName,
      showMark: false
    });
  })

  const xLabels = range(0, 12).map(getMonthName);

  return (
    <LineChart
      height={300}
      series={series}
      xAxis={[{scaleType: 'point', data: xLabels}]}
      yAxis={[{width: 50}]}
    />
  );
}