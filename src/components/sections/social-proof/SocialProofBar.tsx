const STATS = [
  { value: '15+', label: '분석 도시', icon: '📍' },
  { value: '2,847', label: '노마드 리뷰', icon: '⭐' },
  { value: '120+', label: '코워킹스페이스', icon: '🏢' },
  { value: '32개', label: '워케이션 프로그램', icon: '🏖️' },
]

export default function SocialProofBar() {
  return (
    <section className="border-b bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-2xl">{stat.icon}</div>
              <div className="text-3xl font-bold text-[var(--color-nomad-600)]">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
