import { HeadingOne } from '@/components/heading-1'
import { getAllProjects } from '@/lib/data'
import { Metadata } from 'next'

const AboutPage = async () => {
  return (
    <article className="container px-3 mx-auto">
      <header className="px-3 mb-12">
        <HeadingOne level={1}>About</HeadingOne>
      </header>

      <div className="flex flex-row flex-wrap">
        <div className="lg:w-1/3 xl:w-1/4 px-3  pb-12">
          <div className="">
            <a
              href="https://www.linkedin.com/in/dikottas/"
              target="_blank"
              className="text-gray-700 hover:text-red-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="">
            <a
              href="https://github.com/Cuboctaedro"
              target="_blank"
              className="text-gray-700 hover:text-red-700 transition-colors"
            >
              GitHub
            </a>
          </div>
          <div className="">
            <a
              href="https://www.facebook.com/profile.php?id=61552639889394"
              target="_blank"
              className="text-gray-700 hover:text-red-700 transition-colors"
            >
              Facebook
            </a>
          </div>
          <div className="">
            <a
              href="https://www.nelios.com"
              target="_blank"
              className="text-gray-700 hover:text-red-700 transition-colors"
            >
              Nelios
            </a>
          </div>
        </div>
        <div className="lg:w-2/3 xl:w-1/2 px-3 generated pb-12">
          <p>
            My name is Dimitris Kottas. I am a developer and designer with a background in
            architecture.
          </p>
          <p className="pt-3">
            By day, I work for Nelios as project manager and senior developer. There we create web
            apps and websites for the travel industry. We mostly use React and Node.Js. Its a
            challenging job that offers many opportunities to learn and evolve.
          </p>
          <p className="pt-3">
            By night, I work as a designer and developer for smaller, art and design related
            projects. I enjoy working with artists, photographers and cultural institutions of all
            kinds. Books, publishing and architecture have been ongoing interests and whenever I can
            I enjoy taking part in projects with friends and old coleagues.
          </p>
        </div>
      </div>
    </article>
  )
}

export default AboutPage

export const generateMetadata = async (): Promise<Metadata> => {
  const allProjects = getAllProjects()
  const image = allProjects[0].featuredimage
  return {
    title: 'About | Dimitris Kottas - Developer and Designer',
    description: 'Info and bio for Dimitris Kottas, Developer and Designer.',
    openGraph: {
      title: 'About | Dimitris Kottas - Developer and Designer',
      description: 'Info and bio for Dimitris Kottas, Developer and Designer.',
      url: 'https://www.cuboctaedro.eu/about',
      siteName: 'Dimitris Kottas',
      locale: 'en_US',
      type: 'website',
      images: [{ url: `https://www.cuboctaedro.eu/work/${image}` }],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
