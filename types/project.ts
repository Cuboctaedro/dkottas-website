export type Project = {
  title: string
  slug: string
  order: number
  date: string
  porjectlink: string
  gallery: Array<{ file: string; caption: string }>
  description: string
  featuredimage: string
  tags: Array<string>
  content: string
}

export type ProjectInList = Omit<Project, 'date' | 'porjectlink' | 'gallery' | 'content' | 'order'>
