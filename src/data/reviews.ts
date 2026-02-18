import { Review } from '@/types/review'

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    cityId: 'jeju',
    cityName: '제주시',
    cityEmoji: '🏝️',
    rating: 5,
    stayDuration: '3개월 체류',
    content:
      '제주에서 3개월 원격근무를 했는데 정말 천국 같았어요. 카페마다 인터넷이 빠르고, 아침마다 바다 보며 일할 수 있다는 게 서울에선 상상도 못 했던 일이에요. 코워킹스페이스도 제주스러운 감성으로 꾸며져 있어서 집중도 잘 되고 커뮤니티도 활발했습니다.',
    authorNickname: '바다곰',
    helpfulCount: 142,
    createdAt: '2024-11-15',
  },
  {
    id: 'r2',
    cityId: 'busan',
    cityName: '부산',
    cityEmoji: '🌊',
    rating: 4,
    stayDuration: '6주 체류',
    content:
      '광안리 바다 앞 카페에서 일하는 건 정말 꿈같았어요. 인터넷 속도도 서울보다 빠른 곳이 많고, 생활비도 훨씬 저렴해서 만족스러웠습니다. 다만 여름엔 관광객이 너무 많아 조용한 작업 공간 찾기가 좀 어려웠어요.',
    authorNickname: '갈매기개발자',
    helpfulCount: 98,
    createdAt: '2024-10-22',
  },
  {
    id: 'r3',
    cityId: 'gangneung',
    cityName: '강릉',
    cityEmoji: '🌲',
    rating: 4,
    stayDuration: '한 달 체류',
    content:
      '강릉 커피 문화가 이렇게 발달했을 줄은 몰랐어요. 카페마다 개성이 넘치고 작업하기 좋은 분위기. KTX로 서울 출퇴근도 가능해서 미팅 있을 때 하루 왕복하고 왔어요. 비용 대비 삶의 질이 정말 높아요.',
    authorNickname: '아메리카노노마드',
    helpfulCount: 76,
    createdAt: '2024-09-08',
  },
  {
    id: 'r4',
    cityId: 'jeonju',
    cityName: '전주',
    cityEmoji: '🏯',
    rating: 5,
    stayDuration: '2개월 체류',
    content:
      '한옥마을 근처 카페에서 일하는 경험은 독특하고 특별해요. 물가가 정말 저렴해서 같은 돈으로 서울보다 훨씬 넓고 좋은 숙소를 구했어요. 한식 맛집이 넘쳐나서 밥 걱정 없고, 주민들도 정말 친절했습니다.',
    authorNickname: '한옥디자이너',
    helpfulCount: 115,
    createdAt: '2024-12-01',
  },
]
