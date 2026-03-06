# Cityborr AB Design System

**Industrial & Robust - Concrete, Steel, Raw Materials**

This design system embodies the industrial authenticity of Cityborr AB's work in concrete drilling, sawing, demolition, and remediation. Every design decision reflects the company's core values: precision, strength, and professionalism.

## Design Philosophy

### 1. Industrial Authenticity
The visual language draws from raw materials:
- **Concrete**: Our primary color palette mimics concrete in various states - from polished to raw
- **Steel**: Accent colors reflect brushed and polished steel
- **Sharp edges**: Minimal border radius reflects the angular nature of construction materials

### 2. Clean Professionalism
Inspired by Boliden's B2B aesthetic:
- **Generous whitespace**: Let content breathe, don't crowd the page
- **Clear hierarchy**: Information architecture that guides large contractors to what they need
- **Restrained palette**: Black, white, concrete gray - the work itself provides the color

### 3. Modern Movement
Subtle animations bring life without distraction:
- **Purposeful motion**: Every animation has a reason
- **Industrial timing**: Mechanical easing curves that feel precise and intentional
- **Performance first**: Smooth 60fps animations that don't slow down the experience

---

## Color Palette

### Surface Colors
Used for backgrounds and surfaces throughout the site.

```css
--color-surface-dark: #0a0a0a      /* Near-black backgrounds */
--color-surface-base: #fafaf9      /* Off-white, warm concrete feel */
--color-surface-elevated: #ffffff  /* Pure white for cards */
```

**Usage**: `surface-base` is the primary background. Use `surface-elevated` for cards and elevated elements. `surface-dark` for dark sections or footer.

### Text Colors
High-contrast text for maximum readability.

```css
--color-text-primary: #0f0f0f      /* Primary headings and body text */
--color-text-secondary: #525252    /* Supporting text, descriptions */
--color-text-tertiary: #a3a3a3     /* Captions, labels, meta information */
--color-text-inverse: #fafaf9      /* Text on dark backgrounds */
```

**Usage**: Use `text-primary` for most text. `text-secondary` for descriptions and less emphasized content. `text-tertiary` for labels, captions, and timestamps.

### Concrete Scale
The heart of the industrial palette - concrete in various forms.

```css
concrete-50  → #fafaf9  /* Polished concrete */
concrete-100 → #f5f5f4
concrete-200 → #e7e5e4  /* Light concrete */
concrete-300 → #d6d3d1
concrete-400 → #a8a29e
concrete-500 → #78716c  /* Raw concrete */
concrete-600 → #57534e
concrete-700 → #44403c
concrete-800 → #292524  /* Almost asphalt */
concrete-900 → #1c1917  /* Wet concrete, darkest */
```

**Usage**: Primary color family. Use lighter shades (50-300) for backgrounds and subtle elements. Mid-range (400-600) for borders and UI elements. Darker shades (700-900) for text on light backgrounds or dark sections.

### Steel Accents
Subtle metallic accents for UI elements.

```css
--color-steel-light: #e4e4e7  /* Polished steel */
--color-steel-base: #a1a1aa   /* Brushed steel */
--color-steel-dark: #52525b   /* Dark steel */
```

**Usage**: Use sparingly for hover states, icons, and subtle UI elements that need distinction from concrete tones.

### Safety Accents
Construction-inspired accent colors - **use sparingly**.

```css
--color-accent-warning: #eab308  /* Safety yellow */
--color-accent-danger: #dc2626   /* Safety red */
```

**Usage**: Only for important UI states - warnings, errors, CTAs. These are intentionally vibrant to stand out from the restrained palette.

### Border Colors
Subtle to strong borders for different contexts.

```css
--color-border-subtle: #e7e5e4   /* Barely visible borders */
--color-border-default: #d6d3d1  /* Standard borders */
--color-border-strong: #a8a29e   /* Emphasized borders */
```

---

## Typography

### Font Families

**Space Grotesk** (Headings & Display)
- Geometric and industrial
- Modern, technical feel
- Strong presence for headlines
- Use for: H1, H2, H3, display text

**IBM Plex Sans** (Body Text)
- Designed for technical contexts (originally for IBM)
- Excellent readability
- Professional and neutral
- Use for: Body text, paragraphs, UI labels

### Font Scale

```
7xl → 72px  /* Hero headings */
6xl → 60px  /* Large page headings */
5xl → 48px  /* Section headings */
4xl → 36px  /* H1 */
3xl → 30px  /* H2 */
2xl → 24px  /* H3 */
xl  → 20px  /* H4 */
lg  → 18px  /* Large body text */
base → 16px /* Standard body text */
sm  → 14px  /* Small text, captions */
xs  → 12px  /* Labels, metadata */
```

### Typography Rules

1. **Headings use Space Grotesk**, body text uses IBM Plex Sans
2. **Tighter tracking on large headings** (-0.02em on 4xl+)
3. **Wider tracking on small uppercase text** (0.05em+ for labels)
4. **Line height decreases with size**:
   - Headings: 1.1-1.3
   - Body: 1.5
   - Comfortable reading: 1.7
