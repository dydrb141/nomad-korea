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
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/login" onClick={() => setOpen(false)}>
              로그인
            </Link>
          </Button>
          <Button className="rounded-full mt-1" asChild>
            <Link href="/register" onClick={() => setOpen(false)}>
              시작하기
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
