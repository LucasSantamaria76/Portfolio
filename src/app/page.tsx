import { skills } from '@/Items'
import { TechnologyCard } from '@/components'

/* 
<div className='flex flex-col justify-between w-11/12 gap-2 pt-20 mx-auto overflow-hidden sm:flex-row min-h-min'>

<div className='h-[450px] lg:h-[600px] lg:w-[500px] bg-[url("https://res.cloudinary.com/dldd3gcr5/image/upload/v1682717890/Portfolio%20asset/Avatar_qowxcf.jpg")] effect rounded-2xl bg-no-repeat bg-center bg-cover'></div>
*/

const Home = () => {
  return (
    <div className='grid grid-cols-1 px-2 pt-20 lg:grid-cols-5'>
      <div className='col-span-1 mx-auto lg:col-span-2'>
        <div className='w-96 h-[450px] lg:h-[500px] lg:w-[400px] bg-[url("https://res.cloudinary.com/dldd3gcr5/image/upload/v1682717890/Portfolio%20asset/Avatar_qowxcf.jpg")] effect rounded-2xl bg-no-repeat bg-center bg-cover'></div>
      </div>
      <div className='col-span-2 lg:col-span-3'>
        <div className='flex flex-col flex-wrap justify-between pt-4'>
          <h2 className='text-5xl font-bold text-center text-white'>
            Developer Full-Stack Javascript
          </h2>
          <h4 className='my-3 text-center lg:text-xl xl:text-3xl'>
            Tecnologías con las que desarrollo:
          </h4>
        </div>
        <div className='flex flex-wrap items-center justify-between w-4/5 gap-4 mx-auto mb-5'>
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
