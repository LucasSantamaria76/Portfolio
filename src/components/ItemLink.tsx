import { TItems } from '@/types'
import Link from 'next/link'

interface Props {
  item: TItems
}

const ItemLink = ({ item }: Props) => {
  return (
    <Link
      href={item.link}
      className='h-12 w-full sm:h-full flex justify-center items-center hover:bg-black/50 duration-100 px-7 rounded-md'
    >
      {item.label}
    </Link>
  )
}
export default ItemLink
