'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CITIES } from '@/data/cities'
import { City } from '@/types/city'

const COMPARE_METRICS = [
  { key: 'internetSpeed', label: '인터넷 속도', format: (v: number) => `${v} Mbps`, higherBetter: true },
  { key: 'monthlyCostMin', label: '최소 월 생활비', format: (v: number) => `${v}만원`, higherBetter: false },
  { key: 'monthlyCostMax', label: '최대 월 생활비', format: (v: number) => `${v}만원`, higherBetter: false },
  { key: 'coworkingCount', label: '코워킹스페이스', format: (v: number) => `${v}개`, higherBetter: true },
]

function getCityMetric(city: City, key: string): number {
  switch (key) {
    case 'internetSpeed': return city.internetSpeed
    case 'monthlyCostMin': return city.monthlyCost.min
    case 'monthlyCostMax': return city.monthlyCost.max
    case 'coworkingCount': return city.coworkingCount
    default: return 0
  }
}

export default function CityCompareSection() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['jeju', 'busan'])

  const toggleCity = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((c) => c !== id)
      if (prev.length >= 3) return prev
      return [...prev, id]
    })
  }

  const selectedCities = CITIES.filter((c) => selectedIds.includes(c.id))

  const getBestIndex = (metric: (typeof COMPARE_METRICS)[0], cities: City[]) => {
    const values = cities.map((c) => getCityMetric(c, metric.key))
    const best = metric.higherBetter ? Math.max(...values) : Math.min(...values)
    return values.findIndex((v) => v === best)
  }

  return (
    <section id="compare" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm text-[var(--color-nomad-600)] font-medium mb-2">
            <span>⚖️</span>
            <span>도시 비교</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">도시 나란히 비교하기</h2>
          <p className="text-muted-foreground">최대 3개 도시를 선택해서 핵심 지표를 비교하세요</p>
        </div>

        {/* City selector */}
        <div className="bg-muted/40 rounded-2xl p-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium self-center">비교 도시 선택 (최대 3개):</span>
            {CITIES.map((city) => (
              <Badge
                key={city.id}
                variant={selectedIds.includes(city.id) ? 'default' : 'outline'}
                className="cursor-pointer text-sm py-1 px-3"
                onClick={() => toggleCity(city.id)}
              >
                {city.emoji} {city.name}
                {selectedIds.includes(city.id) && (
                  <X className="ml-1 h-3 w-3 inline" />
                )}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            {selectedIds.length}/3 선택됨 · 클릭으로 추가/제거
          </p>
        </div>

        {/* Compare table */}
        {selectedCities.length >= 2 ? (
          <div className="rounded-2xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold text-sm">항목</th>
                    {selectedCities.map((city) => (
                      <th key={city.id} className="text-center p-4 font-semibold">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-2xl">{city.emoji}</span>
                          <span>{city.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_METRICS.map((metric, idx) => {
                    const bestIdx = getBestIndex(metric, selectedCities)
                    return (
                      <tr key={metric.key} className={idx % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                        <td className="p-4 text-sm font-medium text-muted-foreground">{metric.label}</td>
                        {selectedCities.map((city, cityIdx) => {
                          const value = getCityMetric(city, metric.key)
                          const isBest = cityIdx === bestIdx
                          return (
                            <td
                              key={city.id}
                              className={`p-4 text-center font-semibold ${isBest ? 'text-[var(--color-nomad-600)] bg-[var(--color-nomad-50)] dark:bg-[var(--color-nomad-900)]/20' : ''}`}
                            >
                              {isBest && <span className="mr-1">✓</span>}
                              {metric.format(value)}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                  {/* Seoul access */}
                  <tr className="bg-background">
                    <td className="p-4 text-sm font-medium text-muted-foreground">서울 접근성</td>
                    {selectedCities.map((city) => (
                      <td key={city.id} className="p-4 text-center text-sm">{city.seoulAccess}</td>
                    ))}
                  </tr>
                  {/* Tags */}
                  <tr className="bg-muted/20">
                    <td className="p-4 text-sm font-medium text-muted-foreground">특징</td>
                    {selectedCities.map((city) => (
                      <td key={city.id} className="p-4">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {city.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">#{tag}</Badge>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground border rounded-2xl">
            도시를 2개 이상 선택하면 비교 테이블이 표시됩니다
          </div>
        )}

        <div className="text-center mt-6">
          <Button variant="outline" size="sm">
            전체 비교표 보기 →
          </Button>
        </div>
      </div>
    </section>
  )
}
