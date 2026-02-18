import GNBLogo from './GNBLogo'
import GNBDesktopMenu from './GNBDesktopMenu'
import GNBActions from './GNBActions'
import GNBMobileMenu from './GNBMobileMenu'

export default function GNB() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 flex h-16 items-center justify-between gap-4">
        <GNBLogo />
        <GNBDesktopMenu />
        <GNBActions />
        <GNBMobileMenu />
      </div>
    </header>
  )
}
