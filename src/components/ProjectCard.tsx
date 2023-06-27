import { TItemsProyect } from '@/types'
import { Card } from '@/components'
import Image from 'next/image'

interface Props {
  project: TItemsProyect
}
const ProjectCard = ({ project }: Props) => {
  return (
    <div
      id='ProjectCard'
      className='w-11/12 h-full flex flex-col justify-between items-center gap-4 mt-3 pb-10 border-b border-gray-400'
    >
      <h2 className='text-xl font-bold text-white drop-shadow-lg shadow-black'>{project.name}</h2>
      <div className='flex flex-col sm:flex-row sm:justify-between gap-3 w-full h-full sm:h-48 xl:h-56'>
        <div className='flex flex-col gap-3 justify-between h-full w-full sm:w-1/2 md:w-3/5'>
          <p className='w-full px-2 sm:px-0 text-sm text-white drop-shadow-lg shadow-black sm:self-start'>
            {project.description}
          </p>
          <div className='flex items-center justify-around sm:justify-start gap-3 w-full'>
            <a
              href={project.linkDemo}
              target='_blank'
              className='flex items-center gap-2 px-4 glass rounded-md shadow-sm shadow-white text-sm text-white drop-shadow-lg cursor-pointer hover:text-gray-300 active:shadow-none'
            >
              <Image
                width={40}
                height={40}
                src={project.icon}
                alt='favicon'
              />
              Ir a la demo
            </a>
            <a
              href={project.linkRepo}
              target='_blank'
              className='flex items-center gap-2 px-4 glass rounded-md shadow-sm shadow-white text-sm text-white drop-shadow-lg cursor-pointer hover:text-gray-300 active:shadow-none'
            >
              <Image
                width={40}
                height={40}
                src='https://res.cloudinary.com/dldd3gcr5/image/upload/v1683747161/github_hcdyx0.png'
                alt='Github logo'
              />
              Ir al repositorio
            </a>
          </div>
        </div>
        <Card project={project} />
      </div>
    </div>
  )
}
export default ProjectCard
