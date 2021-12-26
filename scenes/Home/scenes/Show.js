import Hello from '@/scenes/Home/components/Hello'
import Story from '@/scenes/Home/components/Story'
import Contact from '@/scenes/Home/components/Contact'

const ShowHomeScene = () => {
  return(
    <>
      <div className="flex justify-center flex-col  lg:min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <Hello />
        </div>
      </div>
      <div>
      <div className="max-w-6xl mx-auto">
        <Story />
      </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <Contact />
      </div>
    </>
  )
}

export default ShowHomeScene