import { WokationProgram } from '@/types/program'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Props {
  program: WokationProgram
}

export default function ProgramCard({ program }: Props) {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{program.emoji}</span>
            <div>
              <h3 className="font-bold text-lg">{program.cityName} 워케이션</h3>
              <p className="text-sm text-muted-foreground">{program.region}</p>
            </div>
          </div>
          <Badge
            variant={program.isRecruiting ? 'default' : 'secondary'}
            className={program.isRecruiting ? 'bg-green-500 hover:bg-green-600' : ''}
          >
            {program.isRecruiting ? '✅ 모집중' : '모집예정'}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        {/* Benefit */}
        <div className="bg-[var(--color-nomad-50)] dark:bg-[var(--color-nomad-900)]/20 rounded-lg p-3">
          <div className="text-xs text-[var(--color-nomad-600)] font-semibold mb-1">🎁 혜택</div>
          <p className="text-sm font-medium">{program.benefitSummary}</p>
        </div>

        {/* Info */}
        <div className="space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="text-muted-foreground shrink-0">📅 모집기간</span>
            <span className="font-medium">{program.recruitPeriod}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground shrink-0">👤 대상</span>
            <span>{program.target}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button
          className="w-full"
          variant={program.isRecruiting ? 'default' : 'outline'}
          disabled={!program.isRecruiting}
          asChild={program.isRecruiting}
        >
          {program.isRecruiting ? (
            <a href={program.applyUrl} target="_blank" rel="noopener noreferrer">
              지금 신청하기 →
            </a>
          ) : (
            <span>오픈 예정</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
