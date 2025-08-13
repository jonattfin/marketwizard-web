export type Portfolio = {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  lastUpdated: string;
  totalAmount: number;
  yield: number;
  holdings: number;
}

export type Stock = {
  id: string;
  price: number;
  symbol: string;
  chg: number,
  chgAsPercentage?: number;
  description: string
}

export type Indice = {
  id: string;
  symbol: string;
  price: number;
  chg: number;
  chgAsPercentage?: number
  description: string
}

export type Commodity = {
  id: string;
  symbol: string;
  price: number;
  chg: number;
  chgAsPercentage?: number
  description: string
}

export type News = {
  id: string;
  time: string;
  symbol: string;
  headline: string;
  provider: string;
}