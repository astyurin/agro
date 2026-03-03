import type { Metadata } from 'next';
import Link from 'next/link';
import { COUNTRY_PAGES, SITE_URL } from '../../lib/seo';

type Params = { country: string };

export function generateStaticParams() {
  return COUNTRY_PAGES.map((entry) => ({ country: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolved = await params;
  const entry = COUNTRY_PAGES.find((item) => item.slug === resolved.country);

  if (!entry) {
    return {
      title: 'Fishmeal Supplier Page | Remeta Agro',
      robots: { index: false, follow: false }
    };
  }

  const title = `Fishmeal Buyer ${entry.country} | Remeta Agro`;
  const description = `${entry.summary} Key sourcing cities: ${entry.cities}. Send your offer and COA for review within 48 hours.`;
  const path = `/fishmeal-buyers/${entry.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    keywords: [
      `fishmeal buyer ${entry.country}`,
      `fish meal importer ${entry.country}`,
      `fishmeal ${entry.cities}`,
      'fishmeal 62 68 protein buyer',
      'fishmeal supplier onboarding'
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      type: 'article'
    },
    twitter: {
      card: 'summary',
      title,
      description
    }
  };
}

export default async function CountryFishmealPage({ params }: { params: Promise<Params> }) {
  const resolved = await params;
  const entry = COUNTRY_PAGES.find((item) => item.slug === resolved.country);

  if (!entry) {
    return (
      <main className='seo-page'>
        <h1>Page not found</h1>
        <Link href='/fishmeal-buyers'>Open fishmeal country pages</Link>
      </main>
    );
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Fishmeal Buyers by Country', item: `${SITE_URL}/fishmeal-buyers` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Fishmeal Buyer ${entry.country}`,
        item: `${SITE_URL}/fishmeal-buyers/${entry.slug}`
      }
    ]
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you buy fishmeal from ${entry.country}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. ${entry.summary}`
        }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum onboarding flow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Share COA and offer, submit a sample for verification, then run a 1-3 container trial shipment before scaling.'
        }
      },
      {
        '@type': 'Question',
        name: 'How fast do you respond?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Initial commercial response target is within 48 hours after receiving product data and offer terms.'
        }
      }
    ]
  };

  return (
    <main className='seo-page'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className='seo-hero'>
        <p className='seo-kicker'>Country Sourcing Page</p>
        <h1>Fishmeal Buyer in {entry.country}</h1>
        <p>{entry.summary}</p>
      </header>

      <section className='seo-section'>
        <h2>Target locations and supplier profile</h2>
        <p>
          Key sourcing areas: {entry.cities}. {entry.details}
        </p>
      </section>

      <section className='seo-section'>
        <h2>Required quality and compliance</h2>
        <ul className='seo-list'>
          <li>Protein range: 62-68%</li>
          <li>Moisture: up to 8%, fat: up to 10%, ash: up to 18%</li>
          <li>Histamine: up to 500 mg/kg, TVN up to 120 mg N/100g</li>
          <li>Trial program: 1-3 containers before full monthly scaling</li>
          <li>Documentation: COA, packing details, origin and loading terms</li>
        </ul>
      </section>

      <section className='seo-section'>
        <h2>Contact and next step</h2>
        <p>
          Send product name, protein, volume, origin, and FOB indication to start qualification.
        </p>
        <div className='seo-links'>
          <a href='https://wa.me/5548991443224?text=Hello%2C+I+want+to+offer+fishmeal+from+my+country.' target='_blank' rel='noreferrer'>
            Contact on WhatsApp
          </a>
          <a href='mailto:manshin@remeta.com.br?subject=Fishmeal%20Offer'>Contact by email</a>
        </div>
      </section>

      <nav className='seo-links' aria-label='Internal links'>
        <Link href='/'>Main landing</Link>
        <Link href='/fishmeal-buyers'>All country pages</Link>
      </nav>
    </main>
  );
}
