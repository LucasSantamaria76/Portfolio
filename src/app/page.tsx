import { skills } from '@/Items'
import { TechnologyCard } from '@/components'

const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-2 justify-between pt-20 w-11/12 min-h-min overflow-hidden mx-auto'>
      <div className='w-full sm:w-1/2 h-[450px] lg:h-[550px] bg-[url("https://res.cloudinary.com/dldd3gcr5/image/upload/v1682717890/Portfolio%20asset/Avatar_qowxcf.jpg")] effect rounded-full bg-no-repeat bg-center bg-cover'></div>
      <div className='w-full sm:w-1/2'>
        <div className='flex flex-col justify-between pt-4 flex-wrap'>
          <h2 className='text-5xl text-center text-white font-bold'>
            Developer Full-Stack Javascript
          </h2>
          <h4 className='text-center my-3 lg:text-xl xl:text-3xl'>
            Tecnologías con las que desarrollo:
          </h4>
        </div>
        <div className='flex justify-between items-center gap-4 flex-wrap w-4/5 mx-auto mb-5'>
          {skills.map((skill) => (
            <TechnologyCard
              key={skill}
              technology={skill}
              isSkills
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
