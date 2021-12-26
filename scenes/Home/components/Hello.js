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
      <Blobs>
        <div className="flex flex-col-reverse p-10 bg-white rounded-lg">
          <div className="text-center">
            <div className="text">Hello, I'm</div>
            <h1 className="text-4xl font-bold my-3">Roman Raizen</h1>
            <div className="text">
              <Highlight>
                I create web
              </Highlight>.
              Very passionate about web technologies and learning new skills.
              Recently into <Highlight>Web3</Highlight> and <Highlight>Blockchain</Highlight> technologies.
            </div>
            <div className="flex justify-center mt-10">
              <InstagramIcon className="mx-4 w-10 h-10 fill-slate-600" />
              <GithubIcon className="mx-4 w-10 h-10 fill-slate-600" />
              <LinkedInIcon className="mx-4 w-10 h-10 fill-slate-600" />
            </div>
          </div>
          <div className="flex justify-center mb-10">
            <img className="rounded-full w-1/2" alt="Roman Raizen" src='/me.jpg' />
          </div>
        </div>
      </Blobs>
    </Section>
  )
}

export default Hello