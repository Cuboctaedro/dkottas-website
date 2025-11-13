import { Projects } from '@/components/projects'
import { getAllProjects } from '@/lib/data'
import { tags } from '@/lib/tags'
import { Metadata } from 'next'

const WorkPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const projects = getAllProjects()
  const { slug } = await params
  const tag = tags.find((t) => t.slug === slug)?.label
  const currentProjects = projects.filter((project) => project.tags.includes(tag as string))
  return <Projects isProjectsPage={true} projects={currentProjects} />
}

export default WorkPage

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const projects = getAllProjects()
  const { slug } = await params
  const tag = tags.find((t) => t.slug === slug)?.label
  const currentProjects = projects.filter((project) => project.tags.includes(tag as string))
  const image = currentProjects[0].featuredimage
  return {
    title: `${tag} | Dimitris Kottas - Developer and Designer`,
    description: `${tag} - Protfolio of design and web development projects by Dimitris Kottas.`,
    openGraph: {
      title: `${tag} | Dimitris Kottas - Developer and Designer`,
      description: `${tag} - Protfolio of design and web development projects by Dimitris Kottas.`,
      url: `https://www.cuboctaedro.eu/work/tag/${slug}`,
      siteName: 'Dimitris Kottas',
      locale: 'en_US',
      type: 'website',
      images: [{ url: `https://www.cuboctaedro.eu/work/${image}` }],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
