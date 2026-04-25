import Script from 'next/script';
import type { Metadata } from 'next';
import { breadcrumbJsonLd, faqJsonLd, organizationJsonLd, productJsonLd, serviceJsonLd } from './lib/seo-jsonld';
import { interactionsScript, renderLandingHtml } from './lib/landing-render';

export const metadata: Metadata = {
  title: 'Buy Fishmeal 62-68% Protein - Remeta Agro | Commodity Trading Brazil',
  description: 'Fishmeal 62-68% protein. Confirmed buyers in Asia. Send your offer today. 48h response. Remeta Agro, Brazil.',
  alternates: {
    canonical: '/en'
  },
  robots: {
    index: false,
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
      </section>
      <Script id='landing-interactions' strategy='afterInteractive'>
        {interactionsScript}
      </Script>
    </>
  );
}
