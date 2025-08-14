
import PortfoliosContainer from "@/app/portfolios/_components/portfolios-container";
import Loading from "@/shared/loading";
import {Suspense} from "react";

export default function PortfoliosPage() {
    return (
    <Suspense fallback={<Loading/>}>
      <PortfoliosContainer/>
    </Suspense>
  )
}
