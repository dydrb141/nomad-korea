import { REVIEWS } from '@/data/reviews'
import ReviewCard from './ReviewCard'
import { Button } from '@/components/ui/button'

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm text-[var(--color-nomad-600)] font-medium mb-2">
            <span>💬</span>
            <span>실제 노마드 후기</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">생생한 현지 경험담</h2>
          <p className="text-muted-foreground">
            직접 살아본 노마드들의 솔직한 후기를 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            리뷰 더 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
