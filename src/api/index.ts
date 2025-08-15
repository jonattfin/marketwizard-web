import {randomInt, orderBy, range, delay} from "@es-toolkit/es-toolkit";

import {
  Asset,
  PortfolioAsset,
  PortfolioPerformance,
} from './types'

function createPortfolioAssets(assets: Asset[]) {
  const portfolioAssets: PortfolioAsset[] = [];

  ["ASML", "VWRL", "EXPO", "DECK", "LULU"].forEach(symbol => {
    const asset = assets.find(a => a.symbol === symbol);

    if (asset) {
      portfolioAssets.push({
        ...asset,
        numberOfShares: randomInt(10, 50),
        pricePerShare: randomInt(10, 100),
        performance: randomInt(-10, 20),
        allocation: randomInt(10, 30)
      })
    }
  })

  return orderBy(portfolioAssets, ['performance'], ['desc']);
}

function createPortfolioPerformance(assets: PortfolioAsset[]): PortfolioPerformance {
  const currentMonth = 8;
  const currentWeek = 33;

  const buildScatterData = (upperBound: number) => range(0, upperBound).map(() => {
    return randomInt(5, 15)
  });

  const obj: PortfolioPerformance = {
    insights: {},
    ratios: {
      beta: randomInt(1, 2),
      sharpe: randomInt(1, 3),
      sortino: randomInt(1, 5)
    }
  };

  ['Portfolio', "SPX", ...assets.map(a => a.symbol)].forEach(symbol => {
    obj.insights[symbol] = {
      months: buildScatterData(currentMonth),
      weeks: buildScatterData(currentWeek),
    }
  })

  return obj;
}

function createWatchlist() {
  const createStocks = (): Asset[] => {
    const assets: Asset[] = [];

    assets.push(createAsset("1", 741.79, 'ASML', 20.48, "ASML Holding", ""));
    assets.push(createAsset("2", 133.01, 'VWRL', 0.36, "Vanguard FTSE-World", ));
    assets.push(createAsset("3", 220.79, 'SU', -1.75, "Schneider Electric", ));
    assets.push(createAsset("4", 192.79, 'LULU', 6.49, "Lululemon Athletica", ));
    assets.push(createAsset("5", 103.79, 'DECK', 3.27, "Deckers Outdoor Corporation",));
    assets.push(createAsset("6", 70.79, 'EXPO', 1.2, "Exponent Inc",));

    return assets;
  }
  const createIndices = () => {
    const assets: Asset[] = [];

    assets.push(createAsset("7", 14.54, 'VIX', -1, "VIX",));
    assets.push(createAsset("8", 24204, 'DAX', 300, "DAX",));
    assets.push(createAsset("9", 6445, 'SPX', 72, "SPX",));
    assets.push(createAsset("10", 23839, 'NDQ', 312, "NDQ",));

    return assets;
  };
  const createCommodities = () => {

    const assets: Asset[] = [];

    assets.push(createAsset("11", 3416, 'GLD', -100, "GLD"));
    assets.push(createAsset("12", 38, 'SLD', -1, "SILVER"));
    assets.push(createAsset("13", 4.5, 'CPR', 0.3, "COPPER"));

    return assets;
  };

  return [...createStocks(), ...createIndices(), ...createCommodities()];
}


function createAsset(id: string, price: number, symbol: string, chg: number, description: string, assetType: string = "") {
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

async function withDelay<T>(data: T, delayTime: number = 0): Promise<T> {
  if (delayTime > 0) {
    await delay(delayTime);
  }

  return data;
}

function createLocalApi() {
  const watchlist: Asset[] = createWatchlist();
  const assets = createPortfolioAssets(watchlist);
  const performance = createPortfolioPerformance(assets);

  return {
    fetchPortfolioAssetsById: () => withDelay(assets),
    fetchPortfolioPerformanceById: () => withDelay(performance)
  }
}

const localApi = createLocalApi();

export default localApi;