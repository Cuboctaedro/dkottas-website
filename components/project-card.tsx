import Image from 'next/image'
import { HeadingTwo } from './heading-2'
import { ProjectInList } from '@/types/project'
import Link from 'next/link'

interface ProjectCardProps {
  project: ProjectInList
  isProjectsPage: boolean
}

export const ProjectCard = ({ project, isProjectsPage }: ProjectCardProps) => {
  return (
    <article className="relative project-card ">
      <Link className="aspect-square relative w-full block" href={`/work/${project.slug}`}>
        <Image
          src={`/work/${project.featuredimage}`}
          className="w-full block object-cover"
          alt={project.title}
          objectFit="cover"
          fill
        />
      </Link>
      <div className="pt-3">
        <Link href={`/work/${project.slug}`}>
          <HeadingTwo level={isProjectsPage ? 2 : 3}>{project.title}</HeadingTwo>
        </Link>

        <div className="font-serif">
          <p>{project.description}</p>
        </div>
      </div>
    </article>
  )
}
