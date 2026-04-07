export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Blueprint Global',
    legalName: 'Blueprint Group LLC',
    url: 'https://blueprintglobal.io',
    description: 'International structures for entrepreneurs, investors, and mobile families. CPA-led coordination for tax residency, asset protection, second citizenship, and global banking.',
    founder: {
      '@type': 'Person',
      name: 'Martin Popiel',
      jobTitle: 'CPA, CEO',
      url: 'https://www.linkedin.com/in/martinpopiel/',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'International Tax Planning',
      'Residency & Citizenship Planning',
      'Asset Protection',
      'Global Banking Coordination',
      'Entity Formation',
      'Compliance & Reporting',
    ],
    knowsAbout: [
      'Tax Residency',
      'Second Citizenship',
      'Digital Asset Structuring',
      'International Wealth Management',
      'Cross-Border Planning',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
