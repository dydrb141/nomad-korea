import { getCurrentSeason, SEASONAL_DATA } from '@/data/seasonal'
import type { Season } from '@/types/city'
import SeasonCityCard from './SeasonCityCard'

const SEASONS: { key: Season; label: string; emoji: string }[] = [
  { key: 'spring', label: '봄', emoji: '🌸' },
  { key: 'summer', label: '여름', emoji: '☀️' },
  { key: 'autumn', label: '가을', emoji: '🍂' },
  { key: 'winter', label: '겨울', emoji: '❄️' },
]

export default function SeasonalSection() {
  const currentSeason = getCurrentSeason()

  return (
    <section id="seasonal" className="py-16 px-4 bg-muted/40">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm text-[var(--color-nomad-600)] font-medium mb-2">
            <span>🗓️</span>
            <span>계절별 추천</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">계절마다 다른 매력</h2>
          <p className="text-muted-foreground">지금 이 계절, 가장 좋은 도시를 알려드려요</p>
        </div>

        {/* Season columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEASONS.map(({ key, label, emoji }) => {
            const data = SEASONAL_DATA[key]
            const isCurrent = key === currentSeason
            return (
              <div
                key={key}
                className={`rounded-2xl border-2 p-4 space-y-4 ${
                  isCurrent
                    ? 'border-[var(--color-nomad-500)] bg-[var(--color-nomad-50)] dark:bg-[var(--color-nomad-900)]/20'
                    : 'border-border bg-background'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{emoji}</span>
                    <h3 className="font-bold text-lg">{label}</h3>
                  </div>
                  {isCurrent && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-nomad-500)] text-white">
                      현재
                    </span>
                  )}
                </div>

                <p className="text-xs text-muted-foreground">{data.description}</p>

                <div className="space-y-3">
                  {data.cities.map((city) => (
                    <SeasonCityCard key={city.id} city={city} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
