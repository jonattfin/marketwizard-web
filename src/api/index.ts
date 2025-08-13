import {Stock, Portfolio, News, Indice, Commodity, PortfolioStock} from './types'

export const portfolios: Portfolio[] = [];
for (let i = 0; i < 5; i++) {
  portfolios.push({
    id: i.toString(),
    name: `portfolio ${i}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    imageUrl: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
    holdings: 10,
    lastUpdated: 'one minute ago',
    totalAmount: 1000,
    yield: 20
  })
}

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
    case "ASML": return 16.5;
    case "VWRL": return 50;
    case "DECK": return 10;
    case "SU": return 25;
    case "EXPO": return 5;
    default: return 20;
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