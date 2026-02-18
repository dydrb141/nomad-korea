export type Season = 'spring' | 'summer' | 'autumn' | 'winter'
export type NatureType = 'sea' | 'mountain' | 'urban' | 'any'
export type AccessibilityType = 'ktx_2h' | 'ktx_1h' | 'capital' | 'any'

export interface City {
  id: string
  name: string
  region: string
  emoji: string
  score: number
  internetSpeed: number
  monthlyCost: { min: number; max: number }
  coworkingCount: number
  seoulAccess: string
  tags: string[]
  nature: NatureType
  bestSeasons: Season[]
  hasCoworking: boolean
  accessibility: AccessibilityType
}

export interface CityRank {
  rank: 1 | 2 | 3
  city: City
  rankBadge: '🥇' | '🥈' | '🥉'
}

export interface CityFilter {
  maxBudget: number
  minInternetSpeed: number
  nature: NatureType
  accessibility: AccessibilityType
  season: Season | 'any'
  hasCoworking: boolean
}
