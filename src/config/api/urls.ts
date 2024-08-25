const coinMarketCapBaseUrl = 'https://pro-api.coinmarketcap.com/v1'

const coinGeckoBaseUrl = 'https://api.coingecko.com/api/v3'

// COINMARKETCAP

const AIRDROPS_LIST = (start: number = 1, limit: number = 8) =>
  `${coinMarketCapBaseUrl}/cryptocurrency/airdrops?start=${start}&limit=${limit}`

// COINGECKO

const COINS_LIST_MARKET_DATA = (category?: string, items?: number, sort?: string) => {
  const categoryString = category ? `&category=${category}` : ''

  const itemsString = items ? `&per_page=${items}` : ''

  const orderString = sort ? `&order=${sort}` : ''

  return `${coinGeckoBaseUrl}/coins/markets?vs_currency=usd${categoryString}${orderString}${itemsString}&page=1`
}

const COIN_DATA = (id: string) =>
  `${coinGeckoBaseUrl}/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`

const COIN_CHART_DATA = (id: string, days: number) =>
  `${coinGeckoBaseUrl}/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`

const CATEGORIES = `${coinGeckoBaseUrl}/coins/categories/list`

const TRENDING_SEARCH = `${coinGeckoBaseUrl}/search/trending`

export {
  AIRDROPS_LIST,
  CATEGORIES,
  COIN_CHART_DATA,
  COIN_DATA,
  COINS_LIST_MARKET_DATA,
  TRENDING_SEARCH
}
