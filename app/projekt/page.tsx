'use client'

import { Navbar, Container } from '@/components'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjektPage() {
  const projects = [
    {
      id: 1,
      title: 'Håltagning i trä',
      category: 'Håltagning',
      image: '/images/projekt/20190618_105407.jpg',
    },
    {
      id: 2,
      title: 'Rivning på Dragonskolan',
      category: 'Rivning',
      image: '/images/projekt/Resized_20221129_120742.jpg',
    },
    {
      id: 3,
      title: 'Rivning åt NCC',
      category: 'Rivning',
      image: '/images/projekt/20181019_115332.jpg',
    },
    {
      id: 4,
      title: 'Håltagning åt Contractor på Sävar såg',
      category: 'Håltagning',
      image: '/images/projekt/20200508_134637.jpg',
    },
    {
      id: 5,
      title: 'Rivning åt OF Bygg',
      category: 'Rivning',
      image: '/images/projekt/IMG_20230524_223204_820.jpg',
    },
    {
      id: 6,
      title: 'Rivning på Mariehem',
      category: 'Rivning',
      image: '/images/projekt/Resized_Snapchat-1589298964.jpeg',
    },
    {
      id: 7,
      title: 'Rivning i Örnsköldsvik',
      category: 'Rivning',
      image: '/images/projekt/Resized_PicsArt_02-05-10.45.39.jpg',
    },
    {
      id: 8,
      title: 'Sågning för markvärme',
      category: 'Sågning',
      image: '/images/projekt/Resized_20211013_184546.jpg',
    },
    {
      id: 9,
      title: 'Grävning åt Nåiden bygg på Campus',
      category: 'Grävning',
      image: '/images/projekt/Resized_20211026_171148.jpg',
    },
    {
      id: 10,
      title: 'Takras - Bärgning av fordon',
      category: 'Rivning',
      description: 'Taket rasade där husvagnar förvarades. Vi hjälpte till med att få ut fordon samt riva det som var kvar.',
      image: '/images/projekt/20210305_085503.jpg',
    },
    {
      id: 11,
      title: 'Rivning garage i Holmsund',
      category: 'Husrivning',
      image: '/images/projekt/20200508_090107.jpg',
    },
    {
      id: 12,
      title: 'Rivning trapphus åt Of Bygg',
      category: 'Rivning',
      image: '/images/projekt/Resized_20200909_121533.jpg',
    },
    {
      id: 13,
      title: 'Håltagning 840mm hål i Ö-vik',
      category: 'Håltagning',
      image: '/images/projekt/Resized_20210322_1047181.jpg',
    },
    {
      id: 14,
      title: 'Rivning hus efter brand',
      category: 'Husrivning',
      image: '/images/projekt/Resized_20190829_145109.jpg',
    },
    {
      id: 15,
      title: 'Husrivning på Haga',
      category: 'Husrivning',
      image: '/images/projekt/20230908_100047111.jpg',
    },
    {
      id: 16,
      title: 'Invändig rivning på Gamla naturvetarhuset',
      category: 'Rivning',
      image: '/images/projekt/20210928_113546.jpg',
    },
    {
      id: 17,
      title: 'Utvändig slas för att få ut rivningsmassor',
      category: 'Rivning',
      description: 'Otroligt bra bygg av OF Bygg. Vi fick ut material från 5 våningar tack vara denna.',
      image: '/images/projekt/Resized_20210622_131032.jpg',
    },
    {
      id: 18,
      title: 'Håltagning vid den rasade bron',
      category: 'Håltagning',
      image: '/images/projekt/Resized_20211117_160738.jpg',
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState<string>('Alla')
  const categories = ['Alla', 'Håltagning', 'Rivning', 'Husrivning', 'Sågning', 'Grävning']

  const filteredProjects = selectedCategory === 'Alla'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

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
                Våra projekt
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
                Projekt & tidigare arbeten
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
                Se exempel på vår arbeten för stora byggföretag i Umeå och omnejd. Från precisionshåltagning till fullständig husrivning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-surface-base py-6 border-b border-border-subtle">
          <Container maxWidth="container">
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-5 py-2
                    font-body font-medium text-sm
                    rounded
                    transition-colors
                    duration-200
                    ${selectedCategory === category
                      ? 'bg-accent-yellow text-concrete-900'
                      : 'bg-surface-elevated text-text-secondary border border-border-subtle hover:border-border-base'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Gallery Grid */}
        <section className="bg-surface-base py-9">
          <Container maxWidth="container">
            {/*
              Responsive grid:
              - 1 column on mobile
              - 2 columns on tablet
              - 3 columns on desktop
              Masonry-style with varying heights
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="
                    group
                    relative
                    bg-surface-elevated
                    border border-border-subtle
                    rounded
                    overflow-hidden
                    hover:border-border-base
                    transition-all
                    duration-300
                  "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {/* Image Container */}
                  <div className="
                    relative
                    w-full
                    aspect-[4/3]
                    overflow-hidden
                    bg-concrete-200
                  ">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-500
                      "
                    />

                    {/* Category Badge */}
                    <div className="
                      absolute top-3 left-3
                      px-3 py-1
                      bg-concrete-900/80
                      backdrop-blur-sm
                      rounded-sm
                    ">
                      <span className="
                        font-body
                        text-xs
                        font-medium
                        uppercase
                        tracking-wider
                        text-text-inverse
                      ">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="
                      font-display
                      text-xl
                      font-semibold
                      text-text-primary
                      mb-2
                    ">
                      {project.title}
                    </h2>

                    {project.description && (
                      <p className="
                        font-body
                        text-sm
                        text-text-secondary
                        leading-relaxed
                      ">
                        {project.description}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No results message */}
            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-body text-lg text-text-secondary">
                  Inga projekt hittades i denna kategori.
                </p>
              </motion.div>
            )}
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-dark py-9 border-t border-concrete-800">
          <Container maxWidth="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-4xl font-semibold text-text-inverse mb-5">
                Har du ett liknande projekt?
              </h2>
              <p className="font-body text-lg text-concrete-400 mb-7 leading-relaxed">
                Vi hjälper gärna till med en kostnadsfri offert och rådgivning för ert projekt.
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
                <button
                  onClick={() => window.location.href = '/tjanster'}
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
                  Se våra tjänster
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
                {['Hem', 'Tjänster', 'Projekt', 'Personal', 'Kontakt'].map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      className="font-body text-sm text-concrete-400 hover:text-text-inverse transition-colors"
                    >
                      {link}
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
 * - Filter bar with category buttons (interactive)
 * - Responsive gallery grid: 1 col mobile → 2 col tablet → 3 col desktop
 * - Each project card has image + title + optional description
 * - Dark CTA section at bottom
 *
 * Interaction:
 * - Category filter buttons toggle active state
 * - Filtered projects animate in with stagger
 * - Hover effect: slight image zoom + border color change
 * - Category badge overlays on each image
 *
 * Typography:
 * - Page title: Large (4xl → 5xl → 6xl) Space Grotesk
 * - Project titles: XL Space Grotesk
 * - Category labels: Uppercase, small, wide tracking
 *
 * Visual Design:
 * - Concrete color palette throughout
 * - Minimal border radius (4px)
 * - Category badge with backdrop blur
 * - Consistent aspect ratio (4:3) for all images
 * - Generous spacing and breathing room
 *
 * Animation:
 * - Staggered entrance (50ms delay between cards)
 * - Smooth category transitions
 * - Image hover zoom (scale 1.05)
 * - Industrial easing curve
 */
