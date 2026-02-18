import { Season } from '@/types/city'

export interface SeasonalCity {
  id: string
  name: string
  emoji: string
  region: string
  reason: string
  highlight: string
  score: number
  tags: string[]
}

export interface SeasonalData {
  season: Season
  title: string
  description: string
  emoji: string
  cities: SeasonalCity[]
}

export const SEASONAL_DATA: Record<Season, SeasonalData> = {
  spring: {
    season: 'spring',
    title: '봄 추천 도시',
    description: '벚꽃과 새싹이 피어나는 계절, 야외 작업하기 최고의 시기',
    emoji: '🌸',
    cities: [
      {
        id: 'jeonju',
        name: '전주',
        emoji: '🏯',
        region: '전북',
        reason: '벚꽃 명소 + 야외 카페 최적',
        highlight: '벚꽃 시즌 특별 이벤트',
        score: 4.5,
        tags: ['벚꽃', '한옥', '봄소풍'],
      },
      {
        id: 'gyeongju',
        name: '경주',
        emoji: '🏛️',
        region: '경북',
        reason: '역사 명소 + 봄 축제 풍성',
        highlight: '벚꽃 드라이브 코스',
        score: 4.2,
        tags: ['역사', '벚꽃', '야간조명'],
      },
      {
        id: 'jeju',
        name: '제주',
        emoji: '🏝️',
        region: '제주',
        reason: '유채꽃밭 + 완벽한 날씨',
        highlight: '유채꽃 & 벚꽃 동시 개화',
        score: 4.8,
        tags: ['유채꽃', '벚꽃', '올레길'],
      },
    ],
  },
  summer: {
    season: 'summer',
    title: '여름 추천 도시',
    description: '해변과 계곡에서 더위를 날리며 일하는 여름 노마드',
    emoji: '☀️',
    cities: [
      {
        id: 'gangneung',
        name: '강릉',
        emoji: '🌲',
        region: '강원',
        reason: '바다 + 서퍼 커뮤니티',
        highlight: '경포대 해변 카페',
        score: 4.4,
        tags: ['서핑', '해수욕', '커피'],
      },
      {
        id: 'busan',
        name: '부산',
        emoji: '🌊',
        region: '부산',
        reason: '해운대 + 광안리 야경',
        highlight: '해변 코워킹스페이스',
        score: 4.1,
        tags: ['해운대', '축제', '바다'],
      },
      {
        id: 'tongyeong',
        name: '통영',
        emoji: '⛵',
        region: '경남',
        reason: '섬 투어 + 해산물 천국',
        highlight: '케이블카에서 일하기',
        score: 3.9,
        tags: ['섬', '해산물', '케이블카'],
      },
    ],
  },
  autumn: {
    season: 'autumn',
    title: '가을 추천 도시',
    description: '단풍과 선선한 바람, 집중하기 최적의 계절',
    emoji: '🍂',
    cities: [
      {
        id: 'suncheon',
        name: '순천',
        emoji: '🌿',
        region: '전남',
        reason: '순천만 갈대밭 + 단풍',
        highlight: '생태공원 산책로',
        score: 4.0,
        tags: ['갈대', '단풍', '자연'],
      },
      {
        id: 'andong',
        name: '안동',
        emoji: '🪆',
        region: '경북',
        reason: '하회마을 단풍 절경',
        highlight: '탈춤 축제 시즌',
        score: 3.8,
        tags: ['하회마을', '단풍', '전통'],
      },
      {
        id: 'jeju',
        name: '제주',
        emoji: '🏝️',
        region: '제주',
        reason: '단풍 + 성게 제철 시즌',
        highlight: '한라산 단풍 트레킹',
        score: 4.7,
        tags: ['단풍', '성게', '한라산'],
      },
    ],
  },
  winter: {
    season: 'winter',
    title: '겨울 추천 도시',
    description: '따뜻한 카페에서 집중 업무, 눈 내리는 풍경 속 노마드',
    emoji: '❄️',
    cities: [
      {
        id: 'pyeongchang',
        name: '평창',
        emoji: '⛷️',
        region: '강원',
        reason: '스키 + 눈꽃 풍경',
        highlight: '스키장 인근 코워킹',
        score: 3.7,
        tags: ['스키', '눈꽃', '펜션'],
      },
      {
        id: 'jeju',
        name: '제주',
        emoji: '🏝️',
        region: '제주',
        reason: '한국에서 가장 따뜻한 겨울',
        highlight: '동백꽃 시즌',
        score: 4.5,
        tags: ['동백꽃', '따뜻함', '겨울바다'],
      },
      {
        id: 'busan',
        name: '부산',
        emoji: '🌊',
        region: '부산',
        reason: '겨울 대구탕 + 온천',
        highlight: '동래 온천 힐링',
        score: 4.0,
        tags: ['온천', '대구탕', '겨울바다'],
      },
    ],
  },
}

export function getCurrentSeason(): Season {
  const month = new Date().getMonth() + 1
  if (month >= 3 && month <= 5) return 'spring'
  if (month >= 6 && month <= 8) return 'summer'
  if (month >= 9 && month <= 11) return 'autumn'
  return 'winter'
}
