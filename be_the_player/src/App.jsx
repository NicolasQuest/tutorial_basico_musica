import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>
        <h1> Be the player</h1>
      </div>
      <div className='flex justify-center gap-3'>  
        <button className='bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
        C
      </button>
        <button className='bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          D
        </button></div>
    </>
  )
}

export default App
