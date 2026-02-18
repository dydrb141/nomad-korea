import { CityRank } from '@/types/city'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

interface Props {
  cityRank: CityRank
}

export default function CityRankCard({ cityRank }: Props) {
  const { rank, city, rankBadge } = cityRank
  const progressValue = (city.score / 5) * 100

  const rankBg = rank === 1 ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20' :
                  rank === 2 ? 'border-gray-400 bg-gray-50 dark:bg-gray-950/20' :
                               'border-orange-400 bg-orange-50 dark:bg-orange-950/20'

  return (
    <Card className={`border-2 ${rankBg} hover:shadow-lg transition-shadow`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{rankBadge}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{city.emoji}</span>
                <h3 className="text-xl font-bold">{city.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{city.region}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[var(--color-nomad-600)]">{city.score}</div>
            <div className="text-xs text-muted-foreground">종합점수</div>
          </div>
        </div>

        {/* Score progress */}
        <div className="space-y-1 mt-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>종합 점수</span>
            <span>{city.score} / 5.0</span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Key stats */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-background rounded-lg p-2 border">
            <div className="text-muted-foreground text-xs">인터넷 속도</div>
            <div className="font-semibold">{city.internetSpeed} Mbps</div>
          </div>
          <div className="bg-background rounded-lg p-2 border">
            <div className="text-muted-foreground text-xs">월 생활비</div>
            <div className="font-semibold">{city.monthlyCost.min}~{city.monthlyCost.max}만원</div>
          </div>
          <div className="bg-background rounded-lg p-2 border">
            <div className="text-muted-foreground text-xs">코워킹스페이스</div>
            <div className="font-semibold">{city.coworkingCount}개</div>
          </div>
          <div className="bg-background rounded-lg p-2 border">
            <div className="text-muted-foreground text-xs">서울 접근성</div>
            <div className="font-semibold text-xs">{city.seoulAccess}</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {city.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
