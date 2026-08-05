import { ShowcaseCarousel } from '@/components/showcase-carousel'
import { SectionHeading } from '@/components/section-heading'

export function Showcase() {
  return (
    <section className="relative px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="The app"
        title="Discipline, designed beautifully."
        description="Every screen is built to make showing up feel inevitable."
      />

      {/* Full-bleed on phones so the neighbouring screens still peek in. */}
      <div className="-mx-6 mt-14 max-w-5xl sm:mx-auto">
        <ShowcaseCarousel />
      </div>
    </section>
  )
}
