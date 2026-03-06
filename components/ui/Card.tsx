import React from 'react'

/**
 * Card Component - Industrial Content Container
 *
 * Design rationale:
 * - Minimal elevation - like concrete slabs, not floating paper
 * - Sharp 4px corners - industrial, not friendly/playful
 * - Subtle hover state - mechanical precision, not bouncy
 * - Generous internal padding with asymmetric spacing
 * - No decorative elements - content is the star
 *
 * For Cityborr AB, cards showcase real work:
 * project photos, service descriptions, team members.
 * The card doesn't compete with the content - it frames it
 * like steel frames a building.
 */

interface CardProps {
  children: React.ReactNode
  /** Interactive cards elevate on hover */
  interactive?: boolean
  /** Padding density - varies per use case */
  padding?: 'tight' | 'base' | 'loose'
  /** Background surface - elevated or base */
  surface?: 'elevated' | 'base'
  /** Optional click handler (makes card interactive) */
  onClick?: () => void
  /** Optional href (renders as link) */
  href?: string
  /** Additional classes */
  className?: string
}

export function Card({
  children,
  interactive = false,
  padding = 'base',
  surface = 'elevated',
  onClick,
  href,
  className = '',
}: CardProps) {
  // Base classes - sharp, minimal elevation
  const baseClasses = `
    block
    rounded
    transition-all duration-base ease-industrial
  `

  // Surface classes - concrete tones
  const surfaceClasses = {
    elevated: 'bg-surface-elevated',  // Pure white - lifted slab
    base: 'bg-surface-base',          // Off-white - ground level
  }

  // Padding classes - asymmetric internal spacing
  const paddingClasses = {
    tight: 'p-4',   // 24px - compact information
    base: 'p-6',    // 48px - comfortable spacing
    loose: 'p-8',   // 96px - generous, featured content
  }

  // Interactive states - subtle mechanical feedback
  const interactiveClasses = interactive || onClick || href
    ? `
        cursor-pointer
        shadow-base hover:shadow-md
        hover:-translate-y-1
        active:translate-y-0 active:shadow-base
      `
    : 'shadow-sm'

  const combinedClasses = `
    ${baseClasses}
    ${surfaceClasses[surface]}
    ${paddingClasses[padding]}
    ${interactiveClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  // Render as link if href provided
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
      >
        {children}
      </a>
    )
  }

  // Render as button if onClick provided
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={combinedClasses}
      >
        {children}
      </button>
    )
  }

  // Default: render as div
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}

/**
 * ProjectCard - Specialized card for project showcase
 *
 * Design: Image-led with minimal text overlay
 * Shows raw work - concrete drilling, demolition, remediation
 */
interface ProjectCardProps {
  image: string
  imageAlt: string
  title: string
  category?: string
  onClick?: () => void
}

export function ProjectCard({
  image,
  imageAlt,
  title,
  category,
  onClick,
}: ProjectCardProps) {
  return (
    <Card interactive padding="tight" onClick={onClick}>
      {/* Image - full width, aspect ratio for grid consistency */}
      <div className="relative aspect-[4/3] overflow-hidden rounded mb-4">
        <img
          src={image}
          alt={imageAlt}
          className="object-cover w-full h-full transition-transform duration-slow hover:scale-105"
        />
      </div>

      {/* Content - minimal text, Space Grotesk for industrial feel */}
      <div className="space-y-2">
        {category && (
          <p className="text-sm font-body font-medium uppercase tracking-wider text-text-tertiary">
            {category}
          </p>
        )}
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {title}
        </h3>
      </div>
    </Card>
  )
}

/**
 * ServiceCard - Specialized card for service descriptions
 *
 * Design: Text-led with icon/number
 * Clear hierarchy for B2B decision makers
 */
interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  number?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  number,
}: ServiceCardProps) {
  return (
    <Card padding="loose" surface="elevated">
      {/* Visual marker - icon or number */}
      {(icon || number) && (
        <div className="mb-5">
          {number ? (
            <span className="font-display text-5xl font-bold text-concrete-300">
              {number}
            </span>
          ) : icon}
        </div>
      )}

      {/* Content - clear hierarchy */}
      <h3 className="font-display text-2xl font-semibold text-text-primary mb-3">
        {title}
      </h3>
      <p className="font-body text-base text-text-secondary leading-relaxed">
        {description}
      </p>
    </Card>
  )
}

/**
 * TeamCard - Specialized card for staff profiles
 *
 * Design: Photo with professional details
 * B2B trust-building through team visibility
 */
interface TeamCardProps {
  photo: string
  name: string
  role: string
  phone?: string
  email?: string
}

export function TeamCard({
  photo,
  name,
  role,
  phone,
  email,
}: TeamCardProps) {
  return (
    <Card padding="base">
      {/* Photo - square aspect for consistency */}
      <div className="relative aspect-square overflow-hidden rounded mb-4">
        <img
          src={photo}
          alt={`${name}, ${role}`}
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-base"
        />
      </div>

      {/* Professional details */}
      <div className="space-y-1">
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {name}
        </h3>
        <p className="font-body text-sm text-text-secondary">
          {role}
        </p>

        {/* Contact info - only for leadership */}
        {(phone || email) && (
          <div className="mt-3 pt-3 border-t border-border-subtle space-y-1">
            {phone && (
              <p className="font-body text-sm text-text-secondary">
                <a
                  href={`tel:${phone}`}
                  className="hover:text-text-primary transition-colors"
                >
                  {phone}
                </a>
              </p>
            )}
            {email && (
              <p className="font-body text-sm text-text-secondary">
                <a
                  href={`mailto:${email}`}
                  className="hover:text-text-primary transition-colors"
                >
                  {email}
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

/**
 * Usage Examples:
 *
 * // Basic content card
 * <Card padding="base">
 *   <h3>Information</h3>
 *   <p>Details here</p>
 * </Card>
 *
 * // Interactive clickable card
 * <Card interactive onClick={() => console.log('clicked')}>
 *   <p>Click me</p>
 * </Card>
 *
 * // Project showcase
 * <ProjectCard
 *   image="/projects/demolition-01.jpg"
 *   imageAlt="Rivning av byggnad"
 *   title="NCC Rivningsprojekt"
 *   category="Rivning"
 * />
 *
 * // Service description
 * <ServiceCard
 *   number="01"
 *   title="Betonghåltagning"
 *   description="Professionell håltagning i alla material..."
 * />
 *
 * // Team member
 * <TeamCard
 *   photo="/team/kim-hansen.jpg"
 *   name="Kim Hansen"
 *   role="VD & Ägare"
 *   phone="070-34 34 179"
 *   email="kim.hansen@cityborr.com"
 * />
 *
 * Design notes:
 * - Cards use surface-elevated (white) on surface-base (off-white) backgrounds
 * - Minimal shadow (shadow-base) increases to shadow-md on hover
 * - Hover state: -1px translate-y for subtle lift (mechanical feedback)
 * - Sharp 4px corners throughout (industrial aesthetic)
 * - Project cards: image zooms slightly on hover (subtle engagement)
 * - Team cards: photos are grayscale by default, color on hover (professional → personal)
 * - No heavy shadows or excessive rounding - this is concrete, not paper
 */
