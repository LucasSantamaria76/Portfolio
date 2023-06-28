'use client'

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

export const Alert = ({ type, msg, show = false }: PropsAlert) => {
  return (
    <>
      {show && (
        <div className='flex items-center justify-center'>
          <div
            className={`absolute bottom-4 inset-x-auto z-20 border rounded text-sm p-4 flex justify-between ${colors[type]}`}
          >
            <div>
              <div className='flex items-center'>
                <svg
                  className='w-8 h-8 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                    clipRule='evenodd'
                  />
                </svg>
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
