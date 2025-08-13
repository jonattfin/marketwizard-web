import {Stock, Portfolio, News, Indice, Commodity} from './types'

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

export const stocks: Stock[] = [
  {id: "1", price: 741, description: 'ASML Holding', symbol: 'ASML', allocation: 16},
  {id: "2", price: 132, description: 'Vanguard FTSE-World', symbol: 'VWRL', allocation: 43},
  {id: "3", price: 220, description: 'Schneider Electric', symbol: 'SU', allocation: 7},
  {id: "4", price: 192, description: 'Lululemon Athletica', symbol: 'LULU', allocation: 10},
  {id: "5", price: 103, description: 'Deckers Outdoor Corporation', symbol: 'DECK', allocation: 14},
  {id: "6", price: 70, description: 'Exponent Inc', symbol: "EXPO", allocation: 7},
];

export const indices: Indice[] = [
  {id: "1", description: 'VIX', symbol: 'VIX', value: 14.54, chg: -0.18, chgAsPercentage: -1.22},
  {id: "2", description: 'DKY', symbol: 'DKY', value: 97645, chg: -0.408, chgAsPercentage: -0.42},
  {id: "3", description: 'DAX', symbol: 'DAX', value: 24204, chg: 179, chgAsPercentage: 0.75},
  {id: "4", description: 'DJI', symbol: 'DJI', value: 44458, chg: 483, chgAsPercentage: 1.1},
  {id: "5", description: 'SPX', symbol: 'SPX', value: 6445, chg: 72, chgAsPercentage: 1.13},
  {id: "6", description: 'NDQ', symbol: "NDQ", value: 23839, chg: 312, chgAsPercentage: 1.33},
];

export const commodities: Commodity[] = [
  {id: "1", price: 741, description: 'GOLD', symbol: 'GLD', chg: -0.18, chgAsPercentage: -1.22},
  {id: "2", price: 741, description: 'SILVER', symbol: 'SIL', chg: -0.408, chgAsPercentage: -0.42},
  {id: "3", price: 741, description: 'COPPER', symbol: 'COP', chg: 179, chgAsPercentage: 0.75},
];

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