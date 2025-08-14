import { PieChart } from "@mui/x-charts";
import {Portfolio} from "@/api/types";

export type PortfolioHoldingsPieChartProps = {
  readonly portfolio?: Portfolio;
}

export default function PortfolioHoldingsPieChart({portfolio}: PortfolioHoldingsPieChartProps) {
  const data = portfolio?.assets.map(({id, symbol, allocation}) => ({
    id: id,
    value: allocation,
    label: symbol,
  })) ?? [];

  return (
    <PieChart
      series={[
        {
          data
        },
      ]}
      width={200}
      height={200}
    />
  );
}