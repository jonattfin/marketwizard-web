'use client';

import {Breadcrumb, Image} from "@chakra-ui/react"

import PortfolioTabs from './portfolio-tabs';
import Loading from "@/shared/loading";
import {Heading} from "@chakra-ui/react";
import {usePortfolio} from "@/graphql/hooks";

export type PortfolioDetailsProps = {
  id: string
}

export default function PortfolioDetails({id}: Readonly<PortfolioDetailsProps>) {
  const {portfolio, loading, error} = usePortfolio(id);

  if (loading) return <Loading/>;
  if (error || !portfolio) return `Page ${error}`;

  return (
    <>
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
    </>
  );
}
