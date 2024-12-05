import { useEffect, useState } from 'react'
import Header from './components/Header'
import SectionContainer from './components/SectionContainer'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'
import {getMovie, getHero, MovieT, MovieDetailedT} from './API_LOGIC'


function  App() {

  const [listaMovies, setListaMovies] = useState<MovieT[] | null>(null)
  const [hero, setHero] = useState<MovieDetailedT | null>(null)
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
        console.log(pelis)
        const movieHero = await getHero(pelis[0].id, 780)
        if (!movieHero) return console.error("Error: NO se pudo cargar el Hero")
        setHero(movieHero)


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
    <div className='relative' >
      <Header ></Header>
      <div className='w-full '>
        <Hero movieData={hero}></Hero>
      </div>
      <div className=''>
      <SectionContainer movieList={listaMovies} title='Tendencias'></SectionContainer>
      <SectionContainer movieList={listaMovies} title='Películas Similares'></SectionContainer>
      <SectionContainer movieList={listaMovies} title='Tus películas favoritas'></SectionContainer>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default App
