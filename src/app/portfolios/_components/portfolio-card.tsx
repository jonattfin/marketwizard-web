import {type Portfolio} from "@/api/types";
import Link from "next/link";


export type PortfolioCardProps = {
  readonly portfolio?: Portfolio;
}

export default function PortfolioCard({portfolio}: PortfolioCardProps) {
  return (
    <div>
      <div>{JSON.stringify(portfolio)}</div>
      <Link href={`/portfolios/${portfolio?.id}`}>Details</Link>
    </div>
  );
}
