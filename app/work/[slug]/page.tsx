import { PrevNext } from '@/components/prev-next'
import { getItemBySlug } from '@/lib/data'
import { getPrevNextProject } from '@/lib/get-prev-next-project'
import { Project } from '@/types/project'
import Link from 'next/link'
import Image from 'next/image'
import { HeadingOne } from '@/components/heading-1'
import { Metadata } from 'next'

const SinglePropjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const project = getItemBySlug(slug, 'project') as Project
  const { prev, next } = getPrevNextProject(slug)

  return (
    <article className="container mx-auto px-3">
      <PrevNext prev={prev} next={next} type="project" />
      <header className="px-3 w-full mb-12">
        <HeadingOne level={1}>{project.title}</HeadingOne>
      </header>

      <div className="flex flex-row flex-wrap w-full">
        <div className="w-full xl:w-1/4 lg:flex xl:block mb-12">
          <div className="px-3 lg:w-1/3 xl:w-full">
            <ul className="mb-8 ">
              <li>
                <span className="font-bold inline-block pr-1">Description: </span>
                <span>{project.description}</span>
              </li>
              <li>
                <span className="font-bold inline-block pr-1">Date: </span>
                <time dateTime={project.date}>{project.date}</time>
              </li>
              <li>
                <span className="font-bold inline-block pr-1">Tags: </span>
                <ul className="inline">
                  {project.tags.map((tag, index) => (
                    <li className="inline tag" key={tag}>
                      <Link href="<?= $page->parent()->url() ?>/tag/<?= Str::kebab($tag) ?>">
                        {tag}
                      </Link>
                      {index < project.tags.length - 1 && <>{`, `}</>}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            {project.porjectlink && (
              <div className="mb-8">
                <a
                  href={project.porjectlink}
                  className="inline-block text-sm uppercase tracking-wider px-4 py-2 bg-gray-900 text-gray-100 hover:bg-red-700 hover:text-gray-100"
                  target="_blank"
                  title={`Visit: ${project.title} website`}
                >
                  Visit the website
                </a>
              </div>
            )}
          </div>

          <div className="px-3 lg:w-2/3 xl:w-full font-serif">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </div>

        <div className="px-3 w-full xl:w-3/4">
          <ul>
            {project.gallery.map(async (image) => {
              const file = await import(`../../../public/work/${image.file}`)
              return (
                <li key={image.file} className="mb-12">
                  <div>
                    <Image
                      alt={`${project.title}: ${image.caption}`}
                      src={file}
                      sizes="(max-width: 479px) 415px, (max-width: 767px) 432px, (max-width: 1023px) 720px, (max-width: 960px) 960px, (min-width: 1280px) 904px"
                    />
                    <div className="pt-3">{image.caption}</div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default SinglePropjectPage

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const project = getItemBySlug(slug, 'project') as Project

  return {
    title: `${project.title} | Dimitris Kottas - Developer and Designer`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Dimitris Kottas - Developer and Designer`,
      description: project.description,
      url: `https://www.cuboctaedro.eu/work/${project.slug}`,
      siteName: 'Dimitris Kottas',
      locale: 'en_US',
      type: 'website',
      images: [{ url: `https://www.cuboctaedro.eu/work/${project.featuredimage}` }],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
