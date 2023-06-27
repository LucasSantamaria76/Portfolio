import { technologyData } from '@/Items'
import Image from 'next/image'

interface Props {
  technology: string
  isSkills?: boolean
}
const TechnologyCard = ({ technology, isSkills = false }: Props) => {
  return (
    <div
      className={`flex justify-center items-center ${
        isSkills && 'glass w-24 h-24 rounded-2xl hover:shadow-white'
      }`}
    >
      <a
        href={technologyData[technology].link}
        target='_blank'
        className='flex flex-col justify-center items-center gap-1 text-[0.6rem] text-white hover:text-red-700 cursor-pointer'
      >
        <p className='text-xs text-center'>{technologyData[technology].label}</p>
        <Image
          width={isSkills ? 48 : 32}
          height={isSkills ? 48 : 32}
          alt={technologyData[technology].label}
          src={technologyData[technology].logo}
        />
      </a>
    </div>
  )
}
export default TechnologyCard
