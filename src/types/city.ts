export type Season = 'spring' | 'summer' | 'autumn' | 'winter'
export type EnvironmentType = 'nature' | 'urban' | 'cafe' | 'coworking'
export type Region = '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도'
export type BudgetLevel = '100만원' | '100~200만원' | '200만원'

export interface City {
  id: string
  name: string
  region: Region
  emoji: string
  likes: number
  dislikes: number
  internetSpeed: number
  monthlyCost: { min: number; max: number }
  coworkingCount: number
  seoulAccess: string
  tags: string[]
  environment: EnvironmentType
  bestSeasons: Season[]
  budgetLevel: BudgetLevel
}

export interface CityRank {
  rank: 1 | 2 | 3
  city: City
  rankBadge: '🥇' | '🥈' | '🥉'
}

export interface CityFilter {
  budgetLevel: BudgetLevel | 'any'
  minInternetSpeed: number
  environment: EnvironmentType | 'any'
  region: Region | 'any'
  season: Season | 'any'
}
