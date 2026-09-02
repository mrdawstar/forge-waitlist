import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Support — Forge',
  description:
    'Need help with Forge? Write to the person who made it. Technical problems, sign-in, sync, feedback and questions.',
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
          <strong>Sign-in trouble.</strong> Signing in with Apple or Google is
          not working, or you cannot get back into your account.
        </li>
        <li>
          <strong>Sync trouble.</strong> Your practice is not appearing on
          another device, or two devices disagree about what you did.
        </li>
        <li>
          <strong>Deleting your account or your data.</strong> If you cannot
          reach the in-app option, ask here and it will be done for you.
        </li>
        <li>
          <strong>Feedback and requests.</strong> What is missing, what is
          annoying, what you wish it did instead. This genuinely shapes what gets
          built.
        </li>
        <li>
          <strong>Anything else about Forge.</strong> Questions about how a part
          of it works, or about privacy, are welcome.
        </li>
      </ul>
      <p>
        Including your device model and iOS version, and what you were doing just
        before the problem, usually turns two exchanges into one.
      </p>

      <h2>Quick answers</h2>

      <h3>Do I need an account?</h3>
      <p>
        No. Forge works fully without one, and signed out it makes no network
        requests at all. Signing in is optional and exists only to back up and
        sync your practice across devices.
      </p>

      <h3>How do I delete my account?</h3>
      <p>
        In the app: <strong>Settings → Account → Delete Account</strong>. That
        removes your account and the data stored against it. Data held only on
        your device is removed by deleting the app.
      </p>

      <h3>Why is Forge asking for Apple Health?</h3>
      <p>
        Only so activities your phone already measures — steps, distance,
        workouts — can tick themselves off. Access is read-only, nothing is ever
        written back, and the readings are never stored or transmitted. Declining
        it leaves the rest of the app working normally.
      </p>

      <h3>Does Forge cost anything?</h3>
      <p>
        No. There is no subscription and nothing is locked. See the{' '}
        <a href="/terms">Terms of Use</a>.
      </p>

      <h3>What happens to my data?</h3>
      <p>
        The <a href="/privacy">Privacy Policy</a> sets out exactly what is stored
        and what is never touched.
      </p>

      <h2>Response time</h2>
      <p>
        One person reads every message. Expect a reply within a few days —
        sooner when it is something broken.
      </p>
    </LegalPage>
  )
}
