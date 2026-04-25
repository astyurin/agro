import Script from 'next/script';
import type { Metadata } from 'next';
import { breadcrumbJsonLd, faqJsonLd, organizationJsonLd, productJsonLd, serviceJsonLd } from './lib/seo-jsonld';
import { interactionsScript, renderLandingHtml } from './lib/landing-render';
import { DOCUMENT_LINKS, GUIDE_LINKS } from './lib/seo';

export const metadata: Metadata = {
  title: 'Buy Fishmeal 62-68% Protein - Remeta Agro | Commodity Trading Brazil',
  description: 'Fishmeal 62-68% protein. Confirmed buyers in Asia. Send your offer today. 48h response. Remeta Agro, Brazil.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      zh: '/zh',
      fr: '/fr',
      pt: '/pt',
      hi: '/hi',
      'x-default': '/en'
    }
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function HomePage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className='sr-only'>Buy Fishmeal 62-68% Protein - Remeta Agro</h1>
      <main dangerouslySetInnerHTML={{ __html: renderLandingHtml('en') }} />
      <section className='seo-page'>
        <div className='seo-section'>
          <h2>Regional supplier pages</h2>
          <p>Explore dedicated fishmeal buyer pages by supplier origin to match your route and improve onboarding speed.</p>
          <nav className='seo-links' aria-label='Regional supplier pages'>
            <a href='/fishmeal-buyers'>All fishmeal buyer pages</a>
            <a href='/fishmeal-buyers/india'>Fishmeal buyer India</a>
            <a href='/fishmeal-buyers/pakistan'>Fishmeal buyer Pakistan</a>
            <a href='/fishmeal-buyers/morocco'>Fishmeal buyer Morocco</a>
            <a href='/fishmeal-buyers/mauritania'>Fishmeal buyer Mauritania</a>
            <a href='/fishmeal-buyers/south-africa'>Fishmeal buyer South Africa</a>
          </nav>
        </div>
        <div className='seo-section'>
          <h2>Guides for fishmeal exporters</h2>
          <p>Use these compliance guides to prepare export documentation, registration checks, and buyer conversations.</p>
          <nav className='seo-links' aria-label='Fishmeal exporter guides'>
            {GUIDE_LINKS.map((entry) => (
              <a href={entry.href} key={entry.href}>
                {entry.label}
              </a>
            ))}
          </nav>
        </div>
        <div className='seo-section'>
          <h2>Downloadable fishmeal documents</h2>
          <p>Official PDF resources for product qualification, export readiness, and supplier review.</p>
          <nav className='seo-links' aria-label='Fishmeal PDF documents'>
            {DOCUMENT_LINKS.map((entry) => (
              <a href={entry.href} key={entry.href}>
                {entry.label}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <Script id='landing-interactions' strategy='afterInteractive'>
        {interactionsScript}
      </Script>
    </>
  );
}
