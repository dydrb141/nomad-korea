'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { CityRank } from '@/types/city'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Props {
  cityRank: CityRank
}

export default function CityRankCard({ cityRank }: Props) {
  const { rank, city, rankBadge } = cityRank

  // 좋아요/싫어요 상태 관리
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likesCount, setLikesCount] = useState(city.likes)
  const [dislikesCount, setDislikesCount] = useState(city.dislikes)

  const rankBg = rank === 1 ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20' :
                  rank === 2 ? 'border-gray-400 bg-gray-50 dark:bg-gray-950/20' :
                               'border-orange-400 bg-orange-50 dark:bg-orange-950/20'

  const handleLike = () => {
    if (liked) {
      // 이미 좋아요 상태면 취소
      setLiked(false)
      setLikesCount(prev => prev - 1)
    } else {
      // 싫어요 상태였으면 먼저 취소
      if (disliked) {
        setDisliked(false)
        setDislikesCount(prev => prev - 1)
      }
      // 좋아요 활성화
      setLiked(true)
      setLikesCount(prev => prev + 1)
    }
  }

  const handleDislike = () => {
    if (disliked) {
      // 이미 싫어요 상태면 취소
      setDisliked(false)
      setDislikesCount(prev => prev - 1)
    } else {
      // 좋아요 상태였으면 먼저 취소
      if (liked) {
        setLiked(false)
        setLikesCount(prev => prev - 1)
      }
      // 싫어요 활성화
      setDisliked(true)
      setDislikesCount(prev => prev + 1)
    }
  }

  return (
    <Card className={`border-2 ${rankBg} hover:shadow-lg transition-shadow`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{rankBadge}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{city.emoji}</span>
                <h3 className="text-xl font-bold">{city.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{city.region}</p>
            </div>
          </div>

          {/* 좋아요/싫어요 버튼 */}
          <div className="flex gap-2">
            <button
              onClick={handleLike}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              <ThumbsUp
                className={`h-5 w-5 ${liked ? 'fill-green-500 text-green-500' : 'text-gray-400'}`}
              />
              <span className={`text-sm font-semibold ${liked ? 'text-green-500' : 'text-muted-foreground'}`}>
                {likesCount}
              </span>
            </button>
            <button
              onClick={handleDislike}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              <ThumbsDown
                className={`h-5 w-5 ${disliked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
              />
              <span className={`text-sm font-semibold ${disliked ? 'text-red-500' : 'text-muted-foreground'}`}>
                {dislikesCount}
              </span>
            </button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Key stats */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-background rounded-lg p-2 border">
            <div className="text-muted-foreground text-xs">인터넷 속도</div>
            <div className="font-semibold">{city.internetSpeed} Mbps</div>
          </div>
          <div className="bg-background rounded-lg p-2 border">
            <div className="text-muted-foreground text-xs">월 생활비</div>
            <div className="font-semibold">{city.monthlyCost.min}~{city.monthlyCost.max}만원</div>
          </div>
          <div className="bg-background rounded-lg p-2 border">
            <div className="text-muted-foreground text-xs">코워킹스페이스</div>
            <div className="font-semibold">{city.coworkingCount}개</div>
          </div>
          <div className="bg-background rounded-lg p-2 border">
            <div className="text-muted-foreground text-xs">서울 접근성</div>
            <div className="font-semibold text-xs">{city.seoulAccess}</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {city.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
