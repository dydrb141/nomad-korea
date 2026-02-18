import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const FOOTER_LINKS = {
  서비스: [
    { label: '도시 탐색', href: '#' },
    { label: '도시 비교', href: '#' },
    { label: '워케이션 프로그램', href: '#' },
    { label: '커뮤니티 리뷰', href: '#' },
  ],
  정보: [
    { label: '서비스 소개', href: '#' },
    { label: '이용약관', href: '#' },
    { label: '개인정보처리방침', href: '#' },
    { label: '문의하기', href: '#' },
  ],
}

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: '📷' },
  { label: 'YouTube', href: '#', icon: '▶️' },
  { label: 'Kakao', href: '#', icon: '💬' },
  { label: 'Newsletter', href: '#', icon: '📧' },
]

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <span>🗺️</span>
              <span>
                <span className="text-[var(--color-nomad-500)]">Nomad</span>
                <span>Korea</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              한국 디지털 노마드를 위한 도시 정보 허브. 당신에게 맞는 완벽한 워케이션 도시를
              찾아드립니다.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xl hover:scale-110 transition-transform"
                  title={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 NomadKorea. All rights reserved.</p>
          <p>🇰🇷 Made with ❤️ for Korean Digital Nomads</p>
        </div>
      </div>
    </footer>
  )
}
