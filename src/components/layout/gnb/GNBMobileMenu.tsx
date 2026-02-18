'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'

const MENU_ITEMS = [
  { label: '도시 탐색', href: '#cities' },
  { label: '도시 비교', href: '#compare' },
  { label: '계절별 추천', href: '#seasonal' },
  { label: '워케이션 프로그램', href: '#programs' },
  { label: '리뷰', href: '#reviews' },
]

export default function GNBMobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left">
            <span className="text-[var(--color-nomad-500)]">Nomad</span>Korea
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-6">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-sm text-foreground hover:bg-accent rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t my-3" />
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="#login" onClick={() => setOpen(false)}>
              로그인
            </Link>
          </Button>
          <Button className="rounded-full mt-1" asChild>
            <Link href="#signup" onClick={() => setOpen(false)}>
              시작하기
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
