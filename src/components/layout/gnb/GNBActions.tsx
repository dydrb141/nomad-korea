import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GNBActions() {
  return (
    <div className="hidden md:flex items-center gap-2">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/login">로그인</Link>
      </Button>
      <Button size="sm" className="rounded-full" asChild>
        <Link href="/register">시작하기</Link>
      </Button>
    </div>
  )
}
