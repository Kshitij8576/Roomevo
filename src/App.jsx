import { useState } from 'react'
import './App.css'
import Section1 from './Components/Section1'
import Second from './Components/Second'
import Third from './Components/Third'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section1/>
      <Second/>
      <Third/>
    </>
  )
}

export default App
