'use client'

import { Navbar, Container } from '@/components'
import { motion } from 'framer-motion'

export default function PersonalPage() {
  const leadership = [
    {
      name: 'Kim Hansen',
      title: 'VD & Ägare',
      phone: '070-34 34 179',
      email: 'kim.hansen@cityborr.com',
      image: '/images/personal/kim-hansen.jpg',
    },
    {
      name: 'Daniel Persson',
      title: 'Förste man & Ansvarig tung rivning',
      phone: '070-63 85 775',
      email: 'daniel@cityborr.com',
      image: '/images/personal/daniel-persson.jpg',
    },
  ]

  const team = [
    {
      name: 'Tobias Rutqvist',
      title: 'Asbestsanerare, Borråre & Rivningsarbetare',
      image: '/images/personal/tobias-rutqvist.jpg',
    },
    {
      name: 'Peter JR Haenflein',
      title: 'Borråre & Rivningsarbetare',
      image: '/images/personal/peter-haenflein.jpg',
    },
    {
      name: 'Robin Jansson',
      title: 'Borråre & Rivningsarbetare',
      image: '/images/personal/robin-jansson.jpg',
    },
    {
      name: 'Manfred Lundmark',
      title: 'Asbestsanerare & Rivningsarbetare',
      image: '/images/personal/manfred-lundmark.jpg',
    },
    {
      name: 'Johan Jokela',
      title: 'Borråre & Rivningsarbetare',
      image: '/images/personal/johan-jokela.jpg',
    },
    {
      name: 'Sigfrid Engström',
      title: 'Borråre & Rivningsarbetare',
      image: '/images/personal/sigfrid-engstrom.jpg',
    },
    {
      name: 'Lucas Andersson',
      title: 'Borråre & Rivningsarbetare',
      image: '/images/personal/lucas-andersson.jpg',
    },
    {
      name: 'Abel Hidalgo-gato Roche',
      title: 'Borråre & Rivningsarbetare',
      image: '/images/personal/abel-hidalgo.jpg',
    },
    {
      name: 'Birahima dit Niankho Wade',
      title: 'Borråre & Rivningsarbetare',
      image: '/images/personal/birahima-wade.jpg',
    },
    {
      name: 'Peter Wikman',
      title: 'Asbestsanerare, Borråre & Rivningsarbetare',
      image: '/images/personal/peter-wikman.jpg',
    },
  ]

  return (
    <>
      {/* Navigation */}
      <Navbar
        logo="/cityborr-logo.jpg"
        companyName="Cityborr AB"
        links={[
          { href: '/', label: 'Hem' },
          { href: '/tjanster', label: 'Tjänster' },
          { href: '/projekt', label: 'Projekt / bilder' },
          { href: '/personal', label: 'Personal' },
          { href: '/kontakt', label: 'Kontakt' },
        ]}
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />

      <main>
        {/* Page Header */}
        <section className="relative bg-surface-base overflow-hidden border-b border-border-subtle">
          <div className="max-w-container mx-auto px-6 pt-9 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Label */}
              <p className="
                font-body
                text-sm
                font-medium
                uppercase
                tracking-wider
                text-text-tertiary
                mb-4
              ">
                Vårt team
              </p>

              {/* Heading */}
              <h1 className="
                font-display
                text-4xl sm:text-5xl lg:text-6xl
                font-bold
                text-text-primary
                leading-tight
                tracking-tighter
                max-w-4xl
              ">
                Personal med över 20 års erfarenhet
              </h1>

              {/* Description */}
              <p className="
                mt-6
                font-body
                text-lg sm:text-xl
                text-text-secondary
                leading-relaxed
                max-w-3xl
              ">
                Vårt erfarna team levererar högkvalitativa resultat inom betonghåltagning, sågning, rivning och sanering. Varje projekt utförs med precision och professionalism.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-surface-base py-9 border-b border-border-subtle">
          <Container maxWidth="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="
                font-display
                text-2xl
                font-semibold
                text-text-primary
                mb-7
                uppercase
                tracking-wider
              ">
                Ledning
              </h2>
            </motion.div>

            {/* Leadership Grid - 2 columns on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((person, index) => (
                <motion.article
                  key={person.name}
                  className="
                    bg-surface-elevated
                    border border-border-subtle
                    rounded
                    overflow-hidden
                    hover:border-border-base
                    transition-colors
                    duration-300
                  "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Photo */}
                    <div className="
                      w-full sm:w-48
                      h-48 sm:h-auto
                      flex-shrink-0
                      bg-concrete-200
                    ">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="
                        font-display
                        text-2xl
                        font-semibold
                        text-text-primary
                        mb-2
                      ">
                        {person.name}
                      </h3>

                      <p className="
                        font-body
                        text-base
                        text-text-secondary
                        mb-4
                      ">
                        {person.title}
                      </p>

                      <div className="space-y-2">
                        <p className="font-body text-sm text-text-secondary">
                          <a
                            href={`tel:${person.phone.replace(/\s/g, '')}`}
                            className="hover:text-text-primary transition-colors"
                          >
                            {person.phone}
                          </a>
                        </p>
                        <p className="font-body text-sm text-text-secondary">
                          <a
                            href={`mailto:${person.email}`}
                            className="hover:text-text-primary transition-colors"
                          >
                            {person.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="bg-surface-base py-9">
          <Container maxWidth="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="
                font-display
                text-2xl
                font-semibold
                text-text-primary
                mb-7
                uppercase
                tracking-wider
              ">
                Team
              </h2>
            </motion.div>

            {/* Team Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((person, index) => (
                <motion.article
                  key={person.name}
                  className="
                    bg-surface-elevated
                    border border-border-subtle
                    rounded
                    overflow-hidden
                    hover:border-border-base
                    transition-colors
                    duration-300
                  "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {/* Photo */}
                  <div className="
                    w-full
                    aspect-[3/4]
                    bg-concrete-200
                  ">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="
                      font-display
                      text-xl
                      font-semibold
                      text-text-primary
                      mb-2
                    ">
                      {person.name}
                    </h3>

                    <p className="
                      font-body
                      text-sm
                      text-text-secondary
                      leading-relaxed
                    ">
                      {person.title}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-dark py-9 border-t border-concrete-800">
          <Container maxWidth="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-4xl font-semibold text-text-inverse mb-5">
                Vill du arbeta med oss?
              </h2>
              <p className="font-body text-lg text-concrete-400 mb-7 leading-relaxed">
                Vi söker alltid engagerade medarbetare med erfarenhet inom branschen. Kontakta oss för mer information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/kontakt'}
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3
                    font-body font-medium
                    bg-accent-yellow text-concrete-900
                    rounded
                    hover:bg-accent-yellow-hover
                    transition-colors
                    duration-200
                  "
                >
                  Kontakta oss
                </button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-dark py-8 border-t border-concrete-800">
        <Container maxWidth="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company info */}
            <div>
              <h3 className="font-display text-lg font-semibold text-text-inverse mb-3">
                Cityborr i Umeå AB
              </h3>
              <p className="font-body text-sm text-concrete-400">
                Din specialist på betonghåltagning, sågning, rivning & sanering sedan 2011.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-display text-lg font-semibold text-text-inverse mb-3">
                Snabblänkar
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Hem', href: '/' },
                  { label: 'Tjänster', href: '/tjanster' },
                  { label: 'Projekt / bilder', href: '/projekt' },
                  { label: 'Personal', href: '/personal' },
                  { label: 'Kontakt', href: '/kontakt' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-concrete-400 hover:text-text-inverse transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-lg font-semibold text-text-inverse mb-3">
                Kontakt
              </h3>
              <address className="font-body text-sm text-concrete-400 not-italic space-y-2">
                <p>Spårvägen 23<br />903 31 Umeå</p>
                <p>
                  <a href="tel:0703434179" className="hover:text-text-inverse transition-colors">
                    070-34 34 179
                  </a>
                </p>
                <p>
                  <a href="mailto:info@cityborr.com" className="hover:text-text-inverse transition-colors">
                    info@cityborr.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-concrete-800">
            <p className="font-body text-sm text-concrete-500 text-center">
              © {new Date().getFullYear()} Cityborr i Umeå AB. Alla rättigheter förbehållna.
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}

/**
 * Design Notes:
 *
 * Layout:
 * - Page header with industrial typography
 * - Leadership section: 2-column layout with larger cards including contact info
 * - Team section: 3-column grid of team member cards
 * - Hierarchical structure: Leadership more prominent than team
 *
 * Card Design:
 * - Leadership: Horizontal card with photo left, info right (stacks on mobile)
 * - Team: Vertical card with portrait photo + name + title
 * - Consistent aspect ratios for visual rhythm
 *
 * Typography:
 * - Page title: Large (4xl → 5xl → 6xl) Space Grotesk
 * - Section headings: 2xl uppercase with wide tracking
 * - Names: XL/2xl Space Grotesk, semibold
 * - Titles/roles: Base size, secondary color
 *
 * Visual Hierarchy:
 * - Leadership cards larger and more detailed (includes contact info)
 * - Team cards simpler, uniform size
 * - Staggered entrance animations
 * - Subtle hover states
 *
 * Industrial Aesthetic:
 * - Concrete color palette
 * - Minimal border radius (4px)
 * - Sharp, clean photography
 * - Generous spacing between elements
 * - No decorative elements
 */
