'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BarsArrowDownIcon, CodeBracketIcon, BarsArrowUpIcon } from '@heroicons/react/24/outline'
import { TItems } from '@/types'
import { ItemLink } from '@/components'
import { useCurrentWidth } from '@/hooks'

interface Props {
  menu: TItems[]
}

const Header = ({ menu }: Props) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const { width } = useCurrentWidth()

  useEffect(() => {
    setOpen(width > 639)
  }, [width])

  const mobile = `absolute top-[var(--toolbarHeight)] right-2 flex-col w-fit h-fit items-center gap-5 text-xl text-white glass bg-blue-800 ${
    open ? 'opacity-1' : 'opacity-0'
  } duration-300 z-0 rounded-md`

  const desktop = 'flex justify-between items-center text-md text-white h-full pb-1'

  return (
    <header
      className='fixed top-0 left-0 right-0 h-[var(--toolbarHeight)] glass z-10'
      onBlur={() => setOpen(false)}
    >
      <div className='flex justify-between items-center px-4 h-full flex-wrap'>
        <Link
          href='/'
          className='flex items-center gap-3 h-[var(--toolbarHeight)] cursor-pointer'
        >
          <CodeBracketIcon className='h-8 md:h-10 text-white border border-white rounded-md py-1 px-2 shadow-md active:shadow-none' />
          <h2 className='text-lg sm:text-xl md:text-3xl text-white'>Lucas Santamaria</h2>
        </Link>
        <button
          className='h-8 sm:hidden text-white border border-white rounded-md py-1 px-2 shadow-md active:shadow-none w-10'
          onClick={() => setOpen(!open)}
        >
          {open ? <BarsArrowUpIcon /> : <BarsArrowDownIcon />}
        </button>
        <div className={`${width < 640 ? mobile : desktop}`}>
          {menu.map(
            (item) =>
              pathname !== item.link && (
                <ItemLink
                  key={item.link}
                  item={item}
                />
              )
          )}
        </div>
      </div>
    </header>
  )
}
export default Header
