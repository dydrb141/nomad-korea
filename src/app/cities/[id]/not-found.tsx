import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-8xl">🗺️</span>
        </div>

        <h1 className="text-4xl font-bold mb-4">도시를 찾을 수 없습니다</h1>

        <p className="text-muted-foreground mb-8">
          요청하신 도시 정보를 찾을 수 없습니다.<br />
          도시 목록에서 다른 도시를 찾아보세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-nomad-600)] text-white rounded-lg hover:bg-[var(--color-nomad-700)] transition-colors font-medium"
          >
            <Home className="h-4 w-4" />
            홈으로 돌아가기
          </Link>

          <Link
            href="/#cities"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium"
          >
            <Search className="h-4 w-4" />
            도시 목록 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
