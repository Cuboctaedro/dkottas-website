import { Project } from '@/types/project'

interface ProjectSchemaProps {
  project: Project
}

export const ProjectSchema = ({ project }: ProjectSchemaProps) => {
  const images = [`https://www.cuboctaedro.eu/work/${project.featuredimage}`]
  for (let i = 0; i < project.gallery.length; i++) {
    const image = project.gallery[i]
    if (image.file !== project.featuredimage) {
      images.push(`https://www.cuboctaedro.eu/work/${image.file}`)
    }
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: images,
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
