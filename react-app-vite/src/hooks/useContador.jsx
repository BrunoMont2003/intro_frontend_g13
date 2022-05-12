import { useState } from 'react'

export const useContador = (numero = 0) => {
  const [contador, setContador] = useState(numero)
  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)

  return { contador, sumar, restar }
}
