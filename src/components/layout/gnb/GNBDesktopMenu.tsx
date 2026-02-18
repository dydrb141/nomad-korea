import Link from 'next/link'

const MENU_ITEMS = [
  { label: '도시 탐색', href: '#cities' },
  { label: '도시 비교', href: '#compare' },
  { label: '계절별 추천', href: '#seasonal' },
  { label: '워케이션 프로그램', href: '#programs' },
  { label: '리뷰', href: '#reviews' },
]

export default function GNBDesktopMenu() {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
