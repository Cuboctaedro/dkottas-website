export type Post = {
  title: string
  slug: string
  date: string
  description: string
  content: string
}

export type PostInList = Omit<Post, 'content'>
