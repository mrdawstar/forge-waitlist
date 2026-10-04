import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Support — Forge',
  description:
    'Need help with Forge? Write to the person who made it. Technical problems, activities, progress, privacy and feedback.',
  alternates: { canonical: '/support' },
}

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Need help with Forge?"
      intro="Forge is made by one person, and that is who answers. Write in whatever language you are comfortable with."
    >
      <a
        href={`mailto:${site.supportEmail}?subject=Forge%20support`}
        className="glass spotlight group !mt-0 flex items-center gap-5 rounded-[1.5rem] p-6 no-underline transition-colors duration-500 hover:border-white/20 sm:p-7"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-white/[0.06] ring-1 ring-white/10 transition-all duration-500 group-hover:bg-primary/15 group-hover:ring-primary/30">
          <Mail className="h-5 w-5 text-primary" strokeWidth={1.75} />
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
            Email
          </span>
          <span className="mt-1.5 block break-all text-[0.9375rem] font-semibold tracking-tight text-foreground sm:text-base">
            {site.supportEmail}
          </span>
        </span>
      </a>

      <h2>What to write about</h2>
      <ul>
        <li>
          <strong>Something is broken.</strong> A crash, a screen that will not
          load, something that counted wrong, or anything that behaves in a way
          you did not expect.
        </li>
        <li>
          <strong>Your practice and progress.</strong> Activities, challenges,
          streaks, blades, reviews, or understanding your record.
        </li>
        <li>
          <strong>Privacy and data.</strong> Local storage, anonymous analytics,
          or a question about deleting data.
        </li>
        <li>
          <strong>Feedback and requests.</strong> What is missing, what is
          annoying, what you wish it did instead. This genuinely shapes what
          gets built.
        </li>
        <li>
          <strong>Anything else about Forge.</strong> Questions about how a part
          of it works, or about privacy, are welcome.
        </li>
      </ul>
      <p>
        Including your device model and iOS version, and what you were doing
        just before the problem, usually turns two exchanges into one.
      </p>

      <h2>Quick answers</h2>

      <h3>Do I need an account?</h3>
      <p>
        No. Forge has no accounts or cloud sync. Your practice is stored on your
        iPhone.
      </p>
      <h3>How do I turn off analytics?</h3>
      <p>
        Open <strong>Settings → Privacy → Share anonymous usage</strong> in
        Forge and turn it off. Your app and local progress keep working.
      </p>
      <h3>How do I delete my data?</h3>
      <p>
        Deleting the app removes its local data. Device backups are managed
        through your Apple settings. See the{' '}
        <a href="/privacy">Privacy Policy</a> for how exported backups, AI
        identifiers and anonymous analytics are handled separately.
      </p>

      <h3>Why is Forge asking for Apple Health?</h3>
      <p>
        Only so activities your phone already measures — steps, workouts, sleep
        and mindful minutes — can tick themselves off. Access is read-only,
        nothing is ever written back, and the readings are never stored or
        transmitted. Declining it leaves the rest of the app working normally.
      </p>

      <h3>Does Forge cost anything?</h3>
      <p>
        Check the{' '}
        <a href="https://apps.apple.com/app/id6797894749">App Store listing</a>{' '}
        for current pricing and any purchase details.
      </p>

      <h3>What happens to my data?</h3>
      <p>
        The <a href="/privacy">Privacy Policy</a> sets out exactly what is
        stored and what is never touched.
      </p>

      <h2>Response time</h2>
      <p>
        One person reads every message. Expect a reply within a few days —
        sooner when it is something broken.
      </p>
    </LegalPage>
  )
}
