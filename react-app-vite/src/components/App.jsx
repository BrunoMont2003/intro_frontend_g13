import React from 'react'
// memo -> react components must be begin with uppercase
const App = () => {
  // logic of component
  const userName = 'Bruno'

  // component view (jsx)
  return <div className='App'>Hello, {userName}!</div>
}

export default App
