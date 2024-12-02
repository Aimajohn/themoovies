import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import SectionContainer from './components/SectionContainer'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'

import {getMovie, getHero} from './API_LOGIC'

const movies = await getMovie() 

function  App() {
  const [count, setCount] = useState(0)
  // if (movies != undefined){
  //   // getHero(movies[0].id, window.innerWidth)

  // }
  return (
    <div className='relative pb-20' >
      {/* <Header ></Header> */}
      <Hero></Hero>
      <div>
      <SectionContainer movieList={movies} title='Tendencias'></SectionContainer>
      <SectionContainer movieList={movies} title='Películas Similares'></SectionContainer>
      <SectionContainer movieList={movies} title='Tus películas favoritas'></SectionContainer>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default App
