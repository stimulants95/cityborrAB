'use client'

import { Navbar, Container } from '@/components'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
        {/* Page Header */}
        <section className="relative bg-surface-base overflow-hidden border-b border-border-subtle">
          <div className="max-w-container mx-auto px-6 pt-9 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Label */}
              <p className="
                font-body
                text-sm
                font-medium
                uppercase
                tracking-wider
                text-text-tertiary
                mb-4
              ">
                Kontakt
              </p>

              {/* Heading */}
              <h1 className="
                font-display
                text-4xl sm:text-5xl lg:text-6xl
                font-bold
                text-text-primary
                leading-tight
                tracking-tighter
                max-w-4xl
              ">
                Låt oss hjälpa er med ert projekt
              </h1>

              {/* Description */}
              <p className="
                mt-6
                font-body
                text-lg sm:text-xl
                text-text-secondary
                leading-relaxed
                max-w-3xl
              ">
                Kontakta oss för en skräddarsydd offert för ert projekt. Vi svarar vanligtvis inom 24 timmar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content - Form + Info */}
        <section className="bg-surface-base py-9">
          <Container maxWidth="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Contact Form - Left side (7 columns) */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="bg-surface-elevated border border-border-subtle rounded p-7">
                  <h2 className="
                    font-display
                    text-2xl
                    font-semibold
                    text-text-primary
                    mb-6
                  ">
                    Skicka ett meddelande
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="
                          block
                          font-body
                          text-sm
                          font-medium
                          text-text-primary
                          mb-2
                        "
                      >
                        Namn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="
                          w-full
                          px-4 py-3
                          font-body
                          text-base
                          text-text-primary
                          bg-surface-base
                          border border-border-subtle
                          rounded
                          focus:outline-none
                          focus:border-accent-yellow
                          transition-colors
                          duration-200
                        "
                        placeholder="Ditt namn"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="
                          block
                          font-body
                          text-sm
                          font-medium
                          text-text-primary
                          mb-2
                        "
                      >
                        E-post *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="
                          w-full
                          px-4 py-3
                          font-body
                          text-base
                          text-text-primary
                          bg-surface-base
                          border border-border-subtle
                          rounded
                          focus:outline-none
                          focus:border-accent-yellow
                          transition-colors
                          duration-200
                        "
                        placeholder="din@email.com"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="
                          block
                          font-body
                          text-sm
                          font-medium
                          text-text-primary
                          mb-2
                        "
                      >
                        Meddelande *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="
                          w-full
                          px-4 py-3
                          font-body
                          text-base
                          text-text-primary
                          bg-surface-base
                          border border-border-subtle
                          rounded
                          focus:outline-none
                          focus:border-accent-yellow
                          transition-colors
                          duration-200
                          resize-none
                        "
                        placeholder="Beskriv ert projekt och era behov..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        w-full
                        px-6 py-3
                        font-body font-medium
                        bg-accent-yellow
                        text-concrete-900
                        rounded
                        hover:bg-accent-yellow-hover
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                        transition-colors
                        duration-200
                      "
                    >
                      {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                    </button>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="
                          p-4
                          bg-green-50
                          border border-green-200
                          rounded
                        "
                      >
                        <p className="font-body text-sm text-green-800">
                          Tack för ditt meddelande! Vi återkommer inom 24 timmar.
                        </p>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Contact Information - Right side (5 columns) */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="space-y-8">
                  {/* Contact Details Card */}
                  <div className="bg-surface-elevated border border-border-subtle rounded p-7">
                    <h3 className="
                      font-display
                      text-xl
                      font-semibold
                      text-text-primary
                      mb-6
                    ">
                      Kontaktinformation
                    </h3>

                    <div className="space-y-5">
                      {/* Address */}
                      <div>
                        <p className="
                          font-body
                          text-sm
                          font-medium
                          uppercase
                          tracking-wider
                          text-text-tertiary
                          mb-2
                        ">
                          Adress
                        </p>
                        <p className="font-body text-base text-text-primary">
                          Spårvägen 23<br />
                          903 31 Umeå
                        </p>
                      </div>

                      {/* Phone */}
                      <div>
                        <p className="
                          font-body
                          text-sm
                          font-medium
                          uppercase
                          tracking-wider
                          text-text-tertiary
                          mb-2
                        ">
                          Telefon
                        </p>
                        <a
                          href="tel:0703434179"
                          className="
                            font-body
                            text-base
                            text-text-primary
                            hover:text-accent-yellow
                            transition-colors
                          "
                        >
                          070-34 34 179
                        </a>
                      </div>

                      {/* Email */}
                      <div>
                        <p className="
                          font-body
                          text-sm
                          font-medium
                          uppercase
                          tracking-wider
                          text-text-tertiary
                          mb-2
                        ">
                          E-post
                        </p>
                        <a
                          href="mailto:info@cityborr.com"
                          className="
                            font-body
                            text-base
                            text-text-primary
                            hover:text-accent-yellow
                            transition-colors
                          "
                        >
                          info@cityborr.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Opening Hours Card */}
                  <div className="bg-surface-elevated border border-border-subtle rounded p-7">
                    <h3 className="
                      font-display
                      text-xl
                      font-semibold
                      text-text-primary
                      mb-6
                    ">
                      Öppettider
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-body text-base text-text-secondary">
                          Måndag - Fredag
                        </span>
                        <span className="font-body text-base font-medium text-text-primary">
                          07:00 - 16:00
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-base text-text-secondary">
                          Lördag - Söndag
                        </span>
                        <span className="font-body text-base font-medium text-text-primary">
                          Stängt
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-concrete-900 text-text-inverse rounded p-7">
                    <h3 className="
                      font-display
                      text-xl
                      font-semibold
                      mb-3
                    ">
                      Akut projekt?
                    </h3>
                    <p className="font-body text-sm text-concrete-400 mb-4">
                      Ring oss direkt för snabb hantering av brådskande ärenden.
                    </p>
                    <a
                      href="tel:0703434179"
                      className="
                        inline-flex items-center justify-center
                        w-full
                        px-6 py-3
                        font-body font-medium
                        bg-accent-yellow
                        text-concrete-900
                        rounded
                        hover:bg-accent-yellow-hover
                        transition-colors
                        duration-200
                      "
                    >
                      Ring 070-34 34 179
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
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

/**
 * Design Notes:
 *
 * Layout:
 * - Asymmetric 7/5 grid: Form on left (larger), info cards on right
 * - Stacks vertically on mobile for better usability
 * - Form gets primary focus with larger real estate
 *
 * Form Design:
 * - Clean, minimal inputs with subtle borders
 * - Yellow focus state for industrial accent
 * - Proper label-input association for accessibility
 * - Loading and success states
 * - No placeholder-only labels (accessibility)
 *
 * Contact Cards:
 * - Three separate cards: Contact info, Opening hours, Quick contact
 * - Visual hierarchy through card arrangement
 * - "Akut projekt" card with dark background for emphasis
 *
 * Typography:
 * - Page title: Large (4xl → 5xl → 6xl) Space Grotesk
 * - Card headings: XL Space Grotesk, semibold
 * - Labels: Small uppercase with wide tracking
 * - Form text: Base size, comfortable to read
 *
 * Industrial Aesthetic:
 * - Concrete color palette
 * - Minimal border radius (4px)
 * - Yellow accent for CTAs and focus states
 * - Sharp, functional design
 * - No decorative elements
 *
 * Accessibility:
 * - Proper form labels (not placeholder-only)
 * - Focus indicators on all interactive elements
 * - Semantic HTML (address, form elements)
 * - High contrast text
 * - Keyboard navigable
 */
