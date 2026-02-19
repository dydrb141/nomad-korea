import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signup } from '@/app/actions/auth'

const BENEFITS = [
  { icon: '🏙️', text: '15개 도시 상세 데이터 무료 열람' },
  { icon: '📊', text: '맞춤형 도시 비교 & 추천' },
  { icon: '🔔', text: '워케이션 프로그램 우선 알림' },
  { icon: '💬', text: '노마드 커뮤니티 참여' },
]

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-muted/30">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left: Benefits */}
          <div className="hidden md:block space-y-6 pr-4">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-4">
                <span>🗺️</span>
                <span>
                  <span className="text-[var(--color-nomad-500)]">Nomad</span>
                  <span className="text-foreground">Korea</span>
                </span>
              </Link>
              <h2 className="text-3xl font-bold text-foreground mt-4 leading-snug">
                한국 최고의 노마드 커뮤니티에 합류하세요
              </h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                2,800명 이상의 디지털 노마드가 선택한 도시 정보 허브. 무료로 시작하고 언제든 탈퇴할 수 있어요.
              </p>
            </div>
            <div className="space-y-3">
              {BENEFITS.map((b) => (
                <div key={b.text} className="flex items-center gap-3 text-sm">
                  <span className="text-xl">{b.icon}</span>
                  <span className="text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['🧑‍💻', '👩‍💼', '🧑‍🎨', '👨‍🔬'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[var(--color-nomad-100)] border-2 border-white flex items-center justify-center text-sm"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">2,800+</span> 노마드가 이미 함께하고 있어요
                </p>
              </div>
            </div>
          </div>

          {/* Right: Card */}
          <div className="bg-card border rounded-2xl shadow-sm p-8 space-y-6">
            {/* Mobile logo */}
            <div className="md:hidden text-center">
              <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl">
                <span>🗺️</span>
                <span>
                  <span className="text-[var(--color-nomad-500)]">Nomad</span>
                  <span className="text-foreground">Korea</span>
                </span>
              </Link>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-foreground">무료로 시작하기</h1>
              <p className="text-sm text-muted-foreground">신용카드 없이 즉시 이용 가능해요</p>
            </div>

            {/* Form */}
            <form action={signup} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="email">
                  이메일
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hello@nomadkorea.com"
                  className="h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="password">
                  비밀번호
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="8자 이상 입력해주세요"
                  className="h-11"
                  required
                />
              </div>

              <p className="text-xs text-muted-foreground">
                가입 시{' '}
                <Link href="#" className="underline underline-offset-2 hover:text-foreground">
                  이용약관
                </Link>
                {' '}및{' '}
                <Link href="#" className="underline underline-offset-2 hover:text-foreground">
                  개인정보처리방침
                </Link>
                에 동의하게 됩니다.
              </p>

              <Button
                type="submit"
                className="w-full h-11 text-sm font-semibold rounded-full"
              >
                무료로 시작하기 🚀
              </Button>
            </form>

            {/* Login link */}
            <p className="text-center text-sm text-muted-foreground">
              이미 계정이 있으신가요?{' '}
              <Link
                href="/login"
                className="font-semibold text-[var(--color-nomad-600)] hover:text-[var(--color-nomad-700)] transition-colors"
              >
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
