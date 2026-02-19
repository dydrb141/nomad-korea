import Link from 'next/link'
import { SeasonalCity } from '@/data/seasonal'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Props {
  city: SeasonalCity
}

export default function SeasonCityCard({ city }: Props) {
  return (
    <Link href={`/cities/${city.id}`} className="block">
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{city.emoji}</span>
            <div>
              <h3 className="font-bold text-lg">{city.name}</h3>
              <p className="text-xs text-muted-foreground">{city.region}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-[var(--color-nomad-600)]">★ {city.score}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{city.reason}</p>
        <div className="bg-[var(--color-nomad-50)] dark:bg-[var(--color-nomad-900)]/20 rounded-lg p-2 text-xs font-medium text-[var(--color-nomad-700)] dark:text-[var(--color-nomad-300)]">
          ✨ {city.highlight}
        </div>
        <div className="flex flex-wrap gap-1">
          {city.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
    </Link>
  )
}
