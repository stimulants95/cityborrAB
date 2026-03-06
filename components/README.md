# Cityborr AB Component Library

Industrial & robust components designed specifically for Cityborr AB's B2B construction services website.

## Design Philosophy

These components are **not generic** - they embody Cityborr AB's industrial authenticity:
- **Concrete & Steel aesthetic**: Sharp corners, restrained colors, minimal decoration
- **Generous whitespace**: Inspired by Boliden's professional B2B design
- **Mechanical interactions**: Precise, snappy transitions like industrial equipment
- **B2B credibility**: Professional, trustworthy, no playful elements

## Components

### Layout

#### Container
**Purpose**: Foundation layout wrapper with generous whitespace and flexible max-widths.

**Features**:
- Multiple max-width variants (prose, container, wide, full)
- Asymmetric padding options for visual rhythm
- Semantic HTML element selection

**Usage**:
```tsx
import { Container } from '@/components'

<Container maxWidth="container" padding="base">
  <h1>Content here</h1>
</Container>

// Asymmetric padding for rhythm
<Container paddingTop="xl" paddingBottom="lg">
  <HeroSection />
</Container>
```

---

### UI Components

#### Button
**Purpose**: Industrial interaction element with mechanical state transitions.

**Features**:
- 4 variants: primary (safety yellow), secondary (concrete), outline, ghost
- 3 sizes with meaningful jumps
- Loading states
- Sharp corners (4px) - no soft, rounded edges
- Mechanical hover/active feedback

**Usage**:
```tsx
import { Button } from '@/components'

// Primary CTA - safety yellow
<Button variant="primary" size="lg">
  Begär offert
</Button>

// Secondary action
<Button variant="secondary">
  Kontakta oss
</Button>

// Loading state
<Button variant="primary" loading>
  Skickar...
</Button>
```

**Design notes**:
- Primary uses safety yellow (construction industry signaling)
- Active state translates 1px (mechanical press feedback)
- Sharp easing for industrial precision

---

#### Card
**Purpose**: Industrial content container for projects, services, team members.

**Features**:
- Base Card with flexible padding and interactivity
- ProjectCard - image-led project showcase
- ServiceCard - text-led service descriptions with icons/numbers
- TeamCard - professional team member profiles

**Usage**:
```tsx
import { Card, ProjectCard, ServiceCard, TeamCard } from '@/components'

// Basic content card
<Card padding="base">
  <h3>Information</h3>
  <p>Details</p>
</Card>

// Project showcase
<ProjectCard
  image="/projects/demolition-01.jpg"
  imageAlt="Rivning av byggnad"
  title="NCC Rivningsprojekt"
  category="Rivning"
/>

// Service description
<ServiceCard
  number="01"
  title="Betonghåltagning"
  description="Professionell håltagning i alla material..."
/>

// Team member
<TeamCard
  photo="/team/kim-hansen.jpg"
  name="Kim Hansen"
  role="VD & Ägare"
  phone="070-34 34 179"
  email="kim.hansen@cityborr.com"
/>
```

**Design notes**:
- Minimal shadows (like concrete slabs, not floating paper)
- Sharp 4px corners throughout
- Hover state: subtle lift with increased shadow
- Project images zoom slightly on hover
- Team photos are grayscale, color on hover (professional → personal)

---

### Navigation

#### Navbar
**Purpose**: Industrial navigation system - not generic horizontal nav.

**Features**:
- Desktop: Clean layout with logo prominent, navigation functional
- Mobile: Side drawer with generous spacing (not cramped hamburger)
- Link underline animation on hover
- Optional CTA button (safety yellow)
- Contact info in mobile menu (added value)

**Usage**:
```tsx
import { Navbar } from '@/components'

<Navbar
  logo="/cityborr-logo.jpg"
  companyName="Cityborr AB"
  links={[
    { href: '/', label: 'Hem' },
    { href: '/tjanster', label: 'Tjänster' },
    { href: '/projekt', label: 'Projekt' },
    { href: '/personal', label: 'Personal' },
    { href: '/kontakt', label: 'Kontakt' },
  ]}
  ctaLabel="Begär offert"
  ctaHref="/kontakt"
/>
```

**Design notes**:
- No generic "logo left, links center, CTA right"
- Desktop links have industrial underline animation
- Mobile menu is side drawer with generous space
- Square line caps on icons (industrial aesthetic)
- Generous padding inspired by Boliden

---

## Color Usage

All components use design system tokens:

**Primary palette**: Concrete (50-900)
- Lighter shades (50-300): backgrounds, subtle elements
- Mid-range (400-600): borders, UI elements
- Darker shades (700-900): text, emphasis

**Accent colors** (use sparingly):
- Safety yellow: Primary CTAs, important actions
- Steel: Hover states, icons

**Shadows**: Minimal, realistic (like natural light on concrete)

---

## Typography

- **Headings**: Space Grotesk (geometric, industrial)
- **Body**: IBM Plex Sans (technical, readable)
- **Labels**: Uppercase with wide tracking (0.05em+)

---

## Spacing

Components use larger spacing jumps (4, 8, 16, 24, 32, 48, 64, 96, 128px):
- Encourages generous whitespace
- Creates visual rhythm through variation
- Inspired by Boliden's professional B2B aesthetic

---

## Accessibility

All components include:
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast meeting WCAG AA (4.5:1)
- ✅ Descriptive alt text

---

## Anti-Patterns Avoided

These components explicitly avoid:
- ❌ Generic rounded corners everywhere
- ❌ Heavy, unrealistic shadows
- ❌ Bouncy or elastic animations
- ❌ Centered-everything layouts
- ❌ Too much color
- ❌ Generic hamburger menus
- ❌ Identical card sizing
- ❌ Playful or casual elements

---

## File Structure

```
components/
├── layout/
│   └── Container.tsx       # Layout wrapper
├── ui/
│   ├── Button.tsx          # Action buttons
│   └── Card.tsx            # Content containers
├── navigation/
│   └── Navbar.tsx          # Navigation system
├── index.ts                # Exports
└── README.md               # This file
```

---

## Next Steps

When building pages, combine these components with:
1. **Framer Motion** for subtle scroll and hover animations
2. **Varying layouts** - no two sections should look identical
3. **Generous whitespace** - embrace the Boliden-inspired spacing
4. **Real content** - let Cityborr's actual work provide the visual interest

---

**Remember**: These components are designed for Cityborr AB's industrial B2B aesthetic. Every design decision reflects concrete, steel, and professional credibility.
