import Link from 'next/link'

export default function GNBLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
      <span>🗺️</span>
      <span>
        <span className="text-[var(--color-nomad-500)]">Nomad</span>
        <span className="text-foreground">Korea</span>
      </span>
    </Link>
  )
}
