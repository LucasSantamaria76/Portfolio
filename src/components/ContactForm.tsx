'use client'

import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  firstName: z.string().nonempty('Campo requerido').trim(),
  lastName: z.string().nonempty('Campo requerido').trim(),
  email: z.string().nonempty('Campo requerido').email('Formato de correo no válido').trim(),
  phone: z.string().nonempty('Campo requerido').trim(),
  message: z.string().nonempty('Campo requerido').trim()
})

type Schema = z.infer<typeof schema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<Schema> = (data: Schema) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full p-8 border shadow-xl border-white/25 h-3/4 bg-gray-500/30 md:px-12 lg:w-9/12 rounded-2xl'
    >
      <div className='flex w-full'>
        <h1 className='text-4xl font-bold uppercase'>Mandame un mensaje</h1>
      </div>
      <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-2'>
        <div className='flex flex-col h-16 gap-1'>
          <input
            className={`w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg ${
              errors.firstName ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            placeholder='Nombre*'
            {...register('firstName')}
          />
          <p className='text-sm text-red-400'>{errors?.firstName?.message}</p>
        </div>
        <div className='flex flex-col h-16 gap-1'>
          <input
            className={`w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg ${
              errors.lastName ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            placeholder='Apellido*'
            {...register('lastName')}
          />
          <p className='text-sm text-red-400'>{errors?.lastName?.message}</p>
        </div>
        <div className='flex flex-col h-16 gap-1'>
          <input
            className={`w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg ${
              errors.email ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            placeholder='Correo*'
            {...register('email')}
          />
          <p className='text-sm text-red-400'>{errors?.email?.message}</p>
        </div>
        <div className='flex flex-col h-16 gap-1'>
          <input
            className={`w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg ${
              errors.phone ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            placeholder='Teléfono*'
            {...register('phone')}
          />
          <p className='text-sm text-red-400'>{errors?.phone?.message}</p>
        </div>
      </div>
      <div className='my-4'>
        <div className='flex flex-col gap-1 h-36'>
          <textarea
            placeholder='Mensaje*'
            className={`w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg resize-none ${
              errors.message ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            {...register('message')}
            defaultValue={''}
          />
          <p className='text-sm text-red-400'>{errors?.message?.message}</p>
        </div>
      </div>
      <div className='w-1/2 my-2 lg:w-1/4'>
        <button className='w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-blue-900 rounded-lg shadow-md hover:bg-blue-800 active:shadow-none'>
          Enviar mensaje
        </button>
      </div>
    </form>
  )
}

export default ContactForm
