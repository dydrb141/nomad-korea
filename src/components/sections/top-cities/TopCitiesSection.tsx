import { TOP_CITIES_THIS_MONTH } from '@/data/cities'
import CityRankCard from './CityRankCard'

export default function TopCitiesSection() {
  return (
    <section id="cities" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm text-[var(--color-nomad-600)] font-medium mb-2">
            <span>🏆</span>
            <span>이번 달 인기 도시</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            TOP 3 워케이션 도시
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            2,800여 명의 노마드 리뷰와 실측 데이터를 기반으로 선정한 이번 달 베스트 도시
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOP_CITIES_THIS_MONTH.map((cityRank) => (
            <CityRankCard key={cityRank.city.id} cityRank={cityRank} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="text-sm text-[var(--color-nomad-600)] hover:underline font-medium"
          >
            전체 도시 순위 보기 →
          </a>
        </div>
      </div>
    </section>
  )
}
