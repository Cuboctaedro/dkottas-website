import { PostInList } from '@/types/post'
import { HeadingOne } from './heading-1'
import { PostItem } from './post-item'

interface BlogProps {
  posts: Array<PostInList>
  isBlogPage: boolean
}

export const Blog = ({ posts, isBlogPage }: BlogProps) => {
  return (
    <section className="container px-3 mx-auto">
      <header className="px-3 mb-12">
        <HeadingOne level={isBlogPage ? 1 : 2}>Blog</HeadingOne>
      </header>

      <ul className="mb-6 sm:mb-12 md:mb-24">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} isBlogPage={isBlogPage} />
          </li>
        ))}
      </ul>
    </section>
  )
}
