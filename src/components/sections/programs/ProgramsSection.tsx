import { PROGRAMS } from '@/data/programs'
import ProgramCard from './ProgramCard'
import { Button } from '@/components/ui/button'

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 px-4 bg-muted/40">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm text-[var(--color-nomad-600)] font-medium mb-2">
            <span>🏖️</span>
            <span>지자체 워케이션</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">지원금 받고 워케이션 가기</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            각 지자체에서 운영하는 공식 워케이션 프로그램으로 숙박비와 코워킹 비용을 절약하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            전체 프로그램 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
