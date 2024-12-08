import { useEffect, useState } from 'react'
import Header from './components/Header'
import SectionContainer from './components/SectionContainer'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'
import {getMovie, getHero, MovieT, MovieDetailedT} from './API_LOGIC'


function  App() {

  const [listaMovies, setListaMovies] = useState<MovieT[] | null>(null)
  const [movieId, setMovieId] = useState<number>(Number(0))
  const [hero, setHero] = useState<MovieDetailedT | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string|null>(null)

  useEffect(()=>{
    const fetchMovies = async ()=>{
      try{
        setIsLoading(true)
        const pelis = await getMovie()
        if (!pelis) {
          console.error("Error: No se pudieron cargar las películas.");
          return;
        }
        setListaMovies(pelis)
        const randomNumber = Math.floor(Math.random()*20)
        const movieHero = await getHero(pelis[randomNumber].id, 780)
        if (!movieHero) return console.error("Error: NO se pudo cargar el Hero")
        setHero(movieHero)


      }catch(error){
        console.error('nos cagamos')
      }finally{
        setIsLoading(false)
      }
    }


    fetchMovies()

  }, []);
    
  // if (movies != undefined){
  //   // getHero(movies[0].id, window.innerWidth)

  // }
  return (
    <div className='relative' >
      <Header movieData={hero}></Header>
      <div className='w-full '>
        <Hero movieData={hero}></Hero>
      </div>
      <div className='m-9 mb-0 pb-20'>
        <div className='overflow-x-scroll scroll-fix'>
            <SectionContainer isLoading={isLoading} setMovieId={setMovieId} movieList={listaMovies} title='Tendencias'></SectionContainer>
        </div>
        <div className='overflow-x-scroll scroll-fix'>
          <SectionContainer isLoading={isLoading} setMovieId={setMovieId} movieList={listaMovies} title='Películas Similares'></SectionContainer>
          </div>
        <div className='overflow-x-scroll scroll-fix'>
          <SectionContainer isLoading={isLoading} setMovieId={setMovieId} movieList={listaMovies} title='Tus películas favoritas'></SectionContainer>
        </div>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default App
