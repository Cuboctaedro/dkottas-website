import { HeadingOne } from '@/components/heading-1'
import { HeadingTwo } from '@/components/heading-2'
import { getAllProjects } from '@/lib/data'
import { Metadata } from 'next'

const ContactPage = () => {
  return (
    <article className="container px-3 mx-auto">
      <header className="px-3 mb-12">
        <HeadingOne level={1}>Contact</HeadingOne>
      </header>
      <div className="flex flex-row flex-wrap justify-end">
        <div className="px-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-12">
          <HeadingTwo level={2}>email</HeadingTwo>
          <div className="pt-6">
            <a href="mailto:info@cuboctaedro.eu">info@cuboctaedro.eu</a>
          </div>
        </div>
        <div className="px-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-12">
          <HeadingTwo level={2}>Phone</HeadingTwo>
          <div className="pt-6">
            <a href="tel:+306932001313">+30 6932 00 1313</a>
          </div>
        </div>
        <div className="px-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-12">
          <HeadingTwo level={2}>Post Address</HeadingTwo>
          <div className="pt-6">
            Dimitris Kottas
            <br />
            Lomvardou 23-25
            <br />
            11473, Athens
            <br />
            Greece
          </div>
        </div>
      </div>
    </article>
  )
}

export default ContactPage

export const generateMetadata = async (): Promise<Metadata> => {
  const allProjects = getAllProjects()
  const image = allProjects[0].featuredimage
  return {
    title: 'Contact | Dimitris Kottas - Developer and Designer',
    description: 'Contact data for Dimitris Kottas, Developer and Designer.',
    openGraph: {
      title: 'Contact | Dimitris Kottas - Developer and Designer',
      description: 'Contact data for Dimitris Kottas, Developer and Designer.',
      url: 'https://www.cuboctaedro.eu/contact',
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
