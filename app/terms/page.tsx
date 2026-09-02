import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use — Forge',
  description:
    'The terms that apply when you use Forge. Plain language, and short, because Forge is a small app made by one person.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="These terms apply when you use the Forge app or this website. They are written to be read, not to be survived."
      updated={site.legalUpdated}
    >
      <h2>1. Who you are agreeing with</h2>
      <p>
        Forge is made and operated by <strong>{site.owner}</strong>, an
        individual developer based in {site.country}. Throughout these terms,
        &ldquo;Forge&rdquo; means the iOS app and this website, and
        &ldquo;you&rdquo; means the person using them.
      </p>
      <p>
        By downloading, opening or using Forge, you accept these terms. If you do
        not accept them, do not use Forge. Your use of the app is also subject to
        Apple&rsquo;s standard App Store terms.
      </p>

      <h2>2. Who may use Forge</h2>
      <p>
        You must be at least <strong>{site.minimumAge} years old</strong> to use
        Forge. If the country you live in sets a higher age for agreeing to
        online services or for consenting to the handling of personal data, that
        higher age applies to you instead.
      </p>

      <h2>3. What Forge is for</h2>
      <p>
        Forge is a personal tool for keeping a daily practice: you keep a short
        list of things a day asks of you, complete them, and build a record over
        time. It is for your own use.
      </p>
      <p>
        You may use Forge for personal, non-commercial purposes. You are granted
        a limited, personal, non-transferable, revocable licence to use the app
        as it is provided. You may not copy, resell, rent, sublicense or
        redistribute it; reverse-engineer or decompile it, except where the law
        expressly permits that despite this term; remove or obscure any notices
        in it; or use it to break the law or to interfere with the service or
        other people&rsquo;s use of it.
      </p>

      <div className="callout">
        <p>Forge is not advice</p>
        <p>
          Forge is a productivity and habit tool. It is{' '}
          <strong>
            not medical, psychological, therapeutic, nutritional, legal or
            financial advice
          </strong>
          , and nothing in it is a diagnosis, treatment or professional
          recommendation. Do not use it as a substitute for a qualified
          professional. If you are struggling with your physical or mental
          health, speak to someone qualified to help. If you may be in danger,
          contact your local emergency services.
        </p>
        <p>
          You decide what activities you set yourself. Suggestions Forge makes
          are arithmetic over your own record, and you are responsible for
          judging whether they are sensible and safe for you. Any physical
          activity you choose to do is undertaken at your own risk.
        </p>
      </div>

      <h2>4. Your responsibility</h2>
      <p>
        You are responsible for what you put into Forge and for how you use it.
        Keep your Apple or Google sign-in secure — anyone with access to it has
        access to your Forge account.
      </p>

      <h2>5. Accounts, if you create one</h2>
      <p>
        No account is required; Forge works fully without one. If you choose to
        sign in with Apple or Google, it is so your practice can be backed up and
        synced across your devices.
      </p>
      <p>
        You can delete your account at any time in{' '}
        <strong>Settings → Account → Delete Account</strong>, which removes your
        account and the data stored against it. Access may be suspended or ended
        if an account is used to attack, abuse or disrupt the service. How your
        data is handled is described in the{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>6. What you create stays yours</h2>
      <p>
        Your activities, notes, intentions, review answers and history are{' '}
        <strong>yours</strong>. No ownership of them is claimed. They are private
        to your account and are never shown to other users — Forge has no feed,
        profiles, comments or sharing between users.
      </p>
      <p>
        The only permission taken is the strictly technical one needed to run the
        service you asked for: if you sign in, storing and transmitting your
        content between your own devices. Nothing you write is used for any other
        purpose.
      </p>

      <h2>7. Price</h2>
      <p>
        Forge is currently <strong>free</strong>. There is no subscription, no
        in-app purchase and nothing locked behind a payment. If paid features are
        ever introduced, they will be described clearly before you are asked for
        anything, and what you already have will not be taken away and sold back
        to you.
      </p>

      <h2>8. Forge belongs to its author</h2>
      <p>
        The app, this website, their design, artwork, text, sounds and code are
        the property of {site.owner} and are protected by copyright. These terms
        give you permission to use Forge — they do not transfer any ownership of
        it to you. &ldquo;Forge&rdquo; as used for this app, along with its logo
        and visual identity, belongs to its author.
      </p>

      <h2>9. Availability and changes</h2>
      <p>
        Forge is offered as it is, and as it happens to be available. It may be
        updated, changed, interrupted for maintenance, or discontinued.
        Individual features may be added, altered or removed as the app develops.
      </p>
      <p>
        The local part of Forge is designed to keep working without a network. If
        the sync service is unavailable, the app keeps functioning on your device
        and catches up later.
      </p>
      <p>
        Sync depends on services provided by others. Their availability is not
        something one developer controls.
      </p>

      <h2>10. Back-ups</h2>
      <p>
        Please keep your own back-ups of anything you would be upset to lose,
        for example through your iPhone&rsquo;s standard device back-up. Signing
        in provides a copy of your practice on the server, but no back-up
        arrangement is guaranteed to be complete or permanently available.
      </p>

      <h2>11. No warranty</h2>
      <p>
        Forge is provided <strong>&ldquo;as is&rdquo;</strong>, without
        warranties of any kind to the fullest extent the law allows. It is not
        promised that Forge will be uninterrupted, error-free, or that it will
        produce any particular result in your life. It is one person&rsquo;s
        software, and it will sometimes have bugs.
      </p>
      <p>
        Nothing here removes rights you have as a consumer under the law of the
        country you live in. Where such rights apply, they stand regardless of
        what this section says.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the extent permitted by law, {site.owner} is not liable for indirect
        or consequential loss, for lost data or lost profits, or for anything
        arising out of your use of or inability to use Forge. Where liability
        cannot lawfully be excluded — including for death or personal injury
        caused by negligence, for fraud, and for anything else the law does not
        allow to be limited — it is not excluded.
      </p>
      <p>
        Because Forge is currently provided free of charge, any liability that
        does apply is limited to the amount you have paid for it.
      </p>

      <h2>13. Ending these terms</h2>
      <p>
        You may stop using Forge at any time by deleting the app, and delete your
        account as described in section 5. Sections that by their nature should
        survive — ownership, disclaimers and limits on liability — continue to
        apply afterwards.
      </p>

      <h2>14. Changes to these terms</h2>
      <p>
        These terms may be updated as Forge changes. The date at the top of this
        page shows when they were last revised, and continuing to use Forge after
        a change means you accept the revised terms. Material changes will be
        made obvious rather than slipped in.
      </p>

      <h2>15. Governing law</h2>
      <p>
        These terms are governed by the law of {site.country}. If you are a
        consumer, you also keep the protection of the mandatory rules of the
        country you live in, and you may bring proceedings in the courts there.
      </p>

      <h2>16. Contact</h2>
      <p>
        Questions about these terms go to{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>
    </LegalPage>
  )
}
