import React from 'react'

/**
 * Container Component - Industrial Layout Foundation
 *
 * Design rationale:
 * - Generous whitespace inspired by Boliden's B2B aesthetic
 * - Flexible max-width system for varying content density
 * - Asymmetric padding options to create visual rhythm
 * - No decorative elements - pure functional layout
 *
 * This is not a generic container - it embodies Cityborr's
 * industrial principle: structural integrity without ornamentation.
 */

interface ContainerProps {
  children: React.ReactNode
  /** Max width variant - affects content density */
  maxWidth?: 'prose' | 'container' | 'wide' | 'full'
  /** Padding size - use larger jumps for rhythm */
  padding?: 'none' | 'sm' | 'base' | 'lg' | 'xl'
  /** Asymmetric padding - different top/bottom for visual interest */
  paddingTop?: 'none' | 'sm' | 'base' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'base' | 'lg' | 'xl'
  /** Element type for semantic HTML */
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer'
  /** Additional classes for specific needs */
  className?: string
}

const maxWidthClasses = {
  prose: 'max-w-prose',        // 65ch - comfortable reading
  container: 'max-w-container', // 1280px - standard content
  wide: 'max-w-wide',           // 1536px - wide sections
  full: 'max-w-full',           // No limit - full bleed
}

const paddingClasses = {
  none: '',
  sm: 'px-5 py-6',    // 32px horizontal, 48px vertical
  base: 'px-6 py-7',  // 48px horizontal, 64px vertical
  lg: 'px-7 py-8',    // 64px horizontal, 96px vertical
  xl: 'px-8 py-9',    // 96px horizontal, 128px vertical
}

const paddingTopClasses = {
  none: 'pt-0',
  sm: 'pt-6',   // 48px
  base: 'pt-7', // 64px
  lg: 'pt-8',   // 96px
  xl: 'pt-9',   // 128px
}

const paddingBottomClasses = {
  none: 'pb-0',
  sm: 'pb-6',   // 48px
  base: 'pb-7', // 64px
  lg: 'pb-8',   // 96px
  xl: 'pb-9',   // 128px
}

export function Container({
  children,
  maxWidth = 'container',
  padding,
  paddingTop,
  paddingBottom,
  as: Element = 'div',
  className = '',
}: ContainerProps) {
  // Determine padding classes
  const getPaddingClasses = () => {
    if (paddingTop || paddingBottom) {
      // Asymmetric padding - creates rhythm
      return `${paddingTop ? paddingTopClasses[paddingTop] : ''} ${
        paddingBottom ? paddingBottomClasses[paddingBottom] : ''
      } px-6`
    }
    return padding ? paddingClasses[padding] : paddingClasses.base
  }

  return (
    <Element
      className={`
        ${maxWidthClasses[maxWidth]}
        ${getPaddingClasses()}
        mx-auto
        w-full
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </Element>
  )
}

/**
 * Usage Examples:
 *
 * // Standard content section with symmetric padding
 * <Container maxWidth="container" padding="base">
 *   <h2>Våra tjänster</h2>
 * </Container>
 *
 * // Asymmetric padding for visual rhythm
 * <Container
 *   maxWidth="wide"
 *   paddingTop="xl"     // 128px top - dramatic entry
 *   paddingBottom="lg"  // 96px bottom - less exit space
 * >
 *   <HeroSection />
 * </Container>
 *
 * // Readable text content
 * <Container maxWidth="prose" padding="lg">
 *   <article>Long form content</article>
 * </Container>
 *
 * // Full-width section with minimal padding
 * <Container maxWidth="full" padding="sm">
 *   <ImageGallery />
 * </Container>
 */
