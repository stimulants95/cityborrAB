'use client'

import { Navbar, Container } from '@/components'
import { motion } from 'framer-motion'

export default function TjansterPage() {
  const services = [
    {
      title: 'Håltagning',
      description: 'Har ni behov av håltagning oavsett material så kan vi hjälpa er med det. Vi utför håltagning för installationer såsom ventilation, el, vatten och avlopp. Vi kan även göra dörr- och fönsteröppningar.',
      icon: '🔨',
    },
    {
      title: 'Rivning',
      description: 'Vi kan hjälpa er med all rivning, från hårdbetong till lättväggar i gips. Vi använder oss av Brokk robotar för tung rivning och när det behövs utför vi arbetet manuellt.',
      icon: '🏗️',
    },
    {
      title: 'Husrivning',
      description: 'Vi har grävmaskiner för rivning av hus/garage mm. Vi utför alla rivningar, inget är för stort eller för litet för oss!',
      icon: '🏚️',
    },
    {
      title: 'Sanering',
      description: 'Vi kan hjälpa er med asbest och PCB sanering då vi har en stor spetskompetens inom detta området. Vi är auktoriserade av Arbetsmiljöverket.',
      icon: '⚠️',
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
        {/* Page Header - Industrial statement */}
        <section className="relative bg-surface-base overflow-hidden border-b border-border-subtle">
          <div className="max-w-container mx-auto px-6 pt-9 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Label - uppercase, industrial */}
              <p className="
                font-body
                text-sm
                font-medium
                uppercase
                tracking-wider
                text-text-tertiary
                mb-4
              ">
                Våra tjänster
              </p>

              {/* Heading - Large, bold, industrial typography */}
              <h1 className="
                font-display
                text-4xl sm:text-5xl lg:text-6xl
                font-bold
                text-text-primary
                leading-tight
                tracking-tighter
                max-w-4xl
              ">
                Professionella demoleringstjänster för alla behov
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
                Från precisionshåltagning till storskalig rivning och certifierad sanering. Vi har utrustning, erfarenhet och kompetens för varje projekt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid - Asymmetric industrial layout */}
        <section className="bg-surface-base py-9">
          <Container maxWidth="container">
            {/*
              2-column grid on desktop, 1 column on mobile
              Generous gap creates breathing room
            */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  className="
                    bg-surface-elevated
                    border border-border-subtle
                    p-7
                    rounded
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
                  {/* Service Title - Space Grotesk, bold */}
                  <h2 className="
                    font-display
                    text-2xl
                    font-semibold
                    text-text-primary
                    mb-4
                  ">
                    {service.title}
                  </h2>

                  {/* Service Description - Readable, relaxed */}
                  <p className="
                    font-body
                    text-base
                    text-text-secondary
                    leading-relaxed
                  ">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section - Direct path to contact */}
        <section className="bg-surface-dark py-9 border-t border-concrete-800">
          <Container maxWidth="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-4xl font-semibold text-text-inverse mb-5">
                Diskutera ert projekt
              </h2>
              <p className="font-body text-lg text-concrete-400 mb-7 leading-relaxed">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper er att hitta rätt lösning för ert behov.
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
                  Begär offert
                </button>
                <button
                  onClick={() => window.location.href = '/projekt'}
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3
                    font-body font-medium
                    bg-transparent text-text-inverse
                    border border-concrete-700
                    rounded
                    hover:bg-concrete-800
                    transition-colors
                    duration-200
                  "
                >
                  Se tidigare projekt
                </button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer - Simple, industrial */}
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
 * - Page header with industrial typography and generous spacing
 * - 2-column service grid on desktop, stacks on mobile
 * - Each service card has consistent padding and subtle border
 * - Dark CTA section provides visual break and call-to-action
 *
 * Typography:
 * - Page title: Large (4xl → 5xl → 6xl), bold Space Grotesk
 * - Service titles: 2xl Space Grotesk, semibold
 * - Descriptions: Base size IBM Plex Sans, relaxed line-height
 * - Uppercase label with wide tracking for industrial feel
 *
 * Visual Hierarchy:
 * - Services presented equally (no artificial hierarchy)
 * - Subtle hover state on cards (border color change)
 * - Staggered entrance animations (0.1s delay between cards)
 *
 * Industrial Aesthetic:
 * - Concrete color palette throughout
 * - Minimal border radius (4px)
 * - Generous spacing (py-9 sections)
 * - Sharp, clean lines
 * - No decorative elements - let content speak
 */
