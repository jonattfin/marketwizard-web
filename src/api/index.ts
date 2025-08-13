import {Stock, Portfolio, News, Indice, Commodity, PortfolioStock} from './types'
import random from "lodash/random";

function createPortfolios() {
  const portfolios: Portfolio[] = [];

  portfolios.push({
    id: "1",
    name: "Defensive",
    description: `
    Designed for investment goals with a short-term horizon. 
    It is best suited for investors who prioritize stability and capital preservation over high growth. 
    This portfolio typically includes 98% in ETFs that replicate bonds and 2% in cash (EUR) to ensure capital preservation.
    `,
    imageUrl: "https://images.unsplash.com/photo-1620365744528-88da1e08ac96",
    holdings: random(1, 10),
    lastUpdated: "one minute ago",
    totalAmount: 500,
    yield: 3,
    risk: 1,
    sharpeRatio: 0.02,
    maximumDrawdown: -10.28,
    averageAnnualReturn: 2.09,
    standardDeviation: 6.03
  });

  portfolios.push({
    id: "2",
    name: "Slow and Steady",
    description: `
    Designed for investment goals with a short-medium term horizon. 
    Ideal for investors who value principal conservation but are comfortable with a small degree of risk and volatility to seek some growth potential.
    This portfolio typically comprises 25% in ETFs containing stocks, 73% in ETFs that replicate bonds, and 2% in cash (EUR)
    `,
    imageUrl:  "https://images.unsplash.com/photo-1618044733300-9472054094ee",
    holdings: random(1, 10),
    lastUpdated: "one minute ago",
    totalAmount: 500,
    yield: 3,
    risk: 2,
    sharpeRatio: 0.75,
    maximumDrawdown: -16.05,
    averageAnnualReturn: 5.55,
    standardDeviation: 4.85
  });

  portfolios.push({
    id: "3",
    name: "Balanced bundle",
    description: `
    This portfolio is designed for investment goals with a medium-term horizon. 
    It is best for investors seeking relatively higher returns while being willing to accept modest risk.
    This portfolio usually includes a diversified mix of 52% in ETFs containing stocks, 48% in ETFs that replicate bonds, and 2% in cash (EUR).
    `,
    imageUrl: "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d",
    holdings: random(1, 10),
    lastUpdated: "one minute ago",
    totalAmount: 500,
    yield: 3,
    risk: 3,
    sharpeRatio: 1.08,
    maximumDrawdown: -21.76,
    averageAnnualReturn: 10.13,
    standardDeviation: 7.58
  });

  portfolios.push({
    id: "4",
    name: "Bold Stack",
    description: `
    Designed for investment goals with a medium-long-term horizon. 
    It is best suited for investors seeking long-term growth with somewhat less variable returns and above-average volatility.
    This portfolio is composed primarily of 70% in ETFs containing stocks, 28% in ETFs that replicate bonds, and 2% in cash (EUR)
    `,
    imageUrl: "https://images.unsplash.com/photo-1506450041641-40545dddaf90",
    holdings: random(1, 10),
    lastUpdated: "one minute ago",
    totalAmount: 500,
    yield: 3,
    risk: 4,
    sharpeRatio: 0.99,
    maximumDrawdown: -25.28,
    averageAnnualReturn: 12.09,
    standardDeviation: 10.6
  });

  portfolios.push({
    id: "5",
    name: "High growth",
    description: `
      This portfolio is designed for investment goals with a long-term horizon. 
      It is best for investors focusing on high-growth potential with the ability to withstand higher market swings.
      This portfolio is heavily weighted towards 88% in ETFs containing stocks, 10% in ETFs that replicate bonds, and 2% in cash (EUR), aiming for maximum growth despite high volatility
    `,
    imageUrl: "https://images.unsplash.com/photo-1548454934-501d30773413",
    holdings: random(1, 10),
    lastUpdated: "one minute ago",
    totalAmount: 500,
    yield: 3,
    risk: 5,
    sharpeRatio: 1.02,
    maximumDrawdown: -29.28,
    averageAnnualReturn: 15.6,
    standardDeviation: 13.37
  });

  return portfolios;
}

