import type { Metadata } from 'next';
import Link from 'next/link';
import { COUNTRY_PAGES, SITE_URL } from '../lib/seo';

export const metadata: Metadata = {
  title: 'Fishmeal Buyers by Country | Remeta Agro',
  description:
    'Regional fishmeal supplier onboarding pages: India, Pakistan, Morocco, Mauritania, South Africa. See quality specs and start supply with Remeta Agro.',
  alternates: {
    canonical: '/fishmeal-buyers'
  },
  openGraph: {
    title: 'Fishmeal Buyers by Country | Remeta Agro',
    description:
      'Regional supplier onboarding pages for fishmeal 62-68% protein. Confirmed buyers in Asia. 48h response.',
    url: `${SITE_URL}/fishmeal-buyers`,
    type: 'website'
  }
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Fishmeal Buyers by Country', item: `${SITE_URL}/fishmeal-buyers` }
  ]
};

export default function FishmealBuyersIndexPage() {
  return (
    <main className='seo-page'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className='seo-hero'>
        <p className='seo-kicker'>Supplier Routing</p>
        <h1>Fishmeal Buyers by Country</h1>
        <p>
          We buy fishmeal 62-68% protein globally and route suppliers by origin for faster qualification,
          inspection, and trial shipment execution.
        </p>
      </header>

      <section className='seo-section'>
        <h2>Country-specific entry points</h2>
        <p>
          Use your country page to review supply fit and start onboarding. Each page includes required quality
          profile, compliance expectations, and direct contact channels.
        </p>
        <div className='seo-grid'>
          {COUNTRY_PAGES.map((entry) => (
            <article className='seo-card' key={entry.slug}>
              <h3>{entry.country}</h3>
              <p>{entry.summary}</p>
              <Link href={`/fishmeal-buyers/${entry.slug}`}>Open {entry.country} page</Link>
            </article>
          ))}
        </div>
      </section>

      <section className='seo-section'>
        <h2>General fishmeal specification</h2>
        <ul className='seo-list'>
          <li>Protein: 62-68% (priority on higher stable protein lots)</li>
          <li>Moisture: up to 8%</li>
          <li>Fat: up to 10%</li>
          <li>Histamine: up to 500 mg/kg</li>
          <li>Independent inspection support: SGS / Bureau Veritas preferred</li>
        </ul>
      </section>

      <nav className='seo-links' aria-label='Internal links'>
        <Link href='/'>Back to main landing</Link>
      </nav>
    </main>
  );
}
