import { Post, PostInList } from '@/types/post'
import { Project, ProjectInList } from '@/types/project'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { markdownToText } from './markdown'

const projectsDirectory = join(process.cwd(), 'content', 'work')

const blogDirectory = join(process.cwd(), 'content', 'blog')

export const getProjectSlugs = () => {
  return fs.readdirSync(projectsDirectory)
}

export const getBlogSlugs = () => {
  return fs.readdirSync(blogDirectory)
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

export const getAllPosts = async (): Promise<Array<PostInList>> => {
  const postSlugs = getBlogSlugs()
  const allPosts = postSlugs.map((slug) => getItemBySlug(slug, 'post')) as Array<Post>
  allPosts.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
  const results = []
  for (let i = 0; i < allPosts.length; i++) {
    const post = allPosts[i]
    const description = (await markdownToText(post.content)).slice(0, 160)
    results.push({
      title: post.title,
      slug: post.slug,
      description,
      date: post.date,
    })
  }
  return results
}

export const getSortedPostSlugs = async () => {
  const posts = await getAllPosts()
  return posts.map((post) => post.slug)
}
