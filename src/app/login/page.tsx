import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login } from '@/app/actions/auth'

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-muted/30">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-card border rounded-2xl shadow-sm p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-2">
              <span>🗺️</span>
              <span>
                <span className="text-[var(--color-nomad-500)]">Nomad</span>
                <span className="text-foreground">Korea</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">다시 만나서 반가워요!</h1>
            <p className="text-sm text-muted-foreground">
              계정에 로그인하고 맞춤 노마드 정보를 받아보세요
            </p>
          </div>

          {/* Form */}
          <form action={login} className="space-y-4">
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
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground" htmlFor="password">
                  비밀번호
                </label>
                <Link
                  href="#"
                  className="text-xs text-[var(--color-nomad-600)] hover:text-[var(--color-nomad-700)] transition-colors"
                >
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="h-11"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 text-sm font-semibold rounded-full"
            >
              로그인
            </Button>
          </form>

          {/* Register link */}
          <p className="text-center text-sm text-muted-foreground">
            아직 계정이 없으신가요?{' '}
            <Link
              href="/register"
              className="font-semibold text-[var(--color-nomad-600)] hover:text-[var(--color-nomad-700)] transition-colors"
            >
              무료로 시작하기
            </Link>
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
          <span>🔒 안전한 암호화</span>
          <span>·</span>
          <span>✉️ 스팸 없음</span>
          <span>·</span>
          <span>🎁 무료 가입</span>
        </div>
      </div>
    </div>
  )
}
