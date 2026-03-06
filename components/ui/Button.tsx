'use client'

import React from 'react'

/**
 * Button Component - Industrial Interaction Element
 *
 * Design rationale:
 * - Sharp corners (4px radius) like concrete and steel - no soft, rounded edges
 * - Mechanical state transitions - precise, snappy like industrial equipment
 * - High contrast for B2B credibility and accessibility
 * - No playful effects - purposeful, professional interactions
 * - Safety yellow accent for primary actions (construction industry signaling)
 *
 * This button feels like activating industrial machinery:
 * precise, deliberate, and reliable.
 */

interface ButtonProps {
  children: React.ReactNode
  /** Visual hierarchy and purpose */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  /** Size affects both padding and typography */
  size?: 'sm' | 'base' | 'lg'
  /** Full width on mobile, auto on desktop */
  fullWidthMobile?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Loading state with spinner */
  loading?: boolean
  /** Click handler */
  onClick?: () => void
  /** Button type for forms */
  type?: 'button' | 'submit' | 'reset'
  /** Additional classes */
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'base',
  fullWidthMobile = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  // Base classes - sharp, industrial
  const baseClasses = `
    inline-flex items-center justify-center
    font-body font-medium
    transition-all duration-fast
    ease-sharp
    rounded
    focus:outline-none focus:ring-2 focus:ring-concrete-700 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidthMobile ? 'w-full sm:w-auto' : ''}
  `

  // Variant styles - industrial color applications
  const variantClasses = {
    // Primary: Safety yellow - stands out like construction equipment
    primary: `
      bg-accent-warning text-concrete-900
      hover:bg-yellow-500 hover:shadow-md
      active:bg-yellow-600 active:translate-y-px
    `,
    // Secondary: Dark concrete - solid, substantial
    secondary: `
      bg-concrete-800 text-text-inverse
      hover:bg-concrete-700 hover:shadow-md
      active:bg-concrete-900 active:translate-y-px
    `,
    // Outline: Steel border - minimal but present
    outline: `
      bg-transparent text-text-primary
      border-2 border-concrete-400
      hover:bg-concrete-50 hover:border-concrete-600
      active:bg-concrete-100
    `,
    // Ghost: Subtle - text emphasis only
    ghost: `
      bg-transparent text-text-primary
      hover:bg-concrete-100
      active:bg-concrete-200
    `,
  }

  // Size classes - meaningful jumps
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',        // 24px h, 14px text
    base: 'px-5 py-3 text-base',    // 32px h, 16px text
    lg: 'px-6 py-4 text-lg',        // 48px h, 18px text
  }

  // Loading spinner - mechanical, industrial
  const LoadingSpinner = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  )
}

/**
 * Usage Examples:
 *
 * // Primary CTA - safety yellow, high visibility
 * <Button variant="primary" size="lg">
 *   Begär offert
 * </Button>
 *
 * // Secondary action - solid concrete
 * <Button variant="secondary">
 *   Kontakta oss
 * </Button>
 *
 * // Outline for less emphasis
 * <Button variant="outline" size="sm">
 *   Läs mer
 * </Button>
 *
 * // Ghost for minimal UI presence
 * <Button variant="ghost">
 *   Stäng
 * </Button>
 *
 * // Loading state
 * <Button variant="primary" loading>
 *   Skickar...
 * </Button>
 *
 * // Full width on mobile (forms, mobile CTAs)
 * <Button variant="primary" fullWidthMobile>
 *   Skicka meddelande
 * </Button>
 *
 * Design notes:
 * - Primary uses safety yellow (construction industry signaling)
 * - All buttons have sharp 4px corners (industrial, not playful)
 * - Hover adds subtle shadow (realistic elevation on concrete)
 * - Active state has 1px translate-y (mechanical press feedback)
 * - Fast transitions with sharp easing (mechanical, precise)
 * - Focus ring for accessibility (2px concrete-700)
 */
