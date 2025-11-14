import { PostInList } from '@/types/post'
import { HeadingTwo } from './heading-2'
import Link from 'next/link'
import { trimText } from '@/lib/trim-text'
import { formatDate } from '@/lib/format-date'

interface PostItemProps {
  post: PostInList
  isBlogPage: boolean
}

export const PostItem = ({ post, isBlogPage }: PostItemProps) => {
  return (
    <article className="flex flex-col items-end mb-12">
      <header className="flex flex-row flex-wrap w-full">
        <Link href={`/blog/${post.slug}`} className="w-full lg:w-2/3 xl:w-3/4 order-2 px-3 mb-6">
          <HeadingTwo level={isBlogPage ? 2 : 3}>{post.title}</HeadingTwo>
        </Link>

        <div className="w-full lg:w-1/3 xl:w-1/4 order-1 px-3">{formatDate(post.date)}</div>
      </header>
      <div className="w-full lg:w-2/3 xl:w-3/4 order-2 px-3 ">
        <div className="xl:w-2/3 generated">
          {`${trimText(post.description)}... `}
          <Link
            href={`/blog/${post.slug}`}
            title={post.title}
            className="block hover:text-red-700 transition-colors uppercase text-sm"
          >
            <span>read more</span>
            <span className="sr-only">{`Continue to ${post.title}`}</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
