import { tags } from '@/lib/tags'

interface SingleTagLayoutProps {
  children: React.ReactNode
}

const SingleTagLayout = ({ children }: SingleTagLayoutProps) => {
  return <>{children}</>
}

export default SingleTagLayout

export const generateStaticParams = async () => {
  return tags.map((tag) => ({ slug: tag.slug }))
}
