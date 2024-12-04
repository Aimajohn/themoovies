import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SectionContainer from './components/SectionContainer'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'

import {getMovie, getHero, MovieT} from './API_LOGIC'
function  App() {

  const [listaMovies, setListaMovies] = useState<MovieT[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string|null>(null)

  useEffect(()=>{
    const fetchMovies = async ()=>{
      try{
        setLoading(true)
        const pelis = await getMovie()
        if (!pelis) {
          console.error("Error: No se pudieron cargar las películas.");
          return;
        }
        setListaMovies(pelis)

      }catch(error){
        console.error('nos cagamos')
      }finally{
        setLoading(false)
      }
    }
    fetchMovies()

  }, []);
    
  // if (movies != undefined){
  //   // getHero(movies[0].id, window.innerWidth)

  // }
  return (
    <div className='relative pb-20' >
      {/* <Header ></Header> */}
      <Hero></Hero>
      <div>
      <SectionContainer movieList={listaMovies} title='Tendencias'></SectionContainer>
      <SectionContainer movieList={listaMovies} title='Películas Similares'></SectionContainer>
      <SectionContainer movieList={listaMovies} title='Tus películas favoritas'></SectionContainer>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default App
