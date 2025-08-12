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
  symbol: string;
  allocation: number;
  description: string
}

export type News = {
  id: string;
  time: string;
  symbol: string;
  headline: string;
  provider: string;
}