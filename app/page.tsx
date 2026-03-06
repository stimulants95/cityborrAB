'use client'

import { Navbar, Hero, AboutSection, ValuesSection, Container, Button } from '@/components'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar
        logo="/cityborr-logo.jpg"
        companyName="Cityborr AB"
        links={[
          { href: '/', label: 'Hem' },
          { href: '/tjanster', label: 'Tjänster' },
          { href: '/projekt', label: 'Projekt / bilder' },
          { href: '/personal', label: 'Personal' },
          { href: '/kontakt', label: 'Kontakt' },
        ]}
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />

      <main>
        {/* Hero Section - Industrial landing statement */}
        <Hero
          heading="Din specialist på betonghåltagning, sågning, rivning & sanering"
          description="Professionella demoleringstjänster för stora byggföretag i Umeå sedan 2011."
          ctaLabel="Begär offert"
          ctaHref="/kontakt"
          secondaryCtaLabel="Se våra projekt"
          secondaryCtaHref="/projekt"
        />

        {/* About Section - Company introduction */}
        <AboutSection
          founded="2011"
          ceo="Kim Hansen"
          leadDemolition="Daniel Persson"
          description="Tillsammans har vi stor erfarenhet och kunskap inom branschen. Vårt team står för ett väl utfört arbete med hög kvalitet. Vi lämnar alltid arbetsplatsen ren och snygg efter utfört arbete. Vår planering, kreativitet och snabbhet skiljer oss från konkurrenterna, vilket garanterar effektiva och pålitliga resultat varje gång."
        />

        {/* Values Section - Quality and environmental commitment */}
        <ValuesSection
          values={[
            {
              title: 'Kvalitet & Precision',
              description: 'Vi lämnar alltid arbetsplatsen ren och snygg efter utfört arbete. Vår planering, kreativitet och snabbhet skiljer oss från konkurrenterna, vilket garanterar effektiva och pålitliga resultat varje gång.',
            },
            {
              title: 'Miljöansvar',
              description: 'Vi tar stort ansvar för miljön och har som mål att ta hand om rivningsmaterial som kan återbrukas. Vi ger saker en andra chans!',
            },
          ]}
        />

        {/* CTA Section - Simple, direct */}
        <section className="bg-surface-base py-9">
          <Container maxWidth="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-4xl font-semibold text-text-primary mb-5">
                Redo att starta ditt projekt?
              </h2>
              <p className="font-body text-lg text-text-secondary mb-7 leading-relaxed">
                Kontakta oss idag för en skräddarsydd offert. Vi hjälper er med professionell betonghåltagning, rivning och sanering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = '/kontakt'}
                >
                  Kontakta oss
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/tjanster'}
                >
                  Se våra tjänster
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer - Simple, industrial */}
      <footer className="bg-surface-dark py-8 border-t border-concrete-800">
        <Container maxWidth="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company info */}
            <div>
              <h3 className="font-display text-lg font-semibold text-text-inverse mb-3">
                Cityborr i Umeå AB
              </h3>
              <p className="font-body text-sm text-concrete-400">
                Din specialist på betonghåltagning, sågning, rivning & sanering sedan 2011.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-display text-lg font-semibold text-text-inverse mb-3">
                Snabblänkar
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Hem', href: '/' },
                  { label: 'Tjänster', href: '/tjanster' },
                  { label: 'Projekt / bilder', href: '/projekt' },
                  { label: 'Personal', href: '/personal' },
                  { label: 'Kontakt', href: '/kontakt' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-concrete-400 hover:text-text-inverse transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-lg font-semibold text-text-inverse mb-3">
                Kontakt
              </h3>
              <address className="font-body text-sm text-concrete-400 not-italic space-y-2">
                <p>Spårvägen 23<br />903 31 Umeå</p>
                <p>
                  <a href="tel:0703434179" className="hover:text-text-inverse transition-colors">
                    070-34 34 179
                  </a>
                </p>
                <p>
                  <a href="mailto:info@cityborr.com" className="hover:text-text-inverse transition-colors">
                    info@cityborr.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-concrete-800">
            <p className="font-body text-sm text-concrete-500 text-center">
              © {new Date().getFullYear()} Cityborr i Umeå AB. Alla rättigheter förbehållna.
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}
