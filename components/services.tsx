import { HeadingOne } from './heading-1'
import { HeadingTwo } from './heading-2'

interface ServicesProps {
  isServicePage: boolean
}

const servicesData = [
  {
    title: 'Graphic Design',
    content:
      'Graphic design, typography and branding for companies, exhibitions, events, stationary or any other format and application. Specialized in working with artist, designers and cultural institutions.',
  },
  {
    title: 'Web Design and Development',
    content:
      'I design and develop websites and web apps. I have created various artist and designer portfolios, e-shops, news sites and others.',
  },
  {
    title: 'Book Design and Editing',
    content:
      'More than 15 years of experience in designing books and editing publications about design and architecture.',
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
                <div className="generated mt-6">{item.content}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
