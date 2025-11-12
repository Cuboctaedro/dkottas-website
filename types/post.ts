export type Post = {
  title: string
  slug: string
  date: string
  description: string
  featuredimage: string
  tags: Array<string>
  content: string
}

export type PostInList = Omit<Post, 'content'>
