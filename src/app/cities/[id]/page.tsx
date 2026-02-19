import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ThumbsUp, ThumbsDown, Wifi, Wallet, Building2, Train } from 'lucide-react'
import { CITIES } from '@/data/cities'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const city = CITIES.find((c) => c.id === id)

  if (!city) {
    return {
      title: '도시를 찾을 수 없습니다 - Nomad Korea'
    }
  }

  return {
    title: `${city.name} - Nomad Korea`,
    description: `${city.name} 워케이션 상세 정보 - ${city.tags.join(', ')}. ${city.region} 지역의 디지털 노마드를 위한 완벽한 장소.`,
  }
}

export default async function CityDetailPage({ params }: Props) {
  const { id } = await params
  const city = CITIES.find((c) => c.id === id)

  if (!city) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          목록으로 돌아가기
        </Link>

        {/* 헤더 섹션 */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl">{city.emoji}</span>
              <div>
                <h1 className="text-4xl font-bold mb-2">{city.name}</h1>
                <p className="text-lg text-muted-foreground">{city.region}</p>
              </div>
            </div>

            {/* 좋아요/싫어요 통계 */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1 px-4 py-2 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <ThumbsUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  {city.likes}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 px-4 py-2 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <ThumbsDown className="h-5 w-5 text-red-600 dark:text-red-400" />
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                  {city.dislikes}
                </span>
              </div>
            </div>
          </div>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {city.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* 주요 통계 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Wifi className="h-5 w-5 text-[var(--color-nomad-600)]" />
                인터넷 속도
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{city.internetSpeed} Mbps</p>
              <p className="text-sm text-muted-foreground mt-1">
                {city.internetSpeed >= 800 ? '초고속' : city.internetSpeed >= 500 ? '고속' : '표준'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Wallet className="h-5 w-5 text-[var(--color-nomad-600)]" />
                월 생활비
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {city.monthlyCost.min}~{city.monthlyCost.max}만원
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                예산 레벨: {city.budgetLevel}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[var(--color-nomad-600)]" />
                코워킹 스페이스
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{city.coworkingCount}개</p>
              <p className="text-sm text-muted-foreground mt-1">
                {city.coworkingCount >= 20 ? '매우 많음' : city.coworkingCount >= 10 ? '많음' : '보통'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Train className="h-5 w-5 text-[var(--color-nomad-600)]" />
                서울 접근성
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{city.seoulAccess}</p>
              <p className="text-sm text-muted-foreground mt-1">
                대중교통 이용 시
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 추가 정보 */}
        <Card>
          <CardHeader>
            <CardTitle>상세 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">환경 타입</h3>
              <Badge variant="outline" className="text-sm">
                {city.environment === 'nature' && '🌳 자연'}
                {city.environment === 'urban' && '🏙️ 도심'}
                {city.environment === 'cafe' && '☕ 카페'}
                {city.environment === 'coworking' && '💼 코워킹'}
              </Badge>
            </div>

            <div>
              <h3 className="font-semibold mb-2">최적 시즌</h3>
              <div className="flex flex-wrap gap-2">
                {city.bestSeasons.map((season) => (
                  <Badge key={season} variant="secondary">
                    {season === 'spring' && '🌸 봄'}
                    {season === 'summer' && '☀️ 여름'}
                    {season === 'autumn' && '🍂 가을'}
                    {season === 'winter' && '❄️ 겨울'}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">예산 정보</h3>
              <p className="text-muted-foreground">
                월 평균 생활비 기준: <span className="font-semibold text-foreground">{city.budgetLevel}</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 하단 여백 */}
        <div className="h-8" />
      </div>
    </div>
  )
}
