export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Remeta Agro',
  url: 'https://agro.remeta.com.br',
  description:
    'Commodity trading company buying fishmeal 62-68% protein and agro feed ingredients from producers worldwide for confirmed buyers in Asia.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+5548991443224',
    contactType: 'sales',
    email: 'manshin@remeta.com.br',
    availableLanguage: ['English', 'Portuguese', 'Russian', 'Chinese']
  },
  areaServed: ['Brazil', 'Peru', 'South Africa', 'Namibia', 'Morocco', 'China', 'India', 'Vietnam', 'Indonesia'],
  founder: {
    '@type': 'Person',
    name: 'Roman Manshin',
    jobTitle: 'Founder & CEO'
  }
};

export const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Fishmeal 68% Protein',
  description:
    'High-protein fishmeal 62-68% crude protein for aquaculture and animal feed. Sourced from Brazil, Peru, South Africa and other origins for Asian buyers.',
  category: 'Animal Feed Ingredients',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Remeta Agro'
    }
  }
};

export const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fishmeal Procurement - Remeta Agro',
  description: 'We buy fishmeal 62-68% protein from producers worldwide. Confirmed buyers in Asia. Contact us to become a supplier.',
  provider: {
    '@type': 'Organization',
    name: 'Remeta Agro',
    url: 'https://agro.remeta.com.br'
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'Country', name: 'Mauritania' },
    { '@type': 'Country', name: 'Morocco' },
    { '@type': 'Country', name: 'South Africa' },
    { '@type': 'Country', name: 'Peru' },
    { '@type': 'Country', name: 'Chile' },
    { '@type': 'Country', name: 'Namibia' }
  ],
  serviceType: 'Commodity Trading - Fishmeal Procurement',
  offers: {
    '@type': 'Offer',
    description: 'We are active buyers of fishmeal 62-68% protein. Send your COA and FOB price.',
    eligibleRegion: [
      { '@type': 'City', name: 'Mangalore' },
      { '@type': 'City', name: 'Karachi' },
      { '@type': 'City', name: 'Nouadhibou' },
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'City', name: 'Cape Town' }
    ]
  }
};

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you buy fishmeal 62-68% protein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We actively buy fishmeal 62-68% protein from qualified suppliers with stable quality and export-ready documentation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which supplier origins are accepted?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We consider suppliers from any origin and prioritize stable quality, clear COA data, and reliable shipment performance.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly do you respond to supplier offers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Target response time is 48 hours after receiving product parameters, volume, origin, and indicative FOB offer.'
      }
    }
  ]
};

export const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agro.remeta.com.br/' }]
};
