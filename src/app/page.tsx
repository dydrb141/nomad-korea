import HeroSection from '@/components/sections/hero/HeroSection'
import SocialProofBar from '@/components/sections/social-proof/SocialProofBar'
import TopCitiesSection from '@/components/sections/top-cities/TopCitiesSection'
import CityFilterSection from '@/components/sections/city-filter/CityFilterSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <TopCitiesSection />
      <CityFilterSection />
    </>
  )
}
