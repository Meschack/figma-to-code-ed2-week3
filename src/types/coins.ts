export interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number | null
  ath: number
  ath_change_percentage: number
  ath_date: Date
  atl: number
  atl_change_percentage: number
  atl_date: Date
  roi: Roi | null
  last_updated: Date
}

interface Roi {
  times: number
  currency: string
  percentage: number
}

export interface CoinDetails {
  id: string
  symbol: string
  name: string
  web_slug: string
  asset_platform_id: string | null
  platforms: Platforms
  detail_platforms: DetailPlatforms
  block_time_in_minutes: number
  hashing_algorithm: string
  categories: string[]
  preview_listing: boolean
  public_notice: null
  additional_notices: any[]
  description: Description
  links: Links
  image: Image
  country_origin: string
  genesis_date: Date
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number
  watchlist_portfolio_users: number
  market_cap_rank: number
  status_updates: any[]
  last_updated: Date
  market_data: MarketData
}

interface Description extends Record<string, string> {}

interface DetailPlatforms extends Record<string, Empty> {}

interface Empty {
  decimal_place: null
  contract_address: string
}

interface Image {
  thumb: string
  small: string
  large: string
}

interface Links {
  homepage: string[]
  whitepaper: string
  blockchain_site: string[]
  official_forum_url: string[]
  chat_url: string[]
  announcement_url: string[]
  twitter_screen_name: string
  facebook_username: string
  bitcointalk_thread_identifier: null
  telegram_channel_identifier: string
  subreddit_url: string
  repos_url: ReposURL
}

interface ReposURL extends Record<string, string[]> {}

interface Platforms extends Record<string, string> {}

export interface MarketData {
  current_price: NumberRecord
  total_value_locked: null
  mcap_to_tvl_ratio: null
  fdv_to_tvl_ratio: null
  roi: null
  ath: NumberRecord
  ath_change_percentage: NumberRecord
  ath_date: { [key: string]: Date }
  atl: NumberRecord
  atl_change_percentage: NumberRecord
  atl_date: { [key: string]: Date }
  market_cap: NumberRecord
  market_cap_rank: number
  fully_diluted_valuation: NumberRecord
  market_cap_fdv_ratio: number
  total_volume: NumberRecord
  high_24h: NumberRecord
  low_24h: NumberRecord
  price_change_24h: number
  price_change_percentage_24h: number
  price_change_percentage_7d: number
  price_change_percentage_14d: number
  price_change_percentage_30d: number
  price_change_percentage_60d: number
  price_change_percentage_200d: number
  price_change_percentage_1y: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  price_change_24h_in_currency: NumberRecord
  price_change_percentage_1h_in_currency: NumberRecord
  price_change_percentage_24h_in_currency: NumberRecord
  price_change_percentage_7d_in_currency: NumberRecord
  price_change_percentage_14d_in_currency: NumberRecord
  price_change_percentage_30d_in_currency: NumberRecord
  price_change_percentage_60d_in_currency: NumberRecord
  price_change_percentage_200d_in_currency: NumberRecord
  price_change_percentage_1y_in_currency: NumberRecord
  market_cap_change_24h_in_currency: NumberRecord
  market_cap_change_percentage_24h_in_currency: NumberRecord
  total_supply: number
  max_supply: number
  circulating_supply: number
  last_updated: Date
}

type NumberRecord = Record<string, number>
