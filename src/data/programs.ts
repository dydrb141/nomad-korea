import { WokationProgram } from '@/types/program'

export const PROGRAMS: WokationProgram[] = [
  {
    id: 'p1',
    region: '제주특별자치도',
    cityName: '제주',
    emoji: '🏝️',
    benefitSummary: '숙박 50% 지원 + 코워킹 무료 이용 3개월',
    recruitPeriod: '2025.03.01 ~ 2025.03.31',
    isRecruiting: false,
    target: '6개월 이상 원격근무 가능한 직장인/프리랜서',
    applyUrl: '#',
  },
  {
    id: 'p2',
    region: '강원특별자치도',
    cityName: '강릉',
    emoji: '🌲',
    benefitSummary: '월세 30만원 지원 + 카페 크레딧 10만원',
    recruitPeriod: '2025.02.15 ~ 2025.03.15',
    isRecruiting: true,
    target: '만 19~45세 IT/크리에이티브 직종 종사자',
    applyUrl: '#',
  },
  {
    id: 'p3',
    region: '전북특별자치도',
    cityName: '전주',
    emoji: '🏯',
    benefitSummary: '한옥 숙박 무료 제공 2개월 + 문화활동 지원금',
    recruitPeriod: '2025.04.01 ~ 2025.04.30',
    isRecruiting: false,
    target: '디지털 노마드 라이프스타일 희망자 (무관)',
    applyUrl: '#',
  },
]
