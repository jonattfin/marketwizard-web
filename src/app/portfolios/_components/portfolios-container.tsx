'use client';

import api from "@/api";
import {useEffect, useState} from "react";
import {type Portfolio} from "@/api/types";
import PortfoliosCards from "@/app/portfolios/_components/portfolios-cards";

export default function PortfoliosContainer() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    async function fetchPortfolios() {
      const portfolios = await api.fetchPortfolios();
      setPortfolios(portfolios);
    }
    fetchPortfolios().catch(console.error);
  }, []);

  return <PortfoliosCards portfolios={portfolios}></PortfoliosCards>
}