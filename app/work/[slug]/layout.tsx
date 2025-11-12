import { getProjectSlugs } from '@/lib/data'

interface SingleProjectLayoutProps {
  children: React.ReactNode
}

const SingleProjectLayout = ({ children }: SingleProjectLayoutProps) => {
  return <>{children}</>
}

export default SingleProjectLayout

export const generateStaticParams = async () => {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}
