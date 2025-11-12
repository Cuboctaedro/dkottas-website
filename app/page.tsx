import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { getAllProjects } from '@/lib/data'

const Home = async () => {
  const allProjects = getAllProjects()
  const projects = allProjects.slice(0, 12)

  return (
    <>
      <section className="container mx-auto px-3 mb-6 sm:mb-12 md:mb-24 flex flex-col items-end">
        <div className="xl:w-3/4 px-3 ">
          <div className="text-2xl sm:text-3xl lg:text-5xl mb-2 sm:mb-4 leading-tight sm:font-thin">
            Perfection is achieved, not when there is nothing more to add, but when there is nothing
            left to take away.
          </div>
          <div className="italic text-lg sm:text-xl">Antoine de Saint-Exupéry</div>
        </div>
      </section>
      <Services isServicePage={false} />
      <Projects isProjectsPage={false} projects={projects} />
    </>
  )
}

export default Home
