'use client'

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'

export type TAlert = 'info' | 'error' | 'warning' | 'success'

export interface PropsAlert {
  type: TAlert
  msg: string
  show: boolean
}

const colors = {
  info: 'bg-blue-500/50 border-blue-400 text-blue-800',
  error: 'bg-red-500/50 border-red-400 text-red-800',
  warning: 'bg-yellow-500/50 border-yellow-400 text-yellow-800',
  success: 'bg-green-500/50 border-green-400 text-green-800'
}

const icons = {
  info: <InformationCircleIcon className={`h-6 w-6 text-blue-500`} />,
  error: <XCircleIcon className={`h-6 w-6 text-red-500`} />,
  warning: <ExclamationTriangleIcon className={`h-6 w-6 text-yellow-500`} />,
  success: <CheckCircleIcon className={`h-6 w-6 text-green-500`} />
}

export const Alert = ({ type, msg, show = false }: PropsAlert) => {
  return (
    <>
      {show && (
        <div className='flex items-center justify-center'>
          <div
            className={`absolute top-36 md:top-20 inset-x-auto z-20 border rounded text-sm p-4 flex justify-between ${colors[type]}`}
          >
            <div>
              <div className='flex items-center gap-2'>
                {icons[type]}
                <p className='text-black'>{msg}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
