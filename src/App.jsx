import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Productos from './components/Productos'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Header/>
	<main>
<Carousel/>
<Productos/>
	</main>
  </>

  )
}

export default App
