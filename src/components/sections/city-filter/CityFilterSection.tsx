'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { CITIES } from '@/data/cities'
import { Season, Region, EnvironmentType, BudgetLevel } from '@/types/city'

const BUDGET_OPTIONS = [
  { value: 'any', label: '전체', icon: '💰' },
  { value: '100만원', label: '100만원 이하', icon: '💵' },
  { value: '100~200만원', label: '100~200만원', icon: '💴' },
  { value: '200만원', label: '200만원 이상', icon: '💶' },
]

const REGION_OPTIONS = [
  { value: 'any', label: '전체', icon: '🗺️' },
  { value: '수도권', label: '수도권', icon: '🏙️' },
  { value: '경상도', label: '경상도', icon: '🌊' },
  { value: '전라도', label: '전라도', icon: '🍚' },
  { value: '강원도', label: '강원도', icon: '⛰️' },
  { value: '제주도', label: '제주도', icon: '🏝️' },
  { value: '충청도', label: '충청도', icon: '🏛️' },
]

const ENVIRONMENT_OPTIONS = [
  { value: 'any', label: '전체', icon: '🌐' },
  { value: 'nature', label: '자연친화', icon: '🌿' },
  { value: 'urban', label: '도심선호', icon: '🏙️' },
  { value: 'cafe', label: '카페작업', icon: '☕' },
  { value: 'coworking', label: '코워킹필수', icon: '🏢' },
]

const SEASON_OPTIONS = [
  { value: 'any', label: '상관없음', icon: '📅' },
  { value: 'spring', label: '봄', icon: '🌸' },
  { value: 'summer', label: '여름', icon: '☀️' },
  { value: 'autumn', label: '가을', icon: '🍂' },
  { value: 'winter', label: '겨울', icon: '❄️' },
]

export default function CityFilterSection() {
  const [budgetLevel, setBudgetLevel] = useState<BudgetLevel | 'any'>('any')
  const [region, setRegion] = useState<Region | 'any'>('any')
  const [environment, setEnvironment] = useState<EnvironmentType | 'any'>('any')
  const [season, setSeason] = useState<Season | 'any'>('any')

  const filteredCount = CITIES.filter((city) => {
    if (budgetLevel !== 'any' && city.budgetLevel !== budgetLevel) return false
    if (region !== 'any' && city.region !== region) return false
    if (environment !== 'any' && city.environment !== environment) return false
    if (season !== 'any' && !city.bestSeasons.includes(season as Season)) return false
    return true
  }).length

  return (
    <section className="py-16 px-4 bg-muted/40">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm text-[var(--color-nomad-600)] font-medium mb-2">
            <span>🔍</span>
            <span>맞춤 도시 탐색</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">내 조건에 맞는 도시 찾기</h2>
          <p className="text-muted-foreground">
            예산, 지역, 환경 성향, 계절을 설정하면 딱 맞는 도시를 추천해드려요
          </p>
        </div>

        <div className="bg-background rounded-2xl border p-6 md:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Budget */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">💰 예산</Label>
              <Select value={budgetLevel} onValueChange={(v) => setBudgetLevel(v as BudgetLevel | 'any')}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="예산을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.icon} {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Region */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">🗺️ 지역</Label>
              <Select value={region} onValueChange={(v) => setRegion(v as Region | 'any')}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="지역을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {REGION_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.icon} {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Environment */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">🏢 환경 성향</Label>
              <Select value={environment} onValueChange={(v) => setEnvironment(v as EnvironmentType | 'any')}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="환경을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {ENVIRONMENT_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.icon} {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Season */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">📆 여행 시즌</Label>
              <Select value={season} onValueChange={(v) => setSeason(v as Season | 'any')}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="시즌을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {SEASON_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.icon} {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* CTA */}
          <Button className="w-full h-12 text-base font-semibold" size="lg">
            <span>🔍</span>
            <span className="ml-2">조건에 맞는 도시 {filteredCount}개 보기</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
