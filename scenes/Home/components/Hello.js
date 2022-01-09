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
        <div className="flex flex-col-reverse content-center p-10 bg-white rounded-lg lg:flex-row">
          <div className="flex flex-col justify-center mt-10 mr-10 text-center lg:w-1/2">
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
              <div className="flex justify-center mt-10">
                <InstagramIcon className="w-10 h-10 mx-4 fill-slate-600" />
                <GithubIcon className="w-10 h-10 mx-4 fill-slate-600" />
                <LinkedInIcon className="w-10 h-10 mx-4 fill-slate-600" />
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