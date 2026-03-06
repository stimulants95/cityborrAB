'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '../ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Hero Component - Industrial Landing Statement
 *
 * Design rationale:
 * - NOT centered text with background image
 * - Asymmetric layout - text left, visual breathing room right
 * - Generous vertical spacing (128px top, 96px bottom)
 * - Typography as the hero - large, bold Space Grotesk
 * - Minimal decoration - let the statement speak
 * - Subtle entrance animation - mechanical precision
 *
 * For Cityborr AB (construction B2B):
 * - Direct, confident statement of capability
 * - No fluff - professional credibility
 * - Clear path to action (CTA)
 */

interface HeroProps {
  /** Main heading - company tagline */
  heading: string
  /** Supporting text (optional) */
  description?: string
  /** Primary CTA label */
  ctaLabel?: string
  /** Primary CTA link */
  ctaHref?: string
  /** Secondary CTA label (optional) */
  secondaryCtaLabel?: string
  /** Secondary CTA link (optional) */
  secondaryCtaHref?: string
  /** Array of image paths for the rotating slideshow */
  images?: string[]
}

const heroImages = [
  '/images/projekt/20230908_100047111.jpg',
  '/images/projekt/Resized_20221129_120742.jpg',
  '/images/projekt/20200508_134637.jpg',
  '/images/projekt/Resized_20211026_171148.jpg',
  '/images/projekt/20210928_113546.jpg',
]

export function Hero({
  heading,
  description,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  images = heroImages,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])
  return (
    <section className="relative bg-surface-base overflow-hidden">
      {/*
        Asymmetric padding - more top than bottom creates weight
        128px top, 96px bottom - generous but intentional
      */}
      <div className="max-w-container mx-auto px-6 pt-9 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/*
            Text column - spans 7/12 on desktop
            Creates asymmetry and generous right margin
          */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1], // Industrial easing
            }}
          >
            {/*
              Heading - Space Grotesk, large scale, tight tracking
              Industrial typography as visual anchor
            */}
            <h1 className="
              font-display
              text-4xl sm:text-5xl lg:text-6xl
              font-bold
              text-text-primary
              leading-tight
              tracking-tighter
            ">
              {heading}
            </h1>

            {/* Description - generous top margin, readable line length */}
            {description && (
              <p className="
                mt-6
                font-body
                text-lg sm:text-xl
                text-text-secondary
                leading-relaxed
                max-w-prose
              ">
                {description}
              </p>
            )}

            {/* CTAs - generous top margin, horizontal stack */}
            {(ctaLabel || secondaryCtaLabel) && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {ctaLabel && ctaHref && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.location.href = ctaHref}
                  >
                    {ctaLabel}
                  </Button>
                )}
                {secondaryCtaLabel && secondaryCtaHref && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = secondaryCtaHref}
                  >
                    {secondaryCtaLabel}
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/*
            Visual column - spans 5/12 on desktop
            Empty on purpose - creates breathing room and asymmetry
            Could add abstract industrial visual or leave empty for whitespace
          */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div className="
              relative
              w-full
              h-full
              min-h-[400px]
              overflow-hidden
              rounded
              shadow-base
            ">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Cityborr AB projekt ${currentIndex + 1}`}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                    scale: { duration: 5, ease: 'linear' },
                  }}
                />
              </AnimatePresence>

              {/* Progress dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${i === currentIndex
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/75'
                      }
                    `}
                    aria-label={`Visa bild ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/*
        Bottom border - subtle separation
        Like concrete slab edge
      */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border-subtle" />
    </section>
  )
}

/**
 * Usage Example:
 *
 * <Hero
 *   heading="Din specialist på betonghåltagning, sågning, rivning & sanering"
 *   description="Professionella demoleringstjänster för stora byggföretag sedan 2011."
 *   ctaLabel="Begär offert"
 *   ctaHref="/kontakt"
 *   secondaryCtaLabel="Se våra projekt"
 *   secondaryCtaHref="/projekt"
 * />
 *
 * Design notes:
 * - Asymmetric 7/5 grid - creates visual interest
 * - Text left, breathing room right (not centered)
 * - Generous vertical padding (128px/96px)
 * - Typography scale: 4xl → 5xl → 6xl (responsive)
 * - Entrance animation: subtle y-translate with industrial easing
 * - Decorative element is minimal concrete gradient
 * - Bottom border like concrete slab edge
 * - No background image - clean, professional
 */
