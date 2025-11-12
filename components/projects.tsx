import { HeadingOne } from './heading-1'
import { TagsMenu } from './tagsmenu'
import { ProjectCard } from './project-card'
import { ProjectInList } from '@/types/project'

interface ProjectsProps {
  isProjectsPage: boolean
  projects: Array<ProjectInList>
}

export const Projects = ({ isProjectsPage, projects }: ProjectsProps) => {
  return (
    <section className="container mx-auto gutter">
      <header className="gutter mb-12">
        <HeadingOne level={isProjectsPage ? 1 : 2}>Projects</HeadingOne>
      </header>

      <div className="flex flex-row flex-wrap mb-6 sm:mb-12 md:mb-24">
        <div className="pl-3 pr-3 w-full lg:w-1/3 xl:w-1/4 mb-8 sm:mb-12">
          <TagsMenu />
        </div>
        <ul className="w-full lg:w-2/3 xl:w-3/4 flex flex-row flex-wrap">
          {projects.map((project) => (
            <li className="pl-3 pr-3 md:w-1/2 xl:w-1/3 mb-12" key={project.slug}>
              <ProjectCard project={project} isProjectsPage={isProjectsPage} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
