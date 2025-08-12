import {Stock, Portfolio} from './types'

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
  {id: "1", description: 'ASML Holding', symbol: 'ASML', allocation: 16},
  {id: "2", description: 'Vanguard FTSE-World', symbol: 'VWRL', allocation: 43},
  {id: "3", description: 'Schneider Electric', symbol: 'SU', allocation: 7},
  {id: "4", description: 'Lululemon Athletica', symbol: 'LULU', allocation: 10},
  {id: "5", description: 'Deckers Outdoor Corporation', symbol: 'DECK', allocation: 14},
  {id: "6", description: 'Exponent Inc', symbol: "EXPO", allocation: 7},
];