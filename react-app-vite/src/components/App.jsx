import React from 'react'
import { Contador } from './Contador'
// memo -> react components must be begin with uppercase
const App = () => {
  // logic of component
  const userName = 'Bruno'

  // component view (jsx)
  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-900 text-white'>
      Hello, {userName}!
      <Contador />
    </div>
  )
}

export default App
