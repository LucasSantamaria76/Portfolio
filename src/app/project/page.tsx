import { itemsProjects } from '@/Items'
import { ProjectCard } from '@/components'

const page = () => {
  return (
    <div className='pt-[var(--toolbarHeight)] w-full lg:w-4/6 2xl:w-[55%] mx-auto min-h-screen flex flex-col items-center '>
      <h1 className='text-4xl font-bold text-white drop-shadow-lg shadow-black py-7'>
        Mis Proyectos
      </h1>
      {itemsProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  )
}
export default page
