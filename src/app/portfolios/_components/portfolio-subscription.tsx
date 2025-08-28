'use client';

import {gql, useSubscription} from "@apollo/client";
import {Portfolio} from "@/api/types";
import {useEffect, useState} from "react";
import Loading from "@/shared/loading";

const ADD_PORTFOLIO_SUBSCRIPTION = gql`
  subscription OnPortfolioAdded {
    onPortfolioAdded {
      id
      name
      description
    }
  }
`;

export default function PortfolioSubscription() {
  const { data: subscriptionData, error, loading } = useSubscription<{ onPortfolioAdded: Portfolio }>(ADD_PORTFOLIO_SUBSCRIPTION);
  const [portfolio, setPortfolio] = useState<Portfolio>();

  useEffect(() => {
    if (subscriptionData) {
      setPortfolio(subscriptionData.onPortfolioAdded)
    }
  }, [subscriptionData, error, loading]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return "Subscription failed";
  }

  return (
    <>
      Portfolio subscription
      {JSON.stringify(portfolio, null, 2)}
    </>
  )

}