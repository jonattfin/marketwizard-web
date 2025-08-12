export type Portfolio = {
  id: string;
  name: string;
  imageUrl: string;
  lastUpdated: string;
  totalAmount: number;
  yield: number;
  holdings: number;
}

export const portfolios: Portfolio[] = [];
  for (let i = 0; i < 5; i++) {
    portfolios.push({
      id: i.toString(),
      name: `portfolio ${i}`,
      imageUrl: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
      holdings: 10,
      lastUpdated: 'one minute ago',
      totalAmount: 1000,
      yield: 20
    })
  }