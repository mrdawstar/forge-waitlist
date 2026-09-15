import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Forge',
  description:
    'How Forge handles your data. Forge has no accounts and no cloud sync: everything you create stays on your iPhone, and the app transmits no personal data.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Forge is built to need as little of your data as possible. This page explains exactly what it stores, what it never touches, and how to remove it."
      updated={site.privacyUpdated}
    >
      <div className="callout">
        <p>The short version</p>
        <p>
          Forge has no accounts and no cloud. There is no sign-in, nothing to
          register for, and no copy of your practice on any server — everything
          you create stays on your iPhone. Forge does not collect or transmit
          personal data, and contains no advertising, no tracking, no analytics
          and no AI processing.
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

      <h2>Forge has no accounts</h2>
      <p>
        <strong>
          No account is required to use Forge, and no account can be created.
        </strong>{' '}
        There is no sign-in screen, no registration, and no password. Every part
        of the app — the day, the sword, your history, blades, milestones, the
        Shape, planning and the widgets — works without one.
      </p>
      <p>
        There is likewise <strong>no cloud syncing</strong>. Forge does not copy
        your practice to a server, does not move it between your devices, and
        does not hold a backup of it anywhere. Because there is no account,
        there is also nothing to sign out of and no account to delete.
      </p>

      <h2>What Forge stores, and where</h2>
      <p>
        <strong>Everything Forge keeps is stored locally on your device.</strong>{' '}
        That is the activities and schedules you set, the record of which days
        you kept and what you completed, the blades, milestones and chapters you
        have reached, anything you have written in the app, and your settings.
      </p>
      <p>
        It is held in the app&rsquo;s own storage on the iPhone — shared only
        with Forge&rsquo;s own widgets, so they can show you the same day — and
        it stays there. It is not uploaded, not sent to any server operated by
        Forge, and not shared with anyone.
      </p>
      <p>
        <strong>
          Forge does not collect or transmit personal user data.
        </strong>{' '}
        The privacy manifest shipped inside the app declares no collected data
        types at all, because there are none to declare.
      </p>
      <p>
        One thing worth knowing: if you have iPhone backups switched on, your
        own device backup may include Forge&rsquo;s data, in the same way it
        includes other apps&rsquo;. That backup belongs to you and is governed by
        your iCloud or computer settings under Apple&rsquo;s terms — Forge has no
        access to it and no involvement in it.
      </p>

      <h2>Apple Health</h2>
      <p>
        Apple Health access is <strong>entirely optional</strong>. If — and only
        if — you grant permission, Forge reads{' '}
        <strong>step count, walking and running distance, and workouts</strong>,
        so that activities your phone can already measure tick themselves off.
      </p>
      <p>
        The access is <strong>read-only</strong>: Forge never writes anything
        back to Health.{' '}
        <strong>
          Health data is never transmitted anywhere and is never stored on any
          external server.
        </strong>{' '}
        A reading is used to decide whether an activity is complete and then
        discarded — what the app records is that the activity was done and that
        the phone was what counted it, never the underlying figure.
      </p>
      <p>
        You can refuse this permission, or withdraw it later in iOS Settings,
        and the rest of Forge is unaffected.
      </p>

      <h2>The App Store and purchases</h2>
      <p>
        Forge uses Apple&rsquo;s <strong>StoreKit</strong>, which{' '}
        <strong>
          may communicate with Apple for App Store-related functionality
        </strong>{' '}
        — for example checking or restoring purchase entitlements. That exchange
        happens between your device and Apple, and is covered by{' '}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noreferrer"
        >
          Apple&rsquo;s privacy policy
        </a>
        , not this one.
      </p>
      <p>
        Forge never sees or stores payment details. Nothing is sold in this
        version of the app, so in practice there is nothing to purchase or
        restore.
      </p>

      <h2>What Forge does not do</h2>
      <ul>
        <li>
          <strong>No accounts and no cloud.</strong> Nothing to sign in to,
          nothing synced, nothing stored on a server.
        </li>
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
          rented, or handed to anyone for their own purposes — it never leaves
          your device for anyone to be given.
        </li>
        <li>
          <strong>No third-party services in the app.</strong> Beyond
          Apple&rsquo;s own App Store system, the app contacts no other service.
        </li>
      </ul>

      <h2>Deleting your data</h2>
      <div className="callout">
        <p>Deleting the app deletes your data</p>
        <p>
          Because everything Forge stores is held on your device,{' '}
          <strong>
            deleting the app removes the locally stored app data with it
          </strong>
          . There is no server copy to ask for and no account to close.
        </p>
        <p>
          This cannot be undone, so if you want to keep your practice, make sure
          your own device backup is current before you delete.
        </p>
      </div>

      <h2>This website</h2>
      <p>
        This section covers <strong>{site.url.replace('https://', '')}</strong>,
        which is separate from the app. The app contacts no server at all; a
        website, by its nature, does.
      </p>
      <p>
        The site is hosted by <strong>Vercel</strong>, which processes requests
        and, as any web host does, records technical information such as IP
        address and browser type in order to serve the page and keep the service
        secure.
      </p>
      <p>
        It uses <strong>Vercel Web Analytics</strong> to count page views. This
        is aggregate and privacy-oriented: it sets no cookies, does not use your
        IP address to build a profile of you, and does not follow you to other
        websites.
      </p>
      <p>
        If you submit your email address on this site to be told when Forge
        reaches the App Store, that address is stored so it can be used for that
        one announcement. It is not used for anything else, is not passed to
        anyone, and has no connection to the app — the app has no accounts and
        never sees it. Ask at{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> and it
        will be removed.
      </p>

      <h3>Cookies</h3>
      <p>
        <strong>This website sets no cookies.</strong> There are no advertising
        cookies, no tracking cookies and no third-party cookie scripts, which is
        why you are not being asked to dismiss a consent banner.
      </p>

      <h2>Who processes data</h2>
      <p>
        <strong>For the app: nobody.</strong> It sends nothing to anyone, so
        there is no processor to name. For this website and its distribution:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — hosting and analytics for this website.
        </li>
        <li>
          <strong>Supabase</strong> — storage for the launch-notification email
          addresses submitted on this website, on infrastructure located in the{' '}
          <strong>European Union (Ireland)</strong>. It is used for nothing else
          and is not part of the app.
        </li>
        <li>
          <strong>Apple</strong> — app distribution and App Store functionality,
          under Apple&rsquo;s own privacy policy.
        </li>
      </ul>

      <h2>How long it is kept</h2>
      <p>
        Data in the app is kept on your device for as long as you keep the app,
        and goes when you delete it. An email address given for the launch
        announcement is kept until the announcement has been sent, or until you
        ask for it to be removed — whichever comes first.
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
        In practice there is very little to exercise those rights against: the
        app holds your data on your own device, where it is already yours and
        under your control, and no copy is held anywhere else. Where a legal
        basis is relied on, it is this: submitting your email for the launch
        announcement is your consent, which you may withdraw at any time; hosting
        the site securely and counting page views rests on legitimate interests;
        and Apple Health access rests on the permission you grant and can
        withdraw.
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
        introduction of accounts, syncing or AI processing — will be described
        plainly rather than folded quietly into a paragraph.
      </p>

      <h2>Contact</h2>
      <p>
        {site.owner} —{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
      </p>
    </LegalPage>
  )
}
