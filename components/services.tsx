import Link from 'next/link'
import { HeadingOne } from './heading-1'
import { HeadingTwo } from './heading-2'

interface ServicesProps {
  isServicePage: boolean
}

const servicesData = [
  {
    title: 'Web Design and Development',
    content:
      'I design and develop websites and web apps. I have created various artist and designer portfolios, e-shops, news sites and others.',
    link: '/work/tag/web-development',
  },
  {
    title: 'Graphic Design',
    content:
      'Graphic design, typography and branding for companies, exhibitions, events, stationary or any other format and application. Specialized in working with artist, designers and cultural institutions.',
    link: '/work/tag/graphic-design',
  },
  {
    title: 'Book Design and Editing',
    content:
      'More than 15 years of experience in designing books and editing publications about design and architecture.',
    link: '/work/tag/book-design',
  },
]

export const Services = ({ isServicePage }: ServicesProps) => {
  return (
    <section className="container pl-3 pr-3 mx-auto">
      <header className="pl-3 pr-3 mb-12">
        <HeadingOne level={isServicePage ? 1 : 2}>Services</HeadingOne>
      </header>
      <div className="mb-6 sm:mb-12 md:mb-24">
        <ul className="flex flex-row flex-wrap justify-end">
          {servicesData.map((item) => (
            <li className="pl-3 pr-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={item.title}>
              <div className="mb-12">
                <HeadingTwo level={isServicePage ? 2 : 3}>{item.title}</HeadingTwo>
                <div className="font-serif text-base leading-snug mt-6 mb-3">{item.content}</div>
                <Link
                  href={item.link}
                  className="text-sm uppercase tracking-wide text-gray700 hover:text-red-700 transition-colors"
                >
                  <span>View more</span>
                  <span className="sr-only">{` about ${item.title}`}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
