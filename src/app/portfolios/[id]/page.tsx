import PortfolioContainer from "./_components/portfolio-container";
import {Suspense} from "react";
import Loading from "@/shared/loading";

export default async function PortfolioPage({params}: Readonly<{
  params: Promise<{ id: string }>
}>) {
  const {id} = await params;

  return (
    <Suspense fallback={<Loading/>}>
      <PortfolioContainer {...{id}} />
    </Suspense>
  )
}