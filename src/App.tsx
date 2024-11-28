import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import SectionContainer from './components/SectionContainer'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'

import {getMovie, getHero} from './API_LOGIC'

function  App() {
  const [count, setCount] = useState(0)
  const movies =  getMovie()
  console.log(movies)
  if (movies != undefined){
    // getHero(movies[0].id, window.innerWidth)

  }
  return (
    <div className='bg-primary relative z-[-2]'>
      <Header ></Header>
      <Hero></Hero>
      <div>
      <SectionContainer title='Tendencias'></SectionContainer>
      <SectionContainer title='Películas Similares'></SectionContainer>
      <SectionContainer title='Tus películas favoritas'></SectionContainer>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default App
