'use client'

import React from 'react'
import { motion } from 'framer-motion'

/**
 * AboutSection - Company Introduction
 *
 * Design rationale:
 * - Asymmetric layout - content doesn't fill full width
 * - Facts presented cleanly - no decorative elements
 * - Generous spacing between text blocks
 * - Industrial grid with varying column widths
 *
 * This is company credibility for B2B clients:
 * who we are, since when, key people.
 */

interface AboutSectionProps {
  founded?: string
  ceo?: string
  leadDemolition?: string
  description: string
}

export function AboutSection({
  founded = '2011',
  ceo = 'Kim Hansen',
  leadDemolition = 'Daniel Persson',
  description,
}: AboutSectionProps) {
  return (
    <section className="bg-surface-base py-9">
      <div className="max-w-container mx-auto px-6">
        {/*
          Asymmetric grid - content in left 8 columns, right 4 empty
          Creates visual rhythm and breathing room
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Label - uppercase, wide tracking */}
            <p className="
              font-body
              text-sm
              font-medium
              uppercase
              tracking-wider
              text-text-tertiary
              mb-6
            ">
              Om Cityborr
            </p>

            {/* Company facts - clean, factual */}
            <div className="mb-7">
              <p className="font-body text-lg text-text-primary leading-relaxed">
                Cityborr startades <span className="font-semibold">{founded}</span>.{' '}
                VD är <span className="font-semibold">{ceo}</span>.{' '}
                <span className="font-semibold">{leadDemolition}</span> är förste man och ansvarig för tung rivning.
              </p>
            </div>

            {/* Description - comfortable reading width */}
            <p className="
              font-body
              text-lg
              text-text-secondary
              leading-relaxed
              max-w-prose
            ">
              {description}
            </p>
          </motion.div>

          {/* Kim Hansen portrait - VD image */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="
              relative
              w-full
              aspect-[3/4]
              overflow-hidden
              rounded
              shadow-base
            ">
              <img
                src="/kim-hansen.jpg"
                alt="Kim Hansen, VD Cityborr AB"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
