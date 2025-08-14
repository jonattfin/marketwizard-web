import {random, randomInt, orderBy, range} from "@es-toolkit/es-toolkit";

import {
  Asset,
  AssetType,
  PerformanceType,
  Portfolio,
  PortfolioAsset,
  PortfolioNews,
  PortfolioPerformance,
  RiskLevel
} from './types'


function createPortfolioAssets(assets: Asset[]) {
  const portfolioAssets: PortfolioAsset[] = [];

  const asmlAsset = assets.find(a => a.symbol === "ASML");
  if (asmlAsset) {
    portfolioAssets.push({
      ...asmlAsset,
      numberOfShares: 10,
      pricePerShare: 700,
      performance: random(-10, 10),
      allocation: random(10, 90)
    },)
  }

  const vwrlAsset = assets.find(a => a.symbol === "VWRL");
  if (vwrlAsset) {
    portfolioAssets.push({
      ...vwrlAsset,
      numberOfShares: 10,
      pricePerShare: 130,
      performance: random(-10, 10),
      allocation: random(10, 90)
    },)
  }

  const suAsset = assets.find(a => a.symbol === "SU");
  if (suAsset) {
    portfolioAssets.push({
      ...suAsset,
      numberOfShares: 10,
      pricePerShare: 200,
      performance: random(-10, 10),
      allocation: random(10, 90)
    },)
  }

  return orderBy(portfolioAssets, ['performance'], ['desc']);
}

