'use client'

import React from 'react'
import { motion } from 'framer-motion'

/**
 * ValuesSection - Quality & Environmental Commitment
 *
 * Design rationale:
 * - Two-column grid on desktop - equal weight values
 * - Each value in its own contained space
 * - Minimalist presentation - no icons or decoration
 * - Border separation - like concrete panels
 * - Stagger animation for sequential reveal
 *
 * For B2B clients: professional credibility markers
 */

interface Value {
  title: string
  description: string
}

interface ValuesSectionProps {
  values: Value[]
}

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="bg-concrete-50 py-9">
      <div className="max-w-container mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="
            font-body
            text-sm
            font-medium
            uppercase
            tracking-wider
            text-text-tertiary
            mb-8
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Våra värderingar
        </motion.p>

        {/*
          Grid - 2 columns on desktop, stacks on mobile
          Gap-8 (96px) for generous separation
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="
                border-l-2 border-concrete-400
                pl-6
              "
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1, // Stagger animation
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {/* Title - Space Grotesk for emphasis */}
              <h3 className="
                font-display
                text-2xl
                font-semibold
                text-text-primary
                mb-3
              ">
                {value.title}
              </h3>

              {/* Description - readable, relaxed */}
              <p className="
                font-body
                text-base
                text-text-secondary
                leading-relaxed
              ">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Usage Example:
 *
 * <ValuesSection
 *   values={[
 *     {
 *       title: 'Kvalitet',
 *       description: 'Vi lämnar alltid arbetsplatsen ren och snygg...'
 *     },
 *     {
 *       title: 'Miljöansvar',
 *       description: 'Vi tar stort ansvar för miljön...'
 *     }
 *   ]}
 * />
 *
 * Design notes:
 * - Light concrete background (concrete-50) differentiates from other sections
 * - Left border (2px, concrete-400) like steel beam
 * - Stagger animation (0.1s delay between values)
 * - Two equal columns - balanced presentation
 * - Generous gap (96px) between columns
 */
