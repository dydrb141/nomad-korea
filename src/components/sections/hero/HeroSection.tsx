import HeroSearch from './HeroSearch'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[600px] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-nomad-900) 0%, var(--color-nomad-700) 50%, var(--color-nomad-500) 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🗺️</div>
        <div className="absolute top-20 right-20 text-6xl">🏝️</div>
        <div className="absolute bottom-20 left-20 text-5xl">🌊</div>
        <div className="absolute bottom-10 right-10 text-7xl">🏔️</div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90">
          <span>✨</span>
          <span>한국 디지털 노마드를 위한 도시 정보 허브</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          어디서 일할지
          <br />
          <span className="text-[var(--color-nomad-200)]">고민될 때</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          인터넷 속도, 생활비, 코워킹스페이스까지
          <br className="hidden md:block" />
          한국 최고의 디지털 노마드 도시를 한눈에 비교하세요
        </p>

        {/* Search */}
        <HeroSearch />

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm pt-2">
          <span>📍 15개 도시 분석</span>
          <span>👥 2,800+ 노마드 리뷰</span>
          <span>🏢 120+ 코워킹스페이스</span>
        </div>
      </div>
    </section>
  )
}