function createPortfolioNews() {
  const news: PortfolioNews[] = [
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

  return news;
}

function createPortfolioPerformance() : PortfolioPerformance {
  const currentMonth = 9;
  const currentDay = 240;

  const buildScatterData = () => range(1, currentDay).map(i => {
    return random(5, 15)
  });

  const obj: PortfolioPerformance = {
    [PerformanceType.Spx]: {
      days: [],
      months: []
    },
    [PerformanceType.Portfolio]: {
      days: [],
      months: []
    },
    ratios: {
      beta: randomInt(1,2),
      sharpe: randomInt(1, 3),
      sortino: randomInt(1, 5)
    }
  };

  [PerformanceType.Portfolio, PerformanceType.Spx].forEach(pType => {
    const data = range(0, currentMonth).map(() => random(1, 20));

    obj[pType] = {
      months: data,
      days: buildScatterData(),
    }
  })

  return obj;
}

function createPortfolios(assets: PortfolioAsset[]) {

  const portfolios: Portfolio[] = [];

  portfolios.push(createPortfolio(
    "11",
    "Defensive",
    `
    Designed for investment goals with a short-term horizon. 
    It is best suited for investors who prioritize stability and capital preservation over high growth. 
    This portfolio typically includes 98% in ETFs that replicate bonds and 2% in cash (EUR) to ensure capital preservation.
    `,
    "https://images.unsplash.com/photo-1602536422477-f56ba7493ca6",
    "one minute ago",
    500,
    1,
    0.02,
    -10.28,
    2.09,
    6.03,
    assets,
    createPortfolioNews(),
    createPortfolioPerformance()
  ));

  portfolios.push(createPortfolio(
    "12",
    "Slow and Steady",
    `
    Designed for investment goals with a short-medium term horizon. 
    Ideal for investors who value principal conservation but are comfortable with a small degree of risk and volatility to seek some growth potential.
    This portfolio typically comprises 25% in ETFs containing stocks, 73% in ETFs that replicate bonds, and 2% in cash (EUR)
    `,
    "https://images.unsplash.com/photo-1618044733300-9472054094ee",
    "one minute ago",
    500,
    2,
    0.75,
    -16.05,
    5.55,
    4.85,
    assets,
    createPortfolioNews(),
    createPortfolioPerformance()
  ));

  portfolios.push(createPortfolio(
    "13",
    "Balanced bundle",
    `
    This portfolio is designed for investment goals with a medium-term horizon. 
    It is best for investors seeking relatively higher returns while being willing to accept modest risk.
    This portfolio usually includes a diversified mix of 52% in ETFs containing stocks, 48% in ETFs that replicate bonds, and 2% in cash (EUR).
    `,
    "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d",
    "one minute ago",
    500,
    3,
    1.08,
    -21.76,
    10.13,
    7.58,
    assets,
    createPortfolioNews(),
    createPortfolioPerformance()
  ));

  portfolios.push(createPortfolio(
    "14",
    "Bold Stack",
    `
    Designed for investment goals with a medium-long-term horizon. 
    It is best suited for investors seeking long-term growth with somewhat less variable returns and above-average volatility.
    This portfolio is composed primarily of 70% in ETFs containing stocks, 28% in ETFs that replicate bonds, and 2% in cash (EUR)
    `,
    "https://images.unsplash.com/photo-1506450041641-40545dddaf90",
    "one minute ago",
    500,
    4,
    0.99,
    -25.28,
    12.09,
    10.6,
    assets,
    createPortfolioNews(),
    createPortfolioPerformance()
  ));

  portfolios.push(createPortfolio(
    "15",
    "High growth",
    `
      This portfolio is designed for investment goals with a long-term horizon. 
      It is best for investors focusing on high-growth potential with the ability to withstand higher market swings.
      This portfolio is heavily weighted towards 88% in ETFs containing stocks, 10% in ETFs that replicate bonds, and 2% in cash (EUR), aiming for maximum growth despite high volatility
    `,
    "https://images.unsplash.com/photo-1548454934-501d30773413",
    "one minute ago",
    500,
    5,
    1.02,
    -29.28,
    15.6,
    13.37,
    assets,
    createPortfolioNews(),
    createPortfolioPerformance()
  ));

  return portfolios;
}

function createWatchlist() {
  const createStocks = (): Asset[] => {
    const assets: Asset[] = [];

    assets.push(createAsset("1", 741.79, 'ASML', 20.48, "ASML Holding", AssetType.Stock));
    assets.push(createAsset("2", 133.01, 'VWRL', 0.36, "Vanguard FTSE-World", AssetType.Etf));
    assets.push(createAsset("3", 220.79, 'SU', -1.75, "Schneider Electric", AssetType.Stock));
    assets.push(createAsset("4", 192.79, 'LULU', 6.49, "Lululemon Athletica", AssetType.Stock));
    assets.push(createAsset("5", 103.79, 'DECK', 3.27, "Deckers Outdoor Corporation", AssetType.Stock));
    assets.push(createAsset("6", 70.79, 'EXPO', 1.2, "Exponent Inc", AssetType.Stock));

    return assets;
  }
  const createIndices = () => {
    const assets: Asset[] = [];

    assets.push(createAsset("7", 14.54, 'VIX', -1, "VIX", AssetType.Indice));
    assets.push(createAsset("8", 24204, 'DAX', 300, "DAX", AssetType.Indice));
    assets.push(createAsset("9", 6445, 'SPX', 72, "SPX", AssetType.Indice));
    assets.push(createAsset("10", 23839, 'NDQ', 312, "NDQ", AssetType.Indice));

    return assets;
  };
  const createCommodities = () => {

    const assets: Asset[] = [];

    assets.push(createAsset("11", 3416, 'GLD', -100, "GLD", AssetType.Commodity));
    assets.push(createAsset("12", 38, 'SLD', -1, "SILVER", AssetType.Commodity));
    assets.push(createAsset("13", 4.5, 'CPR', 0.3, "COPPER", AssetType.Commodity));

    return assets;
  };

  return [...createStocks(), ...createIndices(), ...createCommodities()];
}

function createPortfolio(
  id: string, name: string, description: string, imageUrl: string, lastUpdated: string, totalAmount: number, risk: RiskLevel,
  averageAnnualReturn: number, standardDeviation: number, sharpeRatio: number, maximumDrawdown: number,
  assets: PortfolioAsset[] = [], news: PortfolioNews[] = [], performance: PortfolioPerformance
) {
  return {
    id,
    name,
    description,
    imageUrl,
    lastUpdated,
    totalAmount,
    risk,
    averageAnnualReturn,
    standardDeviation,
    sharpeRatio,
    maximumDrawdown,
    assets,
    news,
    performance
  }
}

function createAsset(id: string, price: number, symbol: string, chg: number, description: string, assetType: AssetType) {
  return {
    id,
    price,
    symbol,
    chg,
    description,
    assetType,
    changeAsPercentage: asPercentage(price, chg)
  }
}

function asPercentage(x: number, y: number) {
  return Number(((y / x) * 100).toFixed(2));
}

const watchlist: Asset[] = createWatchlist();
const portfolios = createPortfolios(createPortfolioAssets(watchlist));

const api = {
  fetchWatchlist: () => Promise.resolve(watchlist),
  fetchPortfolios: () => Promise.resolve(portfolios),
  fetchPortfolioById: (id: string) => Promise.resolve(portfolios.find(portfolio => portfolio.id === id)),
}

export default api;