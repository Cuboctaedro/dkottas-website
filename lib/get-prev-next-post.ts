import { getSortedPostSlugs } from './data'

export const getPrevNextPost = async (
  slug: string,
): Promise<{ prev: string | null; next: string | null }> => {
  let prev = null
  let next = null
  const sortedSlugs = await getSortedPostSlugs()
  const postIndex = sortedSlugs.findIndex((item) => item === slug)
  if (postIndex > 0) {
    next = sortedSlugs[postIndex - 1]
  }
  if (postIndex < sortedSlugs.length - 1 && postIndex !== -1) {
    prev = sortedSlugs[postIndex + 1]
  }

  return { prev, next }
}
