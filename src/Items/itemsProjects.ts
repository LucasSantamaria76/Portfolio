import { TItemsProyect } from '@/types'

export const itemsProjects: TItemsProyect[] = [
  {
    id: 1,
    name: 'Portfolio',
    description:
      'Portfolio personal desarrolado con Next.js, TypeScript, Tailwindcss, React-hook-form, Zod y EmailJS',
    image:
      'https://res.cloudinary.com/dldd3gcr5/image/upload/v1682718485/Portfolio%20asset/Portfolio_swb4ti.png',
    linkDemo: 'https://portfolio-lucas-santamaria.vercel.app/',
    linkRepo: 'https://github.com/LucasSantamaria76/Portfolio',
    icon: 'https://res.cloudinary.com/dldd3gcr5/image/upload/v1683747679/favicon_sipnof.ico',
    technologies: ['next', 'typescript', 'tailwind', 'rhf', 'zod', 'EmailJS'],
    download: false
  },
  {
    id: 3,
    name: 'Fruit-system',
    description: `Sistema de caja para dispositivos moviles de un comercio de frutas y verduras desarrollado con React-native , React-navigation, Zustand, Tailwind CSS y Supabase. ---
    Datos de prueba :  ( Correo: admin@admin - 
    Password: 123456 ) =====  Nota:" En la demo se borran los datos de forma frecuente, para uso comercial enviarme un mensaje en el apartado de contacto "`,
    image: 'https://res.cloudinary.com/dldd3gcr5/image/upload/v1688068255/tablet_e1qtfw.png',
    linkDemo: 'https://mega.nz/file/DUMhxCZI#k9EdjMwjor03SRNvlLPzYkaxl56wxgAgfBhg1Fy-Tls',
    linkRepo: 'https://github.com/LucasSantamaria76/Fruit-system.git',
    icon: 'https://res.cloudinary.com/dldd3gcr5/image/upload/v1688067336/iconFV_wptukr.png',
    technologies: ['RN', 'RNav', 'tailwind', 'zustand', 'supabase'],
    download: true
  },
  {
    id: 8,
    name: 'Sys-Market',
    description: `Sistema de caja de un almacén desarrollado en el Front-End con ReactJS, Mantine UI, Redux Toolkit, Zod y en el
    Back-End con NodeJS, ExpressJS, TypeScript, Prisma ORM, Bcrypt, Jsonwebtoken    
    Datos de prueba :  ( Usuario: admin - 
    Password: admin123 )`,
    image: 'https://res.cloudinary.com/dldd3gcr5/image/upload/v1683689506/sys-market_yttujr.png',
    linkDemo: 'https://sys-market.vercel.app/',
    linkRepo: 'https://github.com/LucasSantamaria76/sys-market',
    icon: 'https://res.cloudinary.com/dldd3gcr5/image/upload/v1683748960/favicon_p5xwuu.ico',
    technologies: [
      'react',
      'mantine',
      'rtk',
      'zod',
      'node',
      'express',
      'typescript',
      'prisma',
      'bcrypt',
      'jwt'
    ],
    download: false
  },
  {
    id: 9,
    name: 'Free Market',
    description:
      'E-commers de productos de almacén con caracteristicas de carrito de compras, filtros por categorias, página de favoritos, inicio de sesión con Google. Realizado en React.js, Styled-components, SweetAlert 2 para los modales, Firebase para persistencia de datos e inicio de sesión, Formik y Yup para los formularios y Redux toolkit para el manejo de los estados globales',
    image:
      'https://res.cloudinary.com/dldd3gcr5/image/upload/v1682717891/Portfolio%20asset/ecommersReact_olixod.png',
    linkDemo: 'https://free-market-nucba.vercel.app/',
    linkRepo: 'https://github.com/LucasSantamaria76/integrador-react-nucba',
    icon: 'https://res.cloudinary.com/dldd3gcr5/image/upload/v1683750204/vite_xo5mlj.svg',
    technologies: ['react', 'sc', 'swa2', 'firebase', 'formik', 'rtk'],
    download: false
  },
  {
    id: 10,
    name: 'Mi Tiendita',
    description:
      'Pequeño e-commers de productos de almacén con la opción de carrito de compras realizado en Javascript, CSS, Boostrap y SweetAlert 2 para los modales',
    image:
      'https://res.cloudinary.com/dldd3gcr5/image/upload/v1682717891/Portfolio%20asset/ecommersJavascript_yeanks.png',
    linkDemo: 'https://mitienditaonline.vercel.app/',
    linkRepo: 'https://github.com/LucasSantamaria76/Proyecto-Integrador-Javascript-Nucba-',
    icon: 'https://res.cloudinary.com/dldd3gcr5/image/upload/v1683751719/favicon_uvloj2.ico',
    technologies: ['html', 'css', 'bootstrap', 'swa2'],
    download: false
  }
]
