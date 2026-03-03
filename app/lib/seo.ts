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

export const STATIC_ROUTES = [
  '/en',
  '/zh',
  '/fr',
  '/pt',
  '/hi',
  '/fishmeal-buyers',
  '/fishmeal-buyers/india',
  '/fishmeal-buyers/pakistan',
  '/fishmeal-buyers/morocco',
  '/fishmeal-buyers/mauritania',
  '/fishmeal-buyers/south-africa'
] as const;
