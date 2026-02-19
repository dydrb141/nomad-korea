export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* 뒤로가기 버튼 스켈레톤 */}
        <div className="h-6 w-32 bg-muted rounded animate-pulse mb-6" />

        {/* 헤더 스켈레톤 */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-muted rounded-full animate-pulse" />
              <div>
                <div className="h-10 w-48 bg-muted rounded animate-pulse mb-2" />
                <div className="h-6 w-24 bg-muted rounded animate-pulse" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-16 w-16 bg-muted rounded-lg animate-pulse" />
              <div className="h-16 w-16 bg-muted rounded-lg animate-pulse" />
            </div>
          </div>

          {/* 태그 스켈레톤 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 w-20 bg-muted rounded animate-pulse" />
            ))}
          </div>
        </div>

        {/* 통계 카드 스켈레톤 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-card border rounded-xl p-6 shadow-sm">
              <div className="h-5 w-32 bg-muted rounded animate-pulse mb-3" />
              <div className="h-8 w-40 bg-muted rounded animate-pulse mb-2" />
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* 상세 정보 카드 스켈레톤 */}
        <div className="bg-card border rounded-xl p-6 shadow-sm">
          <div className="h-6 w-32 bg-muted rounded animate-pulse mb-4" />
          <div className="space-y-4">
            <div className="h-20 bg-muted rounded animate-pulse" />
            <div className="h-20 bg-muted rounded animate-pulse" />
            <div className="h-20 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
