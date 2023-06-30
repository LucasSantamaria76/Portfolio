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
      className='flex flex-col items-center justify-between w-11/12 h-full gap-4 pb-10 mt-3 border-b border-gray-400'
    >
      <h2 className='text-xl font-bold text-white drop-shadow-lg shadow-black'>{project.name}</h2>
      <div className='flex flex-col w-full h-full gap-3 sm:flex-row sm:justify-between sm:h-48 xl:h-56'>
        <div className='flex flex-col justify-between w-full h-full gap-3 sm:w-1/2 md:w-3/5'>
          <p className='w-full px-2 text-sm text-white sm:px-0 drop-shadow-lg shadow-black sm:self-start'>
            {project.description}
          </p>
          <div className='flex items-center justify-around w-full gap-3 sm:justify-start'>
            <a
              href={project.linkDemo}
              target='_blank'
              className='flex items-center gap-2 px-4 text-sm text-white rounded-md shadow-sm cursor-pointer glass shadow-white drop-shadow-lg hover:text-gray-300 active:shadow-none'
            >
              <Image
                width={40}
                height={40}
                src={project.icon}
                alt='favicon'
              />
              {project.download ? 'Descargar demo' : 'Ir a la demo'}
            </a>
            <a
              href={project.linkRepo}
              target='_blank'
              className='flex items-center gap-2 px-4 text-sm text-white rounded-md shadow-sm cursor-pointer glass shadow-white drop-shadow-lg hover:text-gray-300 active:shadow-none'
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
