import { HeadingOne } from '@/components/heading-1'

const ContactPage = () => {
  return (
    <article className="container px-3 mx-auto">
      <header className="px-3 mb-12">
        <HeadingOne level={1}>Contact</HeadingOne>
      </header>
      <div className="flex flex-row flex-wrap justify-end">
        <div className="px-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-12">
          <h3 className="heading-2">email</h3>
          <div className="generated">
            <a href="mailto:info@cuboctaedro.eu">info@cuboctaedro.eu</a>
          </div>
        </div>
        <div className="px-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-12">
          <h3 className="heading-2">Phone</h3>
          <div className="generated">
            <a href="tel:+306932001313">+30 6932 00 1313</a>
          </div>
        </div>
        <div className="px-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-12">
          <h3 className="heading-2">Post Address</h3>
          <div className="generated">
            Dimitris Kottas
            <br />
            Lomvardou 23-25
            <br />
            11473, Athens
            <br />
            Greece
          </div>
        </div>
        {/* <div className="gutter w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-12">
                <div className="generated">© 2025 Dimitris Kottas</div>
              </div> */}
      </div>
    </article>
  )
}

export default ContactPage
