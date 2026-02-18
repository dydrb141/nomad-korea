import { Button } from '@/components/ui/button'

const BENEFITS = [
  '✅ 15개 도시 실시간 데이터',
  '✅ 2,800+ 노마드 리뷰 열람',
  '✅ 맞춤 도시 추천 알림',
  '✅ 워케이션 프로그램 우선 알림',
  '✅ 도시별 코워킹 할인 쿠폰',
  '✅ 노마드 커뮤니티 참여',
]

export default function CTASection() {
  return (
    <section
      id="signup"
      className="py-20 px-4 text-white"
      style={{
        background: 'linear-gradient(135deg, var(--color-nomad-800) 0%, var(--color-nomad-600) 100%)',
      }}
    >
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        {/* Headline */}
        <div className="space-y-4">
          <div className="text-5xl">🚀</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            지금 시작하면 무료예요
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto">
            한국 디지털 노마드 커뮤니티에 합류하고
            <br />
            당신에게 딱 맞는 도시를 찾아보세요
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
          {BENEFITS.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-white/90 text-sm">
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="h-12 px-8 bg-white text-[var(--color-nomad-700)] hover:bg-white/90 font-semibold text-base"
          >
            <span className="mr-2">🔑</span>
            Google로 시작하기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 border-white/40 text-white hover:bg-white/10 font-semibold text-base"
          >
            <span className="mr-2">✉️</span>
            이메일로 가입하기
          </Button>
        </div>

        <p className="text-white/50 text-xs">
          가입 즉시 무료 이용 · 신용카드 불필요 · 언제든 탈퇴 가능
        </p>
      </div>
    </section>
  )
}
