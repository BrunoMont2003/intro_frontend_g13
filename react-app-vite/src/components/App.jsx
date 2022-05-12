import React from 'react'
import { ContadorHook } from './ContadorHook'
// import { Contador } from './Contador'
// import { LifeCycle } from './LifeCycle'
// memo -> react components must be begin with uppercase
const App = () => {
  // logic of component

  // component view (jsx)
  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-900 text-white'>
      {/* <Contador valorInicial={55} /> */}
      {/* <LifeCycle /> */}
      <ContadorHook />
    </div>
  )
}

export default App
