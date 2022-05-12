import { useContador } from '@/hooks/useContador'
import React from 'react'

export const ContadorHook = () => {
  const { contador, sumar, restar } = useContador()

  return (
    <section className='flex items-center flex-col gap-5'>
      <p>Componente con el uso del custom hook</p>
      <p className='text-3xl'>{contador}</p>
      <article className='gap-5 flex'>
        <button
          onClick={sumar}
          className='bg-blue-800 w-12 h-12 text-2xl rounded-full focus:border'
        >
          +
        </button>
        <button
          onClick={restar}
          className='bg-red-500 w-12 h-12 text-2xl rounded-full focus:border'
        >
          -
        </button>
      </article>
    </section>
  )
}
