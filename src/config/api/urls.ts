const coinMarketCapBaseUrl = 'https://pro-api.coinmarketcap.com/v1'

const coinGeckoBaseUrl = 'https://api.coingecko.com/api/v3'

// COINMARKETCAP

const AIRDROPS_LIST = (start: number = 1, limit: number = 8) =>
  `${coinMarketCapBaseUrl}/cryptocurrency/airdrops?start=${start}&limit=${limit}`

// COINGECKO

const COINS_LIST_MARKET_DATA = (category?: string, sort?: string, currency: string = 'usd') => {
  const categoryString = category ? `&category=${category}` : ''

  const orderString = sort ? `&order=${sort}` : ''

  return `${coinGeckoBaseUrl}/coins/markets?vs_currency=${currency}${categoryString}${orderString}&per_page=250&sparkline=true`
}

const COIN_DATA = (id: string) =>
  `${coinGeckoBaseUrl}/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`

const COIN_CHART_DATA = (id: string, days: number, currency: string = 'usd') =>
  `${coinGeckoBaseUrl}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`

const CATEGORIES = `${coinGeckoBaseUrl}/coins/categories/list`

const TRENDING_SEARCH = `${coinGeckoBaseUrl}/search/trending`

const CURRENCIES_LIST = `${coinGeckoBaseUrl}/simple/supported_vs_currencies`

export {
  CATEGORIES,
  CURRENCIES_LIST,
  TRENDING_SEARCH,
  AIRDROPS_LIST,
  COIN_CHART_DATA,
  COIN_DATA,
  COINS_LIST_MARKET_DATA
}
