import { Inter } from 'next/font/google'
import { Header } from '@/components'
import { mainMenu } from '@/Items'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Porfolio by Lucas Santamaria'
}

interface Props {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <html
      lang='es'
      className='light'
    >
      <body
        className={`${inter.className} min-h-screen min-w-full bg-gradient-to-r from-cyan-600 via-blue-800 to-cyan-600`}
      >
        <Header menu={mainMenu} />
        {children}
      </body>
    </html>
  )
}

export default layout
