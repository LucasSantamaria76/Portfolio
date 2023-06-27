import { useState, useEffect } from 'react'

const getWidth = () => {
  if (typeof window !== 'undefined') {
    return window?.innerWidth || document?.documentElement.clientWidth || document?.body.clientWidth
  }
  return 1024
}

export const useCurrentWidth = () => {
  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    const resizeListener = () => setWidth(getWidth())

    window.addEventListener('resize', resizeListener)

    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  return { width }
}
