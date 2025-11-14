import { getBlogSlugs } from '@/lib/data'

interface SinglePostLayoutProps {
  children: React.ReactNode
}

const SinglePostLayout = ({ children }: SinglePostLayoutProps) => {
  return <>{children}</>
}

export default SinglePostLayout

export const generateStaticParams = async () => {
  const slugs = getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}
