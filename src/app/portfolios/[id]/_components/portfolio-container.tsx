'use client';

import {useState, useEffect} from 'react';

import {type Portfolio} from "@/api/types";
import api from "@/api"
import PortfolioComponent from "./portfolio-component";

export type PortfolioContainerProps = {
  id: string;
}

export default function PortfolioContainer({id}: Readonly<PortfolioContainerProps>) {
  const [portfolio, setPortfolio] = useState<Portfolio | undefined>();

  useEffect(() => {
    async function fetchPortfolio() {
      const portfolio = await api.fetchPortfolioById(id);
      setPortfolio(portfolio)
    }

    fetchPortfolio().catch(console.error)
  }, [id])

  return <PortfolioComponent portfolio={portfolio}/>
}