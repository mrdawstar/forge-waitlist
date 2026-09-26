import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Forge',
  description:
    'How Forge stores your practice on your iPhone, uses optional anonymous TelemetryDeck analytics, and lets you control your data.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your practice is personal. Here is what stays on your iPhone, what anonymous usage information leaves it, and what you can control."
      updated={site.privacyUpdated}
    >
      <div className="callout">
        <p>The short version</p>
        <p>
          Forge has no accounts or cloud sync. Your activities, notes and
          personal record stay on your device. The app uses TelemetryDeck for
          anonymous usage analytics to help improve Forge. Analytics are on by
          default and can be turned off at any time. There are no ads or
          cross-app tracking.
        </p>
      </div>

      <h2>Who is responsible</h2>
      <p>
        Forge is made and operated by <strong>{site.owner}</strong>, an
        individual developer based in {site.country}. For privacy questions or
        requests, email{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>

      <h2>Your practice stays on your device</h2>
      <p>
        No account is required, and no account can be created. Your activities,
        schedules, completion history, blades, milestones, chapters, review
        answers and settings are stored locally on your iPhone. Forge’s widgets
        share that local storage to show your day.
      </p>
      <p>
        Forge does not upload this personal content or sync it between devices.
        If you use iCloud or computer backups, your device backup may include
        Forge’s local data under your Apple backup settings. Forge cannot access
        those backups.
      </p>

      <h2 id="anonymous-usage-analytics">Anonymous Usage Analytics</h2>
      <p>
        Forge uses <strong>TelemetryDeck</strong> to collect anonymous usage
        analytics so we can understand how the app is used and improve its
        features.
      </p>
      <p>
        This includes events such as the first app opening, onboarding progress,
        adding or completing an activity, earning a day, completing or
        abandoning a sword pull, accepting or completing a challenge, opening a
        notification, completing a weekly review, returning to the app’s
        practice after a break, and closing a chapter.
      </p>
      <p>
        Events contain a limited set of predefined values or counts, such as
        which feature was used, the way an activity was marked complete, the
        number of focus areas selected, and days since installation as estimated
        from the local activity record.
      </p>
      <p>
        <strong>
          We do not send activity names, notes, identity statements, chapter
          names, review answers, other user-generated text, chosen schedule
          times, or Apple Health readings to TelemetryDeck.
        </strong>
      </p>
      <h3>Information attached to analytics</h3>
      <p>
        Analytics include event information and timestamps, an anonymised
        installation identifier, and session information. The installation
        identifier is hashed on the device and hashed again with a salt by
        TelemetryDeck. Forge does not give TelemetryDeck your name, email
        address, Apple ID or an account identifier.
      </p>
      <p>
        The SDK also attaches technical information: device model, operating
        system, app and SDK versions, screen size and orientation, language,
        locale, region, time zone, appearance and accessibility settings, and
        anonymous session statistics such as session counts, days used and
        first-session date. Region and time zone are device settings; Forge does
        not send GPS location to analytics.
      </p>
      <p>
        This information is used to understand and improve the product. It is{' '}
        <strong>not used for advertising or cross-app tracking</strong>, and
        your personal content is not sold.
      </p>
      <h3>Your choice</h3>
      <div className="callout">
        <p>Settings → Privacy → Share anonymous usage</p>
        <p>
          Anonymous usage analytics are <strong>on by default</strong>. Turn
          this switch off at any time to stop new analytics events and disable
          the SDK’s analytics. Events that happen while sharing is off are not
          saved for later sending when you turn it back on.
        </p>
      </div>
      <p>
        Turning sharing off does not remove your local progress or prevent you
        from using Forge. It also does not retroactively delete analytics
        already received.
      </p>
      <p>
        Analytics are provided by <strong>TelemetryDeck GmbH, Germany</strong>.
        You can read about its anonymisation and data handling in{' '}
        <a
          href="https://telemetrydeck.com/docs/guides/privacy-faq/"
          target="_blank"
          rel="noreferrer"
        >
          TelemetryDeck’s privacy information
        </a>{' '}
        and its{' '}
        <a
          href="https://telemetrydeck.com/docs/ingest/default-parameters/"
          target="_blank"
          rel="noreferrer"
        >
          SDK metadata documentation
        </a>
        .
      </p>

      <h2>Apple Health</h2>
      <p>
        Apple Health is optional. With your permission, Forge reads steps,
        walking and running distance, and workouts to help complete activities
        your phone can measure. Access is read-only: Forge does not write to
        Health.
      </p>
      <p>
        Health readings are processed on your device, are not stored as raw
        readings by Forge, and are not sent to TelemetryDeck or another server.
        Forge records an activity’s completion, not the underlying Health
        reading. You can withdraw Health access in iOS Settings.
      </p>

      <h2>The App Store and purchases</h2>
      <p>
        Apple’s StoreKit may communicate with Apple to load product information
        or check purchase entitlements. Apple handles that exchange under{' '}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noreferrer"
        >
          Apple’s privacy policy
        </a>
        . Forge does not receive payment card details.
      </p>
      <p>
        The current implementation does not send purchase, trial, paywall or
        restore events to TelemetryDeck. Event definitions exist for future
        purchase features, but they are not active in this build. This policy
        will be updated when those features change what is sent.
      </p>

      <h2>Planning and personal content</h2>
      <p>
        Planning suggestions, challenges and weekly review observations are
        generated on your device. The current app does not send your content to
        an AI service. Your practice is not published in a feed or shared with
        other users.
      </p>

      <h2>Deleting data and retention</h2>
      <p>
        Deleting Forge removes its locally stored app data. There is no Forge
        account or cloud copy to delete. Device backups are managed separately
        through your Apple settings.
      </p>
      <p>
        Anonymous analytics already received are separate from your local record
        and are not removed by uninstalling the app. Forge does not hold an
        account or identity mapping that would let us reliably find an
        individual’s anonymous events. Contact us with questions about analytics
        retention or a data request.
      </p>

      <h2>This website and support</h2>
      <p>
        <strong>{site.url.replace('https://', '')}</strong> is hosted by Vercel.
        Hosting involves processing technical request information, such as IP
        address and browser details, to deliver and secure the site. The website
        uses Vercel Web Analytics for aggregate page views and interactions,
        such as which App Store link was clicked and how far the product tour
        was scrolled, without analytics cookies or cross-site advertising
        tracking. These events contain only the link placement or tour step,
        never personal text.
      </p>
      <p>
        This website no longer collects email addresses through a form. If you
        previously gave an email for a product announcement, any remaining
        record is held separately in Supabase in the European Union (Ireland),
        solely for that original purpose or to handle deletion. You can request
        its removal at the address below.
      </p>
      <p>
        If you email support, we receive your email address and whatever you
        choose to include so we can reply. Do not send sensitive information
        that is unnecessary to resolve your question. Support correspondence is
        kept only as needed to handle the request and any applicable
        record-keeping obligations.
      </p>

      <h2>Your rights</h2>
      <p>
        Where personal data is processed, you can request access, correction,
        deletion or portability, and object to or ask us to restrict processing
        where applicable. If processing relies on your consent, you can withdraw
        it. Secure website operation and responding to support requests rely on
        our legitimate interests in running and supporting Forge.
      </p>
      <p>
        Write to <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
        . Anonymous analytics cannot necessarily be linked back to you; we will
        explain what we can locate and act on. You may also complain to your
        local data protection authority, including the President of the Personal
        Data Protection Office (UODO) in Poland.
      </p>

      <h2>Children and changes</h2>
      <p>
        Forge is not intended for children under {site.minimumAge}. Contact us
        if you believe a child has provided personal data. If Forge changes how
        it handles data, this policy will be updated; the date at the top shows
        the latest revision.
      </p>
      <p>
        {site.owner} —{' '}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
      </p>
    </LegalPage>
  )
}
