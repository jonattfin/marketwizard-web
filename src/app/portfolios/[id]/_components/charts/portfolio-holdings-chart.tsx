import { PieChart } from "@mui/x-charts";
import {PortfolioAsset} from "@/api/types";

export type PortfolioHoldingsPieChartProps = {
  readonly assets: PortfolioAsset[];
}

export default function PortfolioHoldingsPieChart({assets}: Readonly<PortfolioHoldingsPieChartProps>) {
  const data = assets.map(({id, symbol, allocation}) => ({
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