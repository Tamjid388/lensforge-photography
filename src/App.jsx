import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
        <h1 class="text-3xl font-bold underline bg-amber-500">
    Hello world!
  </h1>
  <button class="btn btn-primary">One</button>
    </>
  )
}

export default App
