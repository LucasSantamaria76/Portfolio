'use client'

import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import * as z from 'zod'
import { useRef, useState } from 'react'
import Alert, { PropsAlert, TAlert } from './Alert'

const schema = z.object({
  user_name: z.string().nonempty('Campo requerido').trim(),
  user_email: z.string().nonempty('Campo requerido').email('Formato de correo no válido').trim(),
  user_phone: z.string().trim(),
  message: z.string().nonempty('Campo requerido').trim()
})

type Schema = z.infer<typeof schema>

const ContactForm = () => {
  const [alert, setAlert] = useState<PropsAlert>({
    show: false,
    msg: '',
    type: 'success'
  })
  const form = useRef<HTMLFormElement>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(schema)
  })

  const hiddenAlert = () =>
    setAlert((prev) => ({
      ...prev,
      show: false
    }))

  const showAlert = (type: TAlert, msg: string) => {
    setAlert({
      show: true,
      msg,
      type
    })
    setTimeout(() => {
      hiddenAlert()
    }, 5000)
  }

  const onSubmit: SubmitHandler<Schema> = async (data: Schema) => {
    try {
      console.log(process.env.NEXT_PUBLIC_SERVICE_ID)

      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_KEY_PUBLIC!
      )
      showAlert('success', 'Mensaje enviado con éxito')
      reset()
    } catch (error: any) {
      showAlert('error', error.text)
    }
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className='w-full p-8 border shadow-xl border-white/25 h-3/4 bg-gray-500/30 md:px-12 lg:w-8/12 rounded-2xl'
    >
      <div className='flex w-full'>
        <h1 className='text-4xl font-bold uppercase'>Mandame un mensaje</h1>
      </div>
      <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-3'>
        <div className='flex flex-col h-16 gap-1 md:col-span-3'>
          <input
            className={`w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg ${
              errors.user_name ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            placeholder='Nombre *'
            {...register('user_name')}
            onFocus={hiddenAlert}
          />
          <p className='text-sm text-red-400'>{errors?.user_name?.message}</p>
        </div>

        <div className='flex flex-col h-16 gap-1 md:col-span-2'>
          <input
            className={`w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg ${
              errors.user_email ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            placeholder='Correo *'
            {...register('user_email')}
            onFocus={hiddenAlert}
          />
          <p className='text-sm text-red-400'>{errors?.user_email?.message}</p>
        </div>
        <div className='flex flex-col h-16 gap-1'>
          <input
            className={`w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg ${
              errors.user_phone ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            placeholder='Teléfono'
            {...register('user_phone')}
            onFocus={hiddenAlert}
          />
          <p className='text-sm text-red-400'>{errors?.user_phone?.message}</p>
        </div>
      </div>
      <div className='my-4'>
        <div className='flex flex-col gap-1 h-36'>
          <textarea
            placeholder='Mensaje *'
            className={`w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg resize-none ${
              errors.message ? 'outline-red-500' : 'outline-blue-700'
            } focus:outline-2`}
            {...register('message')}
            onFocus={hiddenAlert}
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
      <Alert
        type={alert.type}
        msg={alert.msg}
        show={alert.show}
      />
    </form>
  )
}

export default ContactForm
