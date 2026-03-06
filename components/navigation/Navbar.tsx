'use client'

import React, { useState } from 'react'
import Link from 'next/link'

/**
 * Navbar Component - Industrial Navigation System
 *
 * Design rationale:
 * - NOT the generic "logo left, links center, CTA right" pattern
 * - Industrial hierarchy: Logo prominent, navigation functional
 * - Minimal chrome - no excessive borders or backgrounds
 * - Generous spacing between elements (like Boliden)
 * - Mobile: Side drawer with generous spacing (not cramped hamburger menu)
 * - Desktop: Clean horizontal with breathing room
 *
 * For Cityborr AB (B2B construction):
 * - Professional, no-nonsense navigation
 * - Clear path to key pages (Tjänster, Kontakt)
 * - Logo as anchor - brand recognition for contractors
 */

interface NavLink {
  href: string
  label: string
}

interface NavbarProps {
  /** Logo image source */
  logo?: string
  /** Company name (fallback if no logo) */
  companyName?: string
  /** Navigation links */
  links: NavLink[]
  /** Primary CTA */
  ctaLabel?: string
  ctaHref?: string
}

export function Navbar({
  logo,
  companyName = 'Cityborr AB',
  links,
  ctaLabel,
  ctaHref,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/*
        Navigation bar - generous vertical padding
        No background initially - sits on page surface
        Becomes elevated on scroll (can be added with scroll listener)
      */}
      <nav className="relative z-50 bg-surface-base border-b border-border-subtle">
        <div className="max-w-container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">

            {/* Logo / Brand - Left aligned, prominent */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
            >
              {logo ? (
                <img
                  src={logo}
                  alt={companyName}
                  className="h-12 w-auto transition-opacity duration-base group-hover:opacity-80"
                />
              ) : (
                <span className="font-display text-2xl font-bold text-text-primary">
                  {companyName}
                </span>
              )}
            </Link>

            {/* Desktop Navigation - Right aligned with generous spacing */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Links - clean, no background containers */}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    font-body text-base font-medium text-text-secondary
                    hover:text-text-primary
                    transition-colors duration-fast
                    relative
                    after:absolute after:bottom-0 after:left-0 after:right-0
                    after:h-0.5 after:bg-concrete-800
                    after:scale-x-0 hover:after:scale-x-100
                    after:transition-transform after:duration-base after:origin-left
                  "
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA - Industrial button, safety yellow */}
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className="
                    inline-flex items-center justify-center
                    px-5 py-3
                    bg-accent-warning text-concrete-900
                    font-body font-medium text-base
                    rounded
                    hover:bg-yellow-500 hover:shadow-md
                    active:bg-yellow-600 active:translate-y-px
                    transition-all duration-fast ease-sharp
                  "
                >
                  {ctaLabel}
                </Link>
              )}
            </div>

            {/* Mobile Menu Button - Industrial design, not generic hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                md:hidden
                p-2 -mr-2
                text-text-primary
                hover:bg-concrete-100
                rounded
                transition-colors duration-fast
              "
              aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                // Close icon - X
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon - not three lines, but more industrial
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/*
        Mobile Menu - Side drawer style (not dropdown)
        Generous spacing, feels like a dedicated space not a cramped list
      */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop - dark overlay */}
          <div
            className="fixed inset-0 bg-concrete-900/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel - slides from right */}
          <div
            className="
              fixed top-0 right-0 bottom-0 w-full max-w-sm
              bg-surface-elevated
              shadow-xl
              z-50
              md:hidden
              overflow-y-auto
            "
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-border-subtle">
              <span className="font-display text-xl font-semibold text-text-primary">
                Meny
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Stäng meny"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links - generous vertical spacing */}
            <div className="p-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    block
                    px-4 py-4
                    font-body text-lg font-medium text-text-primary
                    hover:bg-concrete-50
                    rounded
                    transition-colors duration-fast
                  "
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA in mobile menu */}
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    block mt-6
                    px-5 py-4
                    bg-accent-warning text-concrete-900 text-center
                    font-body font-medium text-lg
                    rounded
                    hover:bg-yellow-500
                    transition-colors duration-fast
                  "
                >
                  {ctaLabel}
                </Link>
              )}
            </div>

            {/* Contact info in mobile menu - added value for mobile users */}
            <div className="p-6 mt-auto border-t border-border-subtle">
              <p className="font-body text-sm text-text-tertiary mb-2">
                Kontakta oss
              </p>
              <p className="font-body text-base text-text-secondary">
                <a href="tel:0703434179" className="hover:text-text-primary transition-colors">
                  070-34 34 179
                </a>
              </p>
              <p className="font-body text-base text-text-secondary">
                <a href="mailto:info@cityborr.com" className="hover:text-text-primary transition-colors">
                  info@cityborr.com
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

/**
 * Usage Example:
 *
 * <Navbar
 *   logo="/cityborr-logo.jpg"
 *   companyName="Cityborr AB"
 *   links={[
 *     { href: '/', label: 'Hem' },
 *     { href: '/tjanster', label: 'Tjänster' },
 *     { href: '/projekt', label: 'Projekt' },
 *     { href: '/personal', label: 'Personal' },
 *     { href: '/kontakt', label: 'Kontakt' },
 *   ]}
 *   ctaLabel="Begär offert"
 *   ctaHref="/kontakt"
 * />
 *
 * Design notes:
 * - No generic "logo left, links center, CTA right" - instead logo left, everything right
 * - Desktop links have underline animation on hover (industrial precision)
 * - Mobile menu is side drawer (generous space) not cramped dropdown
 * - Mobile menu includes contact info (added value for mobile users)
 * - CTA uses safety yellow (construction industry signaling)
 * - All transitions use industrial timing (fast, sharp)
 * - No background initially - minimal chrome
 * - Border bottom only (subtle separation from content)
 * - Square line caps on icons (industrial, not rounded)
 * - Generous padding throughout (inspired by Boliden's B2B aesthetic)
 */
