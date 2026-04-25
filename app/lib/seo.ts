export const SITE_URL = 'https://agro.remeta.com.br';

export const COUNTRY_PAGES = [
  {
    slug: 'india',
    country: 'India',
    cities: 'Mangalore, Udupi, Karnataka',
    summary:
      'We buy fishmeal 62-68% protein from Indian producers and exporters for confirmed buyers in China, Vietnam, and Indonesia.',
    details:
      'Indian fishmeal suppliers with stable COA, protein consistency, and export documentation can onboard through sample verification and pilot shipment.'
  },
  {
    slug: 'pakistan',
    country: 'Pakistan',
    cities: 'Karachi',
    summary:
      'We source fishmeal 62-68% protein from Pakistan for long-term supply programs to Asian feed and aquaculture buyers.',
    details:
      'Priority is given to suppliers with reliable TVN, moisture, and histamine control, plus transparent loading and inspection procedures.'
  },
  {
    slug: 'morocco',
    country: 'Morocco',
    cities: 'Casablanca, Agadir',
    summary:
      'Remeta Agro buys fishmeal from Morocco from established processors with export-grade quality and stable monthly availability.',
    details:
      'We evaluate every supplier by lab profile, shipment performance, and consistency over trial lots before scaling to contract volumes.'
  },
  {
    slug: 'mauritania',
    country: 'Mauritania',
    cities: 'Nouadhibou',
    summary:
      'We purchase fishmeal 62-68% from Mauritania and connect producers to confirmed demand in Asia under recurring supply terms.',
    details:
      'Suppliers with independent inspection readiness (SGS / Bureau Veritas) and clear traceability are prioritized for onboarding.'
  },
  {
    slug: 'south-africa',
    country: 'South Africa',
    cities: 'Cape Town, Saldanha',
    summary:
      'We work with South African fishmeal producers to supply high-protein fishmeal into long-term feed ingredient programs.',
    details:
      'Stable protein levels, low oxidation, and clean shipment documentation are required for transition from trial to regular contracts.'
  }
] as const;

export const GUIDE_LINKS = [
  {
    href: '/guides/export-fishmeal-china',
    label: 'How to export fishmeal to China: GACC + MARA compliance guide'
  },
  {
    href: '/guides/gacc-mara-registration',
    label: 'China registration explained: GACC vs MARA'
  },
  {
    href: '/fishmeal-buyers/india/guide',
    label: 'India fishmeal to China: EIC protocol, GACC & MARA compliance'
  },
  {
    href: '/fishmeal-buyers/pakistan/guide',
    label: 'Pakistan fishmeal to China: tariff edge, registration & export hubs'
  }
] as const;

export const DOCUMENT_LINKS = [
  {
    href: '/Remeta_Fishmeal_Specification.pdf',
    label: 'Remeta Fishmeal Specification PDF'
  },
  {
    href: '/Remeta_Fishmeal_Export_Checklist_2026.pdf',
    label: 'Remeta Fishmeal Export Checklist 2026 PDF'
  }
] as const;

export const STATIC_ROUTES = [
  '/',
  '/en',
  '/zh',
  '/fr',
  '/pt',
  '/hi',
  '/fishmeal-buyers',
  ...GUIDE_LINKS.map((entry) => entry.href),
  ...COUNTRY_PAGES.map((entry) => `/fishmeal-buyers/${entry.slug}`),
  ...DOCUMENT_LINKS.map((entry) => entry.href)
] as const;
