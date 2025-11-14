import { Blog } from '@/components/blog'
import { getAllPosts, getAllProjects } from '@/lib/data'
import { Metadata } from 'next'

const BlogPage = async () => {
  const allPosts = await getAllPosts()

  return <Blog isBlogPage={true} posts={allPosts} />
}

export default BlogPage

export const generateMetadata = async (): Promise<Metadata> => {
  const allProjects = getAllProjects()
  const image = allProjects[0].featuredimage
  return {
    title: 'Blog | Dimitris Kottas - Developer and Designer',
    description: 'Design and web development Blog by Dimitris Kottas.',
    openGraph: {
      title: 'Blog | Dimitris Kottas - Developer and Designer',
      description: 'Design and web development Blog by Dimitris Kottas.',
      url: 'https://www.cuboctaedro.eu/blog',
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
