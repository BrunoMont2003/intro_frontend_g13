import React, { useState } from 'react'

export const Contador = ({ valorInicial = 0 }) => {
  // useState -> component states
  // [variable / state, mod function ]
  const [numero, setNumero] = useState(valorInicial)
  const add = (amount = 1) => {
    setNumero(numero + amount)
  }
  const myClass =
    'py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
  return (
    <section className='flex items-center justify-center flex-col gap-5'>
      <button type='button' class={myClass} onClick={() => add()}>
        Add
      </button>
      <p>{numero}</p>
    </section>
  )
}
