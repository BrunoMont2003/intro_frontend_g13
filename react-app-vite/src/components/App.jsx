import React from 'react'
import { Contador } from './Contador'
// memo -> react components must be begin with uppercase
const App = () => {
  // logic of component

  // component view (jsx)
  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-900 text-white'>
      <Contador valorInicial={55} />
    </div>
  )
}

export default App
