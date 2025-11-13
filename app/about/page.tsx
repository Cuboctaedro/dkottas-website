import { HeadingOne } from '@/components/heading-1'

const AboutPage = async () => {
  return (
    <article className="container px-3 mx-auto">
      <header className="px-3 mb-12">
        <HeadingOne level={1}>About</HeadingOne>
      </header>

      <div className="flex flex-row flex-wrap">
        <div className="lg:w-1/3 xl:w-1/4 px-3  pb-12">
          <div className="">
            <a href="https://www.linkedin.com/in/dikottas/" target="_blank" className="">
              LinkedIn
            </a>
          </div>
          <div className="">
            <a href="https://github.com/Cuboctaedro" target="_blank" className="">
              GitHub
            </a>
          </div>
          <div className="">
            <a
              href="https://www.facebook.com/profile.php?id=61552639889394"
              target="_blank"
              className=""
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="lg:w-2/3 xl:w-1/2 px-3 generated pb-12">
          <p>
            My name is Dimitris Kottas. I work for Nelios as a senior developer and project manager.
            I have a background in architecture and design and I have worked for many years in the
            publishing sector before turning to web development.
          </p>
          <p className="pt-3">
            I still enjoy working on design and publishing projects when I have the time. I have
            worked mostly with artisits, publishers, photographers, museums, galleries and
            architects.
          </p>
        </div>
      </div>
    </article>
  )
}

export default AboutPage
