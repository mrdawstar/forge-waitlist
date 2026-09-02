import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Forge',
  description:
    'How Forge handles your data. Forge works fully without an account, and signed out it makes no network requests at all.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Forge is built to need as little of your data as possible. This page explains exactly what it stores, what it never touches, and how to remove everything."
      updated={site.legalUpdated}
    >
      <div className="callout">
        <p>The short version</p>
        <p>
          Forge works fully without an account. If you never sign in, your
          practice stays on your iPhone and the app makes no network requests at
          all. Signing in is optional and only exists so your practice can be
          backed up and synced across your devices. Forge contains no
          advertising, no tracking, no analytics, and this version performs no
          AI processing of your data.
        </p>
      </div>

      <h2>Who is responsible for your data</h2>
      <p>
        Forge is made and operated by <strong>{site.owner}</strong>, an
        individual developer based in {site.country}. There is no company behind
        it. For anything in this policy, including any request about your data,
        write to{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>

      <h2>Using Forge without an account</h2>
      <p>
        No account is required. The entire app — the day, the sword, your
        history, blades, milestones, the weekly review, widgets and planning —
        works signed out.
      </p>
      <p>
        In that state everything you create is written only to storage on your
        own device, and <strong>Forge makes no network requests whatsoever</strong>.
        Nothing is uploaded, because there is no session to upload it with. If
        you delete the app, that data goes with it.
      </p>

      <h2>If you choose to sign in</h2>
      <p>
        Signing in is entirely optional and exists for one purpose: backing up
        your practice and syncing it between your devices. You can sign in with{' '}
        <strong>Apple</strong> or <strong>Google</strong>. Forge never sees or
        stores your password for either — Apple and Google handle the sign-in
        and return a token that identifies you.
      </p>
      <p>Once signed in, the following is stored on Forge&rsquo;s server:</p>
      <ul>
        <li>
          <strong>Your email address and a user ID.</strong> Used to identify
          your account and attach your data to it. If you use Apple&rsquo;s Hide
          My Email, Forge only ever receives the relay address Apple gives it.
        </li>
        <li>
          <strong>The practice you create in Forge.</strong> Your activities and
          their schedules, the record of which days you kept and what you
          completed, blades and milestones you have reached, chapters and their
          intentions, any identity statements you have written, and your answers
          to the weekly review.
        </li>
        <li>
          <strong>Basic device information</strong> — device name, model, iOS
          version and app version — so that syncing between your devices works
          and you can tell them apart.
        </li>
        <li>
          <strong>An entitlement record.</strong> A single field reserved for
          future purchases. Nothing is sold in this version of Forge, so in
          practice it stays empty.
        </li>
      </ul>
      <p>
        Your content is private to your account. Forge has no feed, no profiles,
        no comments and no sharing between users — nothing you write is ever
        shown to another person. Access is enforced per-row on the server, so a
        request can only ever reach data belonging to the account that signed it.
      </p>

      <h2>Apple Health</h2>
      <p>
        If — and only if — you grant permission, Forge reads{' '}
        <strong>step count, walking and running distance, and workouts</strong>{' '}
        from Apple Health, so that activities your phone can already measure tick
        themselves off.
      </p>
      <p>
        This access is <strong>read-only and permanent in that respect</strong>:
        Forge never writes anything back to Health. Health readings are never
        saved to disk, never synced to the server, and never transmitted
        anywhere. They are read, used to decide whether an activity is done, and
        discarded. You can refuse or withdraw this permission at any time in
        iOS Settings, and the rest of Forge is unaffected.
      </p>

      <h2>What Forge does not do</h2>
      <ul>
        <li>
          <strong>No AI processing.</strong> This version of Forge sends nothing
          to any AI or machine-learning service. Planning suggestions are
          arithmetic performed on your device, using only your own activities and
          history. If this ever changes, this policy will be updated before the
          feature ships.
        </li>
        <li>
          <strong>No advertising.</strong> There are no ads and no advertising
          identifiers.
        </li>
        <li>
          <strong>No tracking or analytics in the app.</strong> Forge contains no
          analytics, attribution or crash-reporting services, and does not track
          you across other apps or websites.
        </li>
        <li>
          <strong>No selling or sharing.</strong> Your data is never sold,
          rented, or handed to anyone for their own purposes.
        </li>
        <li>
          <strong>No other third parties.</strong> Beyond sign-in, sync and
          Apple&rsquo;s own purchase system, the app contacts no other service.
        </li>
      </ul>

      <h2>This website</h2>
      <p>
        This site is hosted by <strong>Vercel</strong>, which processes requests
        and, as any web host does, records technical information such as IP
        address and browser type in order to serve the page and keep the service
        secure.
      </p>
      <p>
        The site uses <strong>Vercel Web Analytics</strong> to count page views.
        It is aggregate and privacy-oriented: it sets no cookies, does not use
        your IP address to build a profile of you, and does not follow you to
        other websites.
      </p>
      <p>
        If you submit your email address to be told when Forge reaches the App
        Store, that address is stored so it can be used for that one
        announcement. It is not used for anything else and is not passed to
        anyone. Ask at{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> and it
        will be removed.
      </p>

      <h3>Cookies</h3>
      <p>
        <strong>This website sets no cookies.</strong> There are no advertising
        cookies, no tracking cookies and no third-party cookie scripts, which is
        why you are not being asked to dismiss a consent banner.
      </p>

      <h2>Where your data is kept, and who processes it</h2>
      <p>
        If you sign in, your account and synced practice are stored using{' '}
        <strong>Supabase</strong>, on infrastructure located in the{' '}
        <strong>European Union (Ireland)</strong>. The waitlist email addresses
        collected by this website are stored the same way.
      </p>
      <p>The only parties involved in operating Forge are:</p>
      <ul>
        <li>
          <strong>Supabase</strong> — account, authentication and synced data
          storage.
        </li>
        <li>
          <strong>Vercel</strong> — hosting and analytics for this website.
        </li>
        <li>
          <strong>Apple and Google</strong> — only if you choose to sign in with
          them, and only for that sign-in.
        </li>
        <li>
          <strong>Apple</strong> — app distribution through the App Store, under
          Apple&rsquo;s own privacy policy.
        </li>
      </ul>

      <h2>How long it is kept</h2>
      <p>
        Your synced data is kept for as long as your account exists. It is not
        kept on a schedule or archived elsewhere — when you delete your account,
        it is deleted.
      </p>

      <h2>Deleting your data</h2>
      <div className="callout">
        <p>Deleting your account, from inside the app</p>
        <p>
          Open Forge and go to <strong>Settings → Account → Delete Account</strong>.
          This deletes your account and everything stored against it on the
          server. The deletion cascades — no orphaned rows are left behind.
        </p>
      </div>
      <p>
        Data held only on your device is removed by deleting the app. You can
        also sign out at any time, which stops syncing while leaving your local
        practice intact. If you would rather have your account deleted by hand,
        or cannot reach the app, email{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>

      <h2>Your rights</h2>
      <p>
        Because Forge is operated from {site.country}, the EU General Data
        Protection Regulation applies. You have the right to ask for a copy of
        your data, to have it corrected, to have it deleted, to receive it in a
        portable form, and to object to or restrict how it is handled. Requests
        are free and answered as quickly as one person reasonably can — write to{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>
      <p>
        Where Forge relies on a legal basis: account and sync are provided to
        perform the service you asked for; keeping the service secure and
        understanding rough website traffic rests on legitimate interests; Apple
        Health access rests on the permission you grant and can withdraw.
      </p>
      <p>
        If you believe your data has been mishandled you may complain to your
        local data protection authority. In {site.country} that is the President
        of the Personal Data Protection Office (UODO).
      </p>

      <h2>Children</h2>
      <p>
        Forge is not directed at children under {site.minimumAge}, and is not
        intended for use by them. If you believe a child has provided personal
        data, contact{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> and it
        will be deleted.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If Forge changes what it does with data, this page changes first, and the
        date at the top will say when. Significant changes — in particular any
        introduction of AI processing — will be described plainly rather than
        folded quietly into a paragraph.
      </p>

      <h2>Contact</h2>
      <p>
        {site.owner} —{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
      </p>
    </LegalPage>
  )
}
