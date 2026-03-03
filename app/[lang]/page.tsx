import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { breadcrumbJsonLd, faqJsonLd, organizationJsonLd, productJsonLd, serviceJsonLd } from '../lib/seo-jsonld';
import { SUPPORTED_LANGS, type SupportedLang } from '../lib/landing-data';
import { interactionsScript, renderLandingHtml, toHtmlLang } from '../lib/landing-render';
import { SITE_URL } from '../lib/seo';

type Params = { lang: string };

const LANG_TITLE: Record<SupportedLang, string> = {
  en: 'Buy Fishmeal 62-68% Protein - Remeta Agro | Commodity Trading Brazil',
  zh: '采购鱼粉62-68%蛋白 - Remeta Agro | 巴西大宗贸易',
  fr: 'Acheter Farine de Poisson 62-68% Protéines - Remeta Agro',
  pt: 'Comprar Farinha de Peixe 62-68% Proteína - Remeta Agro',
  hi: '62-68% प्रोटीन फिश मील खरीद - Remeta Agro'
};

const LANG_DESCRIPTION: Record<SupportedLang, string> = {
  en: 'Fishmeal 62-68% protein. Confirmed buyers in Asia. Send your offer today. 48h response. Remeta Agro, Brazil.',
  zh: '采购62-68%蛋白鱼粉。亚洲确认买家。今天发送报价。48小时内回复。',
  fr: 'Nous achetons de la farine de poisson 62-68% protéines. Acheteurs confirmés en Asie. Réponse sous 48h.',
  pt: 'Compramos farinha de peixe 62-68% proteína. Compradores confirmados na Ásia. Resposta em 48h.',
  hi: 'हम 62-68% प्रोटीन फिश मील खरीदते हैं। एशिया में पुष्टि खरीदार। 48 घंटे में जवाब।'
};

function isSupportedLang(lang: string): lang is SupportedLang {
  return (SUPPORTED_LANGS as readonly string[]).includes(lang);
}

function languageAlternates() {
  return {
    en: '/en',
    zh: '/zh',
    fr: '/fr',
    pt: '/pt',
    hi: '/hi',
    'x-default': '/en'
  } as const;
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isSupportedLang(lang)) {
    return { robots: { index: false, follow: false } };
  }

  return {
    title: LANG_TITLE[lang],
    description: LANG_DESCRIPTION[lang],
    alternates: {
      canonical: `/${lang}`,
      languages: languageAlternates()
    },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/${lang}`,
      title: LANG_TITLE[lang],
      description: LANG_DESCRIPTION[lang],
      locale: toHtmlLang(lang).replace('-', '_')
    },
    twitter: {
      card: 'summary',
      title: LANG_TITLE[lang],
      description: LANG_DESCRIPTION[lang]
    }
  };
}

export default async function LangPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  if (!isSupportedLang(lang)) notFound();

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className='sr-only'>{LANG_TITLE[lang]}</h1>
      <main lang={toHtmlLang(lang)} dangerouslySetInnerHTML={{ __html: renderLandingHtml(lang) }} />
      <section className='seo-page' lang={toHtmlLang(lang)}>
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
