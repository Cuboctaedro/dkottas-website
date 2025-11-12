import { getSortedProjectSlugs } from './data'

export const getPrevNextProject = (slug: string): { prev: string | null; next: string | null } => {
  let prev = null
  let next = null
  const sortedSlugs = getSortedProjectSlugs()
  const projectIndex = sortedSlugs.findIndex((item) => item === slug)
  if (projectIndex > 0) {
    next = sortedSlugs[projectIndex - 1]
  }
  if (projectIndex < sortedSlugs.length - 1 && projectIndex !== -1) {
    prev = sortedSlugs[projectIndex + 1]
  }

  return { prev, next }
}
