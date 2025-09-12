'use client';

import {Breadcrumb, Image} from "@chakra-ui/react"

import {type Portfolio} from "@/api/types";
import PortfolioTabs from './portfolio-tabs';
import {Suspense} from "react";
import Loading from "@/shared/loading";
import {Heading} from "@chakra-ui/react";
import {usePortfolio} from "@/graphql/hooks";

export type PortfolioDetailsProps = {
  id: string
}


export default function PortfolioDetails({id}: Readonly<PortfolioDetailsProps>) {
  const {portfolio} = usePortfolio(id);

  if (!portfolio) {
    return;
  }

  return (
    <Suspense fallback={<Loading/>}>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/portfolios">Portfolios</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator/>
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>{portfolio.name}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <Heading>{portfolio.description}</Heading>
      <Image src={portfolio.imageUrl} height={320}></Image>
      <div>&nbsp;</div>
      <PortfolioTabs portfolioId={portfolio.id}/>
    </Suspense>
  );
}
