/**
 * Cityborr AB Design Tokens
 * Industrial & Robust Design System
 *
 * Use these tokens for programmatic access to design values
 */

export const designTokens = {
  colors: {
    surface: {
      dark: '#0a0a0a',
      base: '#fafaf9',
      elevated: '#ffffff',
    },
    text: {
      primary: '#0f0f0f',
      secondary: '#525252',
      tertiary: '#a3a3a3',
      inverse: '#fafaf9',
    },
    concrete: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
    },
    steel: {
      light: '#e4e4e7',
      base: '#a1a1aa',
      dark: '#52525b',
    },
    accent: {
      warning: '#eab308',
      danger: '#dc2626',
    },
    border: {
      subtle: '#e7e5e4',
      default: '#d6d3d1',
      strong: '#a8a29e',
    },
  },
  typography: {
    fontFamily: {
      display: "'Space Grotesk', system-ui, sans-serif",
      body: "'IBM Plex Sans', system-ui, sans-serif",
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.3,
      normal: 1.5,
      relaxed: 1.7,
    },
    letterSpacing: {
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  spacing: {
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '1rem',      // 16px
    4: '1.5rem',    // 24px
    5: '2rem',      // 32px
    6: '3rem',      // 48px
    7: '4rem',      // 64px
    8: '6rem',      // 96px
    9: '8rem',      // 128px
  },
  borderRadius: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    duration: {
      fast: '150ms',
      base: '250ms',
      slow: '350ms',
    },
    timing: {
      industrial: 'cubic-bezier(0.4, 0, 0.2, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      smooth: 'cubic-bezier(0.4, 0, 0.1, 1)',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  layout: {
    maxWidth: {
      prose: '65ch',
      container: '1280px',
      wide: '1536px',
    },
  },
} as const

export type DesignTokens = typeof designTokens

// Type-safe color accessor
export type ColorPath =
  | `surface.${keyof typeof designTokens.colors.surface}`
  | `text.${keyof typeof designTokens.colors.text}`
  | `concrete.${keyof typeof designTokens.colors.concrete}`
  | `steel.${keyof typeof designTokens.colors.steel}`
  | `accent.${keyof typeof designTokens.colors.accent}`
  | `border.${keyof typeof designTokens.colors.border}`

// Helper function to get color by path
export function getColor(path: ColorPath): string {
  const [category, shade] = path.split('.') as [string, string]
  const colorCategory = designTokens.colors[category as keyof typeof designTokens.colors]
  if (colorCategory && typeof colorCategory === 'object') {
    return (colorCategory as Record<string, string>)[shade] || ''
  }
  return ''
}
