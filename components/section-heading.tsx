import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

/**
 * Shared header for every content section: eyebrow, title, optional line of
 * supporting copy. Keeping it in one place is what makes the sections feel
 * like parts of the same page.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-xl text-center', className)}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
