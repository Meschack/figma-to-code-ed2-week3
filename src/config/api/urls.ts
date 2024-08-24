const coinMarketCapBaseUrl = 'https://pro-api.coinmarketcap.com/v1'
const coinGeckoBaseUrl = 'https://api.coingecko.com/api/v3'

// COINMARKETCAP

const AIRDROPS_LIST = (start: number = 1, limit: number = 8) =>
  `${coinMarketCapBaseUrl}/cryptocurrency/airdrops?start=${start}&limit=${limit}`

const COINS_LIST_MARKET_DATA = (category?: string, items?: number) => {
  const categoryString = category ? `&category=${category}` : ''
  const itemsString = items ? `&per_page=${items}` : ''

  return `${coinGeckoBaseUrl}/coins/markets?vs_currency=usd${categoryString}&order=market_cap_desc${itemsString}&page=1`
}

const COIN_DATA = (id: string) =>
  `${coinGeckoBaseUrl}/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`

const COIN_CHART_DATA = (id: string, days: number) =>
  `${coinGeckoBaseUrl}/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`

const CATEGORIES = `${coinGeckoBaseUrl}/coins/categories/list`

export { AIRDROPS_LIST, CATEGORIES, COINS_LIST_MARKET_DATA, COIN_DATA, COIN_CHART_DATA }
