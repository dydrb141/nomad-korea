import { Review } from '@/types/review'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface Props {
  review: Review
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'text-yellow-400' : 'text-gray-200'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function ReviewCard({ review }: Props) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-[var(--color-nomad-100)] text-[var(--color-nomad-700)] font-semibold">
                {review.authorNickname.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">{review.authorNickname}</p>
              <p className="text-xs text-muted-foreground">{review.stayDuration}</p>
            </div>
          </div>
          <Badge variant="outline" className="text-xs shrink-0">
            {review.cityEmoji} {review.cityName}
          </Badge>
        </div>
        <StarRating rating={review.rating} />
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-relaxed line-clamp-3 text-muted-foreground">
          {review.content}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{review.createdAt}</span>
          <button className="flex items-center gap-1 hover:text-[var(--color-nomad-600)] transition-colors">
            <span>👍</span>
            <span>도움됨 {review.helpfulCount}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
