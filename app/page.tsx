import { Blog } from '@/components/blog'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { getAllPosts, getAllProjects } from '@/lib/data'
import { Metadata } from 'next'

const Home = async () => {
  const allProjects = getAllProjects()
  const projects = allProjects.slice(0, 12)
  const allPosts = await getAllPosts()

  return (
    <>
      <section className="container mx-auto px-3 mb-6 sm:mb-12 md:mb-24 flex flex-col items-end">
        <div className="xl:w-3/4 px-3 ">
          <div className="text-2xl sm:text-3xl lg:text-5xl mb-2 sm:mb-4 leading-tight sm:font-thin font-serif text-gray-600">
            Perfection is achieved, not when there is nothing more to add, but when there is nothing
            left to take away.
          </div>
          <div className="font-serif italic text-lg sm:text-xl">Antoine de Saint-Exupéry</div>
        </div>
      </section>
      <Services isServicePage={false} />
      <Projects isProjectsPage={false} projects={projects} />
      <Blog isBlogPage={false} posts={allPosts} />
    </>
  )
}

export default Home

export const generateMetadata = async (): Promise<Metadata> => {
  const allProjects = getAllProjects()
  const image = allProjects[0].featuredimage
  return {
    title: 'Dimitris Kottas - Developer and Designer',
    description: 'Protfolio of design and web development projects by Dimitris Kottas.',
    openGraph: {
      title: 'Dimitris Kottas - Developer and Designer',
      description: 'Protfolio of design and web development projects by Dimitris Kottas.',
      url: 'https://www.cuboctaedro.eu',
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
