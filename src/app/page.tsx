import HeroSection from '@/components/sections/hero/HeroSection'
import SocialProofBar from '@/components/sections/social-proof/SocialProofBar'
import TopCitiesSection from '@/components/sections/top-cities/TopCitiesSection'
import CityFilterSection from '@/components/sections/city-filter/CityFilterSection'
import CityCompareSection from '@/components/sections/city-compare/CityCompareSection'
import SeasonalSection from '@/components/sections/seasonal/SeasonalSection'
import ReviewsSection from '@/components/sections/reviews/ReviewsSection'
import ProgramsSection from '@/components/sections/programs/ProgramsSection'
import CTASection from '@/components/sections/cta/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <TopCitiesSection />
      <CityFilterSection />
      <CityCompareSection />
      <SeasonalSection />
      <ReviewsSection />
      <ProgramsSection />
      <CTASection />
    </>
  )
}
