import { PrevNext } from '@/components/prev-next'
import { getItemBySlug } from '@/lib/data'
import { getPrevNextPost } from '@/lib/get-prev-next-post'
import { Post } from '@/types/post'
// import Link from 'next/link'
// import Image from 'next/image'
import { HeadingOne } from '@/components/heading-1'
import { Metadata } from 'next'
import { markdownToHtml } from '@/lib/markdown'

const SinglePostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = getItemBySlug(slug, 'post') as Post
  const { prev, next } = await getPrevNextPost(slug)

  const content = await markdownToHtml(post.content)

  return (
    <article className="container mx-auto px-3">
      <PrevNext prev={prev} next={next} type="post" />
      <header className="px-3 w-full mb-12">
        <HeadingOne level={1}>{post.title}</HeadingOne>
      </header>
      <div className="lg:w-2/3 xl:w-1/2 xl:mx-auto px-3 pb-12 generated">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  )
}

export default SinglePostPage

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const post = getItemBySlug(slug, 'post') as Post

  return {
    title: `${post.title} | Dimitris Kottas - Developer and Designer`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Dimitris Kottas - Developer and Designer`,
      description: post.description,
      url: `https://www.cuboctaedro.eu/blog/${post.slug}`,
      siteName: 'Dimitris Kottas',
      locale: 'en_US',
      type: 'website',
      images: [],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
