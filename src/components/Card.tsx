'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TItemsProyect } from '@/types'
import TechnologyCard from './TechnologyCard'

interface Props {
  project: TItemsProyect
}

const Card = ({ project }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='relative h-48 xl:h-56 w-full sm:w-1/2 md:w-2/5 p-2 glass rounded-md overflow-hidden'>
      <Image
        tabIndex={0}
        width={600}
        height={500}
        alt={project.name}
        src={project.image}
        className={`${
          open ? 'h-1/5' : 'h-full'
        } w-full object-cover rounded-md  duration-500 object-top cursor-pointer`}
        onClick={() => setOpen(!open)}
      />
      <div className='flex gap-4 h-4/5 items-center flex-wrap mt-2 overflow-y-auto'>
        {project.technologies.map((item) => (
          <TechnologyCard
            key={item}
            technology={item}
          />
        ))}
      </div>
    </div>
  )
}
export default Card
