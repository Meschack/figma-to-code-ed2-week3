const coinMarketCap = process.env.NEXT_PUBLIC_COINMARKETCAP_API_BASE_URL

// COINMARKETCAP

const AIRDROPS_LIST = (start: number = 1, limit: number = 8) =>
  `/cryptocurrency/airdrops?start=${start}&limit=${limit}`

export { AIRDROPS_LIST }
