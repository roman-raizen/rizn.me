import Section from "@/components/Section"
import Highlight from '@/components/Highlight'
import Badge from '@/components/Badge'

const TimelineItem = ({ children, title, skills }) => {
  const badges = skills.split(',').map(s => s.trim())
  return (
    <div className="m-5 p-5 text-center rounded-lg bg-slate-50 border-[1rem] border-white">
      <h3 className="font-bold">{title}</h3>
      <p>{children}</p>
      <div className="mt-3 flex justify-center flex-wrap">
        { badges.map((badge, index) =>
          <Badge key={index}>{badge}</Badge>
        )}
      </div>
    </div>
  )
}

const Timeline = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

const Chapter = ({title, children}) => {
  return (
    <div className="bg-white p-5 text-center">
      <h2 className="text-xl">
        <Highlight>{title}</Highlight>
      </h2>
      <p className="my-2">
        {children}
      </p>
    </div>
  )
}


const Story = () => {
  return (
    <Section>
      <div className="">
        <h1 className="text-3xl font-bold mt-20 mb-16 text-center m-10">My Story</h1>
        <div className="relative">
          <div className="absolute border-l-2 border-l-slate-300 top-0 h-full left-1/2 border-solid"></div>
          <div className="relative">
            <Chapter title="Graduation">
              Siberian State University Of Technologies - information system and technologies major.
              Data science, Databases and Web Development.
            </Chapter>
            <Timeline>
              <TimelineItem title="1GT - web studio" skills="PHP, Yii framework, MySQL">
                Right after graduation I started my first job as a web developer in a web studio.
              </TimelineItem>
              <TimelineItem title="Teaser.cc" skills="Node.js, MongoDB, Express.js">
                Web / Backend developer. High-load architecture project for a teaser ad network.
              </TimelineItem>
              <TimelineItem title="Lomagame" skills="Ruby, Rails, MySQL">
                Russian-localized, Korean MMORPG game studio.
              </TimelineItem>
            </Timeline>
            <Chapter title="Freelancing">
              At this point I decided to start working on my own and pursue freelancing career path.
              Had been doing small projects for couple of years, to build up my skills and experience.
            </Chapter>
            <Timeline>
              <TimelineItem title="MyInvisibleGirlfriend" skills="Ruby, Rails, MySQL, Redis">
                Very interesting and unusual project which is dedicated to help single gentlemen to socialize and feel a little bit less lonely.
                Website had been featured on some news outlets.
              </TimelineItem>
              <TimelineItem title="Work tracker" skills="Ruby, Rails, MySQL">
                An internal management system for a company focused on hiring disabled workers. Time management and tasks tracker.
              </TimelineItem>
              <TimelineItem title="Readyflight" skills="Team Leading, Ruby, Rails, PostgreSQL, SVG, TDD">
                IPM and ACT management system for few Airline companies, including Singapore airlines.
                A management system that helps with tracking aircraft damage and aircraft parts management.
              </TimelineItem>
              <TimelineItem title="Blueringmedia" skills="Team leading, Next.js, React, MongoDB, AWS, Docker">
                A network of websites for remote kids education. A lot of interconnecting services and pretty complex hierarchy.
              </TimelineItem>
            </Timeline>
            <Chapter title="Next project: You?">
              Let's connect and discuss your ideas!
            </Chapter>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Story
