import { Projects } from '@/components/projects'
import { getAllProjects } from '@/lib/data'
import { Metadata } from 'next'

const WorkPage = async () => {
  const projects = getAllProjects()
  return <Projects isProjectsPage={true} projects={projects} />
}

export default WorkPage

export const generateMetadata = async (): Promise<Metadata> => {
  const allProjects = getAllProjects()
  const image = allProjects[0].featuredimage
  return {
    title: 'Projects | Dimitris Kottas - Developer and Designer',
    description: 'Protfolio of design and web development projects by Dimitris Kottas.',
    openGraph: {
      title: 'Projects | Dimitris Kottas - Developer and Designer',
      description: 'Protfolio of design and web development projects by Dimitris Kottas.',
      url: 'https://www.cuboctaedro.eu/work',
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
