'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { CITIES } from '@/data/cities'

const NATURE_OPTIONS = [
  { value: 'any', label: '상관없음', icon: '🌏' },
  { value: 'sea', label: '바다', icon: '🌊' },
  { value: 'mountain', label: '산/계곡', icon: '🏔️' },
  { value: 'urban', label: '도시', icon: '🏙️' },
]

const ACCESS_OPTIONS = [
  { value: 'any', label: '상관없음', icon: '✈️' },
  { value: 'capital', label: '수도권', icon: '🚇' },
  { value: 'ktx_1h', label: 'KTX 1시간대', icon: '🚄' },
  { value: 'ktx_2h', label: 'KTX 2시간대', icon: '🚅' },
]

const SEASON_OPTIONS = [
  { value: 'any', label: '상관없음', icon: '📅' },
  { value: 'spring', label: '봄', icon: '🌸' },
  { value: 'summer', label: '여름', icon: '☀️' },
  { value: 'autumn', label: '가을', icon: '🍂' },
  { value: 'winter', label: '겨울', icon: '❄️' },
]

export default function CityFilterSection() {
  const [budget, setBudget] = useState([150])
  const [nature, setNature] = useState('any')
  const [accessibility, setAccessibility] = useState('any')
  const [season, setSeason] = useState('any')
  const [coworkingOnly, setCoworkingOnly] = useState(false)

  const filteredCount = CITIES.filter((city) => {
    if (city.monthlyCost.max > budget[0]) return false
    if (nature !== 'any' && city.nature !== nature) return false
    if (accessibility !== 'any' && city.accessibility !== accessibility) return false
    if (season !== 'any' && !city.bestSeasons.includes(season as 'spring' | 'summer' | 'autumn' | 'winter')) return false
    if (coworkingOnly && !city.hasCoworking) return false
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
            예산, 자연환경, 접근성을 설정하면 딱 맞는 도시를 추천해드려요
          </p>
        </div>

        <div className="bg-background rounded-2xl border p-6 md:p-8 space-y-8">
          {/* Budget slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">💰 월 예산 (생활비 최대)</Label>
              <span className="text-lg font-bold text-[var(--color-nomad-600)]">
                {budget[0]}만원 이하
              </span>
            </div>
            <Slider
              min={60}
              max={200}
              step={10}
              value={budget}
              onValueChange={setBudget}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>60만원</span>
              <span>200만원</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Nature type */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">🌿 자연환경</Label>
              <RadioGroup value={nature} onValueChange={setNature} className="space-y-2">
                {NATURE_OPTIONS.map((opt) => (
                  <div key={opt.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt.value} id={`nature-${opt.value}`} />
                    <Label htmlFor={`nature-${opt.value}`} className="cursor-pointer">
                      {opt.icon} {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Accessibility */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">🚄 서울 접근성</Label>
              <RadioGroup value={accessibility} onValueChange={setAccessibility} className="space-y-2">
                {ACCESS_OPTIONS.map((opt) => (
                  <div key={opt.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt.value} id={`access-${opt.value}`} />
                    <Label htmlFor={`access-${opt.value}`} className="cursor-pointer">
                      {opt.icon} {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Season */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">📆 여행 시즌</Label>
              <RadioGroup value={season} onValueChange={setSeason} className="space-y-2">
                {SEASON_OPTIONS.map((opt) => (
                  <div key={opt.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt.value} id={`season-${opt.value}`} />
                    <Label htmlFor={`season-${opt.value}`} className="cursor-pointer">
                      {opt.icon} {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Coworking toggle */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="coworking-only"
              checked={coworkingOnly}
              onChange={(e) => setCoworkingOnly(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 accent-[var(--color-nomad-600)]"
            />
            <Label htmlFor="coworking-only" className="cursor-pointer">
              🏢 코워킹스페이스 있는 도시만 보기
            </Label>
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
