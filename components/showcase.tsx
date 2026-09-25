import { PhoneMockup } from '@/components/phone-mockup'
import { Reveal } from '@/components/reveal'

const screens = [
  {
    src: '/screens/blade-collection.webp',
    alt: 'Forge blade collection: Rough, Struck, Shaped, Folded, Quenched, Edged and the locked Proven blade',
    number: 'I',
    title: 'Carry what you’ve earned.',
    text: 'Your blades tell the story of days kept. A collection built through consistency.',
  },
  {
    src: '/screens/becoming.webp',
    alt: 'The Becoming screen with a six-axis chart for intellect, relationships, discipline, ambition, mental and physical growth',
    number: 'II',
    title: 'See who you’re becoming.',
    text: 'Six parts of you. One picture of your growth, shaped by the actions you actually take.',
  },
  {
    src: '/screens/activity-record.webp',
    alt: 'Forge record: a twelve-week activity grid, chapter progress, analytics and personal milestones',
    number: 'III',
    title: 'Make your progress tangible.',
    text: 'Your weeks, chapters and milestones. See the days add up and find your next step.',
  },
]

export function Showcase() {
  return (
    <section
      className="showcase section-pad shell"
      id="inside-forge"
      aria-labelledby="showcase-title"
    >
      <Reveal className="section-topline">
        <span className="eyebrow">03 / INSIDE FORGE</span>
        <span className="section-aside">MADE TO BE USED. EVERY DAY.</span>
      </Reveal>
      <Reveal className="showcase-heading">
        <h2 id="showcase-title" className="display-title">
          A little more yourself.
          <br />
          <span className="muted-type">Every time you show up.</span>
        </h2>
        <p className="body-copy">
          A clear view of the work you’re doing.
          <br />
          And the person it’s helping you build.
        </p>
      </Reveal>
      <div className="screen-gallery">
        {screens.map((screen, index) => (
          <Reveal
            as="figure"
            className="gallery-item"
            key={screen.src}
            delay={index * 90}
          >
            <div className="gallery-screen">
              <span className="gallery-numeral" aria-hidden="true">
                {screen.number}
              </span>
              <PhoneMockup src={screen.src} alt={screen.alt} />
            </div>
            <figcaption>
              <span className="gallery-index">0{index + 1}</span>
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
