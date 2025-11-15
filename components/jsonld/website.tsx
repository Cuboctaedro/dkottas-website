export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dimitris Kottas - Developer and Designer',
    description: 'Protfolio of design and web development projects by Dimitris Kottas.',
    image: [
      `https://www.cuboctaedro.eu/work/projects-grid-1`,
      `https://www.cuboctaedro.eu/work/projects-grid-2`,
    ],
    author: [
      {
        '@type': 'Person',
        name: 'Dimitris Kottas',
        url: 'https://www.cuboctaedro.eu/about',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}
