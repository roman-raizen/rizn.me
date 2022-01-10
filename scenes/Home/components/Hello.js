import InstagramIcon from '@/components/InstagramIcon'
import GithubIcon from '@/components/GithubIcon'
import LinkedInIcon from '@/components/LinkedInIcon'
import Blobs from '@/components/Blobs'
import Highlight from '@/components/Highlight'
import Section from '@/components/Section'

// exports Hello component
const Hello = () => {
  return (
    <Section>
      <Blobs className="lg:w-1/2">
        <div className="flex flex-col-reverse content-center p-10 bg-white rounded-lg lg:space-x-10 lg:flex-row">
          <div className="flex flex-col justify-center mt-10 text-center lg:w-1/2">
            <div>
              <div className="text">Hello, I'm</div>
              <h1 className="my-3 text-4xl font-bold">Roman Raizen</h1>
              <div className="text">
                <Highlight>
                  I create web
                </Highlight>.
                Very passionate about web technologies and learning new skills.
                Recently into <Highlight>Web3</Highlight> and <Highlight>Blockchain</Highlight> technologies.
              </div>
              <div className="flex justify-center mt-10 space-x-8">
                <a target="_blank" href="https://github.com/roman-raizen" className="transition-all hover:scale-110 hover:rotate-6">
                  <GithubIcon className="w-10 h-10 fill-slate-600" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/roman-raizen-59bb99192/" className="transition-all hover:scale-110 hover:rotate-6">
                  <LinkedInIcon className="w-10 h-10 fill-slate-600" />
                </a>
                <a target="_blank" href="https://www.instagram.com/raizen.me/" className="transition-all hover:scale-110 hover:rotate-6">
                  <InstagramIcon className="w-10 h-10 fill-slate-600" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center xs:mb-10 lg:w-1/2">
            <img className="w-1/2 rounded-full lg:w-full" alt="Roman Raizen" src='/me.jpg' />
          </div>
        </div>
      </Blobs>
    </Section>
  )
}

export default Hello