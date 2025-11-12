import { Post } from '@/types/post'
import { Project, ProjectInList } from '@/types/project'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const projectsDirectory = join(process.cwd(), 'content', 'work')

export const getProjectSlugs = () => {
  return fs.readdirSync(projectsDirectory)
}

export const getItemBySlug = (slug: string, item: 'post' | 'project'): Post | Project => {
  const directory = item === 'post' ? 'blog' : 'work'
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join('content', directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as Post | Project
}

export const getAllProjects = (): Array<ProjectInList> => {
  const projectSlugs = getProjectSlugs()
  const allProjects = projectSlugs.map((slug) => getItemBySlug(slug, 'project')) as Array<Project>
  allProjects.sort((a, b) => a.order - b.order)
  return allProjects.map((project) => ({
    title: project.title,
    slug: project.slug,
    description: project.description,
    featuredimage: project.featuredimage,
    tags: project.tags,
  }))
}

export const getSortedProjectSlugs = () => {
  const projects = getAllProjects()
  return projects.map((project) => project.slug)
}