export const portfolios = createPortfolios();

const asPercentage = (x: number, y: number) => {
  return Number(((y / x) * 100).toFixed(2));
}

export const stocks: Stock[] = [
  {id: "1", price: 741.79, description: 'ASML Holding', symbol: 'ASML', chg: 20.48},
  {id: "2", price: 133.01, description: 'Vanguard FTSE-World', symbol: 'VWRL', chg: 0.36},
  {id: "3", price: 220.45, description: 'Schneider Electric', symbol: 'SU', chg: -1.75},
  {id: "4", price: 192.93, description: 'Lululemon Athletica', symbol: 'LULU', chg: 6.49},
  {id: "5", price: 103, description: 'Deckers Outdoor Corporation', symbol: 'DECK', chg: 3.27},
  {id: "6", price: 70, description: 'Exponent Inc', symbol: "EXPO", chg: 1.2},
].map(stock => ({
  ...stock,
  chgAsPercentage: asPercentage(stock.price, stock.chg)
}));

const mapAllocation = (symbol: string) => {
  switch (symbol) {
    case "ASML":
      return 16.5;
    case "VWRL":
      return 50;
    case "DECK":
      return 10;
    case "SU":
      return 25;
    case "EXPO":
      return 5;
    default:
      return 20;
  }
}

export const portfolioStocks: PortfolioStock[] = stocks.map((stock) => ({
  stock,
  allocation: mapAllocation(stock.symbol)
}))

export const indices: Indice[] = [
  {id: "1", description: 'VIX', symbol: 'VIX', price: 14.54, chg: -1.00, chgAsPercentage: 0},
  {id: "2", description: 'DKY', symbol: 'DKY', price: 97645, chg: -500, chgAsPercentage: 0},
  {id: "3", description: 'DAX', symbol: 'DAX', price: 24204, chg: 300, chgAsPercentage: 0},
  {id: "4", description: 'DJI', symbol: 'DJI', price: 44458, chg: 483, chgAsPercentage: 0},
  {id: "5", description: 'SPX', symbol: 'SPX', price: 6445, chg: 72, chgAsPercentage: 0},
  {id: "6", description: 'NDQ', symbol: "NDQ", price: 23839, chg: 312, chgAsPercentage: 0},
].map(indice => ({
  ...indice,
  chgAsPercentage: asPercentage(indice.price, indice.chg)
}));

export const commodities: Commodity[] = [
  {id: "1", price: 3416.10, description: 'GOLD', symbol: 'GLD', chg: -100, chgAsPercentage: 0},
  {id: "2", price: 38.65, description: 'SILVER', symbol: 'SIL', chg: -0.408, chgAsPercentage: 0},
  {id: "3", price: 4.52, description: 'COPPER', symbol: 'COP', chg: 0.3, chgAsPercentage: 0},
]
  .map(commodity => ({
    ...commodity,
    chgAsPercentage: asPercentage(commodity.price, commodity.chg)
  }));

export const news: News[] = [
  {id: "1", time: "today", symbol: 'ASML', headline: 'Applied Materials before Q3 Earnings', provider: "Zacks"},
  {
    id: "2",
    time: "today",
    symbol: 'DECK',
    headline: 'Will HOKA momentum fuel another strong year for Deckers?',
    provider: "Dow Jones"
  },
  {id: "3", time: "today", symbol: 'EXPO', headline: 'Exponent inc sec 10-q report', provider: "Zacks"},
  {
    id: "4",
    time: "yesterday",
    symbol: 'LULU',
    headline: 'Lululemon is maintained at outperform by baird',
    provider: "Reuters"
  },
  {
    id: "5",
    time: "3 days ago",
    symbol: 'DECK',
    headline: 'US imports fall more than expected in June',
    provider: "TradingView"
  },
];