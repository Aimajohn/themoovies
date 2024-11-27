import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import SectionContainer from './components/SectionContainer'
import Hero from './components/Hero'
import './App.css'

import {getMovie, getHero} from './API_LOGIC'

function  App() {
  const [count, setCount] = useState(0)
  const movies =  getMovie()
  console.log(movies)
  if (movies != undefined){
    // getHero(movies[0].id, window.innerWidth)

  }
  return (
    <div >
      <Header ></Header>
      <Hero></Hero>
      <SectionContainer></SectionContainer>
    </div>
  )
}

export default App