5. **Font weights**:
   - Light (300): Rarely used, special cases only
   - Normal (400): Body text
   - Medium (500): Emphasized text, small headings
   - Semibold (600): Large headings
   - Bold (700): Extra emphasis, hero headings

---

## Spacing System

Spacing uses **larger jumps** to encourage intentional spacing decisions:

```
1 → 4px    /* Tight, related elements */
2 → 8px    /* Close grouping */
3 → 16px   /* Standard spacing */
4 → 24px   /* Comfortable spacing */
5 → 32px   /* Section spacing */
6 → 48px   /* Large section breaks */
7 → 64px   /* Generous spacing */
8 → 96px   /* Very generous */
9 → 128px  /* Dramatic spacing */
```

### Spacing Principles

1. **Vary your spacing** - Don't use the same padding everywhere
2. **Use larger jumps** - Go from `space-3` to `space-5`, skip `space-4`
3. **Generous whitespace** - Inspired by Boliden, let content breathe
4. **Asymmetric spacing** - Different top/bottom padding creates rhythm

**Example**: A hero section might use `space-9` (128px) top padding, but only `space-6` (48px) bottom padding.

---

## Border Radius

Minimal rounding reflects the angular nature of concrete and steel:

```
none → 0px   /* Sharp corners */
sm → 2px     /* Subtle softening */
base → 4px   /* Default radius */
md → 6px     /* Medium radius */
lg → 8px     /* Larger elements like cards */
```

**Default**: Use `radius-base` (4px) for most elements. Reserve `radius-none` for strict industrial contexts. Rarely go above `radius-lg`.

---

## Shadows

Subtle, realistic shadows that mimic natural light on concrete:

```
sm → Subtle contact shadow (1px blur)
base → Default elevation (3px blur)
md → Medium elevation (6px blur)
lg → Pronounced elevation (15px blur)
xl → Maximum elevation (25px blur)
```

**Usage**: Use shadows sparingly. Default cards use `shadow-base`. Hovering cards might go to `shadow-md`. Heavy shadows are rarely needed in industrial design.

---

## Animations & Transitions

### Duration
```
fast → 150ms  /* Micro-interactions, hover states */
base → 250ms  /* Standard transitions */
slow → 350ms  /* Complex animations, page transitions */
```

### Easing (Timing Functions)
```
industrial → cubic-bezier(0.4, 0, 0.2, 1)  /* Standard easing */
sharp → cubic-bezier(0.4, 0, 0.6, 1)       /* Snappy, mechanical */
smooth → cubic-bezier(0.4, 0, 0.1, 1)      /* Very smooth */
```

**Principle**: Animations should feel **mechanical and precise**, like industrial equipment. Avoid bouncy or elastic effects.

---

## Layout Guidelines

### Max Widths
```
prose → 65ch        /* Comfortable reading width */
container → 1280px  /* Max content width */
wide → 1536px       /* Wide sections (rare) */
```

### Grid
Default grid gap: `--space-6` (48px) - generous spacing between grid items.

### Breakpoints
```
sm → 640px    /* Small tablets */
md → 768px    /* Tablets */
lg → 1024px   /* Small laptops */
xl → 1280px   /* Desktops */
2xl → 1536px  /* Large desktops */
```

---

## Usage Guidelines

### DO:
- ✅ Use generous whitespace (like Boliden)
- ✅ Let concrete tones dominate the palette
- ✅ Add subtle animations on scroll and hover
- ✅ Vary spacing between sections
- ✅ Use sharp corners for industrial feel
- ✅ Keep accent colors sparse and intentional

### DON'T:
- ❌ Add too much color - keep it restrained
- ❌ Use the same spacing everywhere
- ❌ Round corners too much
- ❌ Add heavy, unrealistic shadows
- ❌ Overuse animations - be subtle
- ❌ Crowd the design - embrace whitespace

---

## File Structure

```
src/styles/
  theme.css           → CSS custom properties, utility classes
  design-tokens.ts    → TypeScript tokens for programmatic access
tailwind.config.ts    → Tailwind configuration
```

### Importing

**In CSS/SCSS:**
```css
@import '../styles/theme.css';
```

**In TypeScript:**
```typescript
import { designTokens, getColor } from '@/styles/design-tokens'

const primaryColor = getColor('concrete.900')
```

**Using Tailwind:**
```tsx
<div className="bg-surface-base text-text-primary">
  <h1 className="font-display text-4xl font-semibold">Heading</h1>
</div>
```

---

## Inspiration & References

- **Boliden.com**: Clean B2B design, generous whitespace, professional feel
- **Raw materials**: Concrete, steel, industrial surfaces
- **Construction equipment**: Precise, mechanical, purposeful

---

**This is a living system.** As Cityborr AB's brand evolves, the design system should evolve with it - but always maintaining the core industrial authenticity and professional B2B aesthetic.
