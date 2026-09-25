import Image from 'next/image'
import {
  ArrowUpRight,
  ListChecks,
  ShieldCheck,
  Smartphone,
  Sword,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { APP_STORE_URL } from '@/lib/site'

export function LaunchProof() {
  return (
    <div className="launch-proof shell" aria-label="Forge for iPhone">
      <a href={APP_STORE_URL}>
        <Smartphone size={18} aria-hidden="true" />
        <span>Available on the App Store</span>
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <span>
        <ShieldCheck size={18} aria-hidden="true" />
        Your practice stays yours
      </span>
      <span>
        <Sword size={18} aria-hidden="true" />
        No account required
      </span>
    </div>
  )
}

const steps = [
  {
    number: '01',
    icon: ListChecks,
    title: 'Give your day a direction.',
    description:
      'Choose the activities that matter to you. Make room for them in your day and your week.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Do the work. Earn the day.',
    description:
      'Complete your activities, one honest action at a time. Discipline grows in the doing.',
  },
  {
    number: '03',
    icon: Sword,
    title: 'Pull the sword.',
    description:
      'When the day is earned, pull the blade free. A small ritual that gives your effort a finish.',
  },
]

export function Experience() {
  return (
    <section
      className="experience section-pad shell"
      id="experience"
      aria-labelledby="experience-title"
    >
      <Reveal className="section-topline">
        <span className="eyebrow">01 / THE DAILY RITUAL</span>
        <span className="section-aside">INTENTION → ACTION → PROGRESS</span>
      </Reveal>
      <div className="experience-grid">
        <Reveal className="experience-heading">
          <h2 id="experience-title" className="display-title">
            The day
            <br />
            isn’t given.
            <br />
            <span className="muted-type">It’s earned.</span>
          </h2>
          <p className="body-copy">
            Forge turns the things you want to do into a practice you can return
            to. The sword is the moment you make it count.
          </p>
        </Reveal>
        <div className="sword-stage" aria-hidden="true">
          <div className="sword-halo" />
          <Image
            src="/sword.webp"
            alt=""
            width={353}
            height={1422}
            className="ritual-sword"
          />
          <div className="sword-ground" />
          <span className="sword-caption">EVERY DAY, A STRIKE.</span>
        </div>
        <div className="ritual-steps">
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <Reveal key={number} delay={index * 70} className="ritual-step">
              <span className="step-number">{number}</span>
              <div>
                <Icon size={21} strokeWidth={1.4} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
