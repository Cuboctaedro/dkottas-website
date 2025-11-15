import { Post } from '@/types/post'

interface ArticleSchemaProps {
  post: Post
}

export const ArticleSchema = ({ post }: ArticleSchemaProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: post.title,
    description: post.description,
    author: [
      {
        '@type': 'Person',
        name: 'Dimitris Kottas',
        url: 'https://www.cuboctaedro.eu/about',
      },
    ],
    datePublished: new Date(post.date).toISOString(),
  }

  if (post.featuredImage) {
    schema.image = [`https://www.cuboctaedro.eu/work/${post.featuredImage}`]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}
