'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const POPULAR_TAGS = ['제주도', '부산', '바다뷰', '코워킹', '저렴한 월세', '빠른 인터넷', '카페 많음', 'KTX 접근']

export default function HeroSearch() {
  const [query, setQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Search bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="도시 이름이나 조건을 검색하세요..."
            className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/40 text-base"
          />
        </div>
        <Button size="lg" className="h-12 px-6 bg-white text-[var(--color-nomad-700)] hover:bg-white/90 font-semibold">
          검색
        </Button>
      </div>

      {/* Popular tags */}
      <div className="flex flex-wrap gap-2">
        <span className="text-white/70 text-sm self-center">인기 태그:</span>
        {POPULAR_TAGS.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? 'default' : 'outline'}
            className={
              selectedTags.includes(tag)
                ? 'cursor-pointer bg-white text-[var(--color-nomad-700)] hover:bg-white/90'
                : 'cursor-pointer border-white/40 text-white hover:bg-white/10'
            }
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}
