import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import GNB from '@/components/layout/gnb/GNB'
import Footer from '@/components/layout/footer/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NomadKorea - 한국 디지털 노마드 도시 정보 허브',
  description:
    '인터넷 속도, 생활비, 코워킹스페이스까지 한국 최고의 디지털 노마드 도시를 한눈에 비교하세요.',
  keywords: ['디지털 노마드', '워케이션', '제주도', '부산', '원격근무', '코워킹스페이스'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GNB />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
