import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Forge',
  description:
    'How Forge handles local data, backups, anonymous analytics, Apple Health, Forge Pro purchases and optional AI features.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your practice is personal. Here is what stays on your iPhone, what is shared when you choose AI, and how you control your data."
      updated={site.privacyUpdated}
    >
      <div className="callout">
        <p>The short version</p>
        <p>
          Forge has no accounts or cloud sync. Your activities, notes and
          personal record stay on your device. The app uses TelemetryDeck for
          anonymous usage analytics to help improve Forge; analytics are on by
          default and can be turned off at any time. Forge Pro is sold through
          the App Store, and Apple handles every payment. Forge's optional AI
          features send what they need to our server and to OpenAI only after
          you allow them, and only when you ask. Apple Health readings never
          leave your iPhone. There are no ads or cross-app tracking.
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
        schedules, completion history, your answers to the seven starting
        questions, Arcs, blades, milestones, chapters, review answers, your Ask
        Forge conversation and your settings are stored locally on your iPhone.
        Forge's widgets and Live Activity share that local storage to show your
        day, and reminders, including the reminder before a free trial ends, are
        scheduled on the device.
      </p>
      <p>
        Forge does not sync this content between devices or keep a copy of it on
        a server. Your personal record leaves your iPhone only when an AI
        feature sends the content described below with your permission, or when
        you choose to export a backup. Anonymous analytics and technical
        information are described separately below.
      </p>
      <p>
        <strong>Backup files.</strong> Settings → Your Data → Export Backup
        creates one file with your record, your week, your Arcs, your words
        (including review answers and the Ask Forge conversation) and your
        settings. It is made on your iPhone and goes only where you save or send
        it; Forge does not receive a copy. Anyone who has the file can read it,
        so keep it somewhere private. Import Backup replaces what is on your
        iPhone with a backup file, after asking you. Permissions, Forge Pro and
        your privacy choices are never in the file and are never changed by one.
      </p>
      <p>
        If you use iCloud or computer backups, your device backup may include
        Forge's local data under your Apple backup settings. Forge cannot access
        those backups.
      </p>

      <h2 id="anonymous-usage-analytics">Anonymous Usage Analytics</h2>
      <p>
        Forge uses TelemetryDeck to collect anonymous usage analytics so we can
        understand how the app is used and improve its features.
      </p>
      <p>
        This includes events such as the first app opening, each onboarding
        step, answering the starting questions, adding or completing an
        activity, earning a day, completing or abandoning a sword pull,
        accepting or completing a challenge, opening a notification, completing
        a weekly review, returning to the app's practice after a break, closing
        a chapter, seeing the Forge Pro screen, starting a free trial or a
        purchase, tapping Restore Purchases, being recognised as an earlier
        user, and a Weekly Reading being replaced by the phone's own sentence.
      </p>
      <p>
        Events contain a limited set of predefined values or counts, such as
        which onboarding step or feature was used, the way an activity was
        marked complete, the number of focus areas selected, which screen opened
        Forge Pro, which plan was chosen (annual, annual offer, monthly or
        lifetime), and days since installation as estimated from the local
        activity record.
      </p>
      <p>
        We do not send activity names, notes, identity statements, chapter
        names, review answers, your answers to the starting questions, other
        user-generated text, chosen schedule times, Apple Health readings,
        prices, receipts, transaction IDs, or anything you ask Forge's AI or it
        answers to TelemetryDeck.
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
        workouts (their minutes), sleep (time asleep) and mindful minutes to
        complete activities your phone can measure. Access is read-only: Forge
        does not write to Health. Forge asks the first time an activity Health
        can check enters your day, and never when the app opens.
      </p>
      <p>
        Health readings are processed on your iPhone the moment they arrive and
        are not stored by Forge: Forge records that an activity was completed,
        not the reading behind it. Readings are never sent to TelemetryDeck, to
        our server or to an AI service; if you use Ask Forge, it is told which
        of today's activities are done, never a reading. With your permission,
        iOS can wake Forge in the background when new Health data arrives, so an
        activity can complete itself. You can withdraw Health access in iOS
        Settings or in the Health app.
      </p>

      <h2>Forge Pro and the App Store</h2>
      <p>
        Forge Pro is sold through the App Store: an annual subscription with a
        free trial for eligible accounts, a monthly subscription, and a one-time
        Lifetime purchase. Apple processes every payment; Forge does not receive
        your card details, billing address or Apple Account password. The app
        learns whether you have Forge Pro from Apple's StoreKit on your iPhone.
        Apple's StoreKit may communicate with Apple to load product information
        or check purchases; Apple handles that exchange under{' '}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noreferrer"
        >
          Apple’s privacy policy
        </a>
        .
      </p>
      <p>
        <strong>Free trial reminder.</strong> If you start a free trial and
        leave "Remind me before the trial ends" on, Forge schedules a
        notification on your iPhone for two days before the trial ends, at the
        start of your day. It is created on the device, needs your permission
        for notifications, and sends nothing anywhere.
      </p>
      <p>
        <strong>Earlier users.</strong> To recognise an install that used Forge
        1.0 or 1.0.1, Forge checks on your iPhone whether a record from an
        earlier version is there, or reads Apple's record of the version you
        first downloaded. This happens on the device.
      </p>
      <p>
        <strong>Analytics.</strong> If anonymous usage sharing is on, Forge
        sends anonymous events when the Forge Pro screen is shown (and which
        screen opened it), when the one-time offer is shown or accepted, when a
        free trial or a purchase starts (with the plan), when Restore Purchases
        is tapped, and when an earlier user is recognised. They never include a
        price, receipt, transaction ID or Apple Account details.
      </p>
      <p>
        <strong>AI requests.</strong> When you use an AI feature, Forge sends
        Apple's signed record of your Forge Pro purchase to our server, which
        checks it to confirm access (see "AI features").
      </p>

      <h2>Planning and personal content</h2>
      <p>
        Planning suggestions, challenges and weekly review observations are
        worked out on your device. Your practice is not published in a feed or
        shared with other users. Forge's AI features, below, are the only
        exception, and only after you allow them.
      </p>

      <h2>AI features (Forge Pro)</h2>
      <p>
        Forge Pro includes three optional AI features:{' '}
        <strong>Ask Forge</strong>, a coach that reads your record and answers
        questions about it; the <strong>Weekly Reading</strong>; and{' '}
        <strong>Plan in your own words</strong>. They need Forge Pro, including
        for earlier users.
      </p>
      <p>
        <strong>How it works.</strong> When you use one, the request goes from
        the Forge app to Forge's own server, hosted by Supabase, which asks
        OpenAI to write the answer and returns it to the app. The app never
        contacts OpenAI directly and contains no OpenAI key.
      </p>
      <p>
        <strong>Your permission comes first.</strong> Before the first AI
        request, Forge shows you exactly what would be sent, where it goes and
        who processes it, with two choices: <strong>Allow</strong> and{' '}
        <strong>Not now</strong>. With <em>Not now</em>, no AI request is sent
        and the on-device features keep working. You can withdraw permission at
        any time in <strong>Settings → Planning</strong>; no request is made
        after that. A request is only ever made when you press a button that
        asks for one.
      </p>
      <p>
        <strong>What is sent, and only what the feature needs:</strong>
      </p>
      <ul>
        <li>your activities' names, times, lengths and days;</li>
        <li>counts of the days you kept;</li>
        <li>
          what you wrote about who you are becoming, and your current chapter's
          intention;
        </li>
        <li>
          for a <strong>Weekly Reading</strong>: that week's counts, per day,
          per activity and per identity statement;
        </li>
        <li>
          for <strong>Plan in your own words</strong>: the request you typed;
        </li>
        <li>
          for <strong>Ask Forge</strong>: what you write, with the conversation
          before it (at most the last eight messages, yours and its replies);
          your six stats and overall score as Forge shows them; which Arc you
          are running, its day and its phase; and today's activities, with which
          are done.
        </li>
      </ul>
      <p>
        Forge does not attach weekly review answers, calendar dates, individual
        past-day records, Health readings, your name, email, location or
        contacts to AI requests. Any personal information you type into an AI
        prompt, activity name or other shared text will be included with that
        text.
      </p>
      <p>
        <strong>Your Ask Forge conversation stays on your iPhone.</strong> Forge
        keeps the last 40 messages so you can read them back;{' '}
        <strong>Clear</strong> in Ask Forge deletes them. Our server does not
        keep them.
      </p>
      <p>
        <strong>What Ask Forge will not do.</strong> It does not give medical,
        psychiatric or nutritional diagnosis or treatment, advice about drugs,
        performance-enhancing substances or supplement doses, extreme diets or
        fasting protocols, sexual content, or help with harassing anyone. A
        message that suggests you may be in crisis is answered on your iPhone
        with the 988 Suicide &amp; Crisis Lifeline, and that message is not
        sent. Ask Forge is not medical advice.
      </p>
      <p>
        <strong>Reporting a reply.</strong> A long press on an Ask Forge reply
        offers <em>Report</em>, which opens an email to our support address with
        that reply in it. Nothing is sent unless you send the email yourself.
      </p>
      <p>
        <strong>How a request is authorised.</strong> Each request carries an
        anonymous identifier, created the first time you use an AI feature after
        allowing it, and Apple's signed record of your Forge Pro purchase, which
        our server verifies. The identifier has no name, email or password; you
        never see it. It is not created when you open the app or use any other
        feature.
      </p>
      <p>
        <strong>What we keep.</strong> Our server does not store what you send
        or the answer it returns. It keeps a count of AI requests per day for
        each anonymous identifier and each purchase, to enforce the daily
        limits, and minimal technical logs, such as which feature was asked for
        and whether it succeeded. Our hosting provider may keep standard request
        logs, such as IP addresses and times, under its own terms.
      </p>
      <p>
        <strong>OpenAI.</strong> OpenAI, in the United States, processes each
        request to write the answer. We ask OpenAI not to store the response.
        Under OpenAI's API terms, data sent through its API is not used to train
        its models by default, and OpenAI may retain prompts and responses in
        abuse-monitoring logs for up to 30 days by default, or longer where
        required by law or necessary to prevent harm. See{' '}
        <a
          href="https://developers.openai.com/api/docs/guides/your-data"
          target="_blank"
          rel="noreferrer"
        >
          OpenAI’s API data controls
        </a>{' '}
        and{' '}
        <a href="https://openai.com/policies/" target="_blank" rel="noreferrer">
          policies
        </a>
        .
      </p>
      <p>
        <strong>What it is used for.</strong> Only to provide the feature you
        asked for. AI data is not used for advertising, is not used to track
        you, is not sold, and is not combined with data from other companies.
        Every reply, reading and plan written by AI is labelled as written by
        AI; a Weekly Reading is checked against your own record before it is
        shown, and a proposed change to your week is applied only after you
        review it and confirm it.
      </p>

      <h2>Deleting data and retention</h2>
      <p>
        Deleting Forge removes its locally stored app data, including the Ask
        Forge conversation. There is no Forge account or cloud copy of your
        record to delete. Device backups are managed through your Apple
        settings, and a backup file you exported is yours to keep or delete.
      </p>
      <p>
        If you used an AI feature, its anonymous identifier exists in our
        server's sign-in system and in your iPhone's keychain, which iOS may
        keep after the app is deleted. It carries no name, email or Apple
        Account details, but it lets our server associate requests with the same
        installation and verify the associated purchase. The daily request
        counts hold no content and are kept only to enforce the limits.
      </p>
      <p>
        Anonymous analytics already received are separate from your local record
        and are not removed by uninstalling the app. Forge does not hold an
        account or identity mapping that would let us reliably find an
        individual's anonymous events. Contact us with questions about analytics
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
