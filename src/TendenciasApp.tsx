import {useEffect, useState} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from './components/SectionContainer'
import { getMovie, MovieT, genreIdT } from './API_LOGIC'
import GenreCard from '@/components/GenreCard'
import TrendCard from '@/components/TrendCard'

const genres = {
  "28": "Acción",
  "12": "Aventura",
  "16": "Animación",
  "35": "Comedia",
  "80": "Crimen",
  "99": "Documental",
  "18": "Drama",
  "10751": "Familia",
  "14": "Fantasía",
  "36": "Historia",
  "27": "Terror",
  "10402": "Música",
  "9648": "Misterio",
  "10749": "Romance",
  "878": "Ciencia ficción",
  "10770": "Película de TV",
  "53": "Suspense",
  "10752": "Bélica",
  "37": "Western",
  "0": ""
}


const TendenciasApp = () => {

  const [movieId, setMovieId] = useState<number>(0)
  const [genreId, setGenreId] = useState<genreIdT>("0")
  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState<MovieT[]|null>(null)
  const [heroMovies, setHeroMovies] = useState<MovieT[]>([])

  useEffect(() => {
    setIsLoading(true)
    const renderMovies = async ()=>{
      try{
        const listaPelis = await getMovie('popular',movieId, genreId)
        if (!listaPelis)  throw new Error('terrible todo')
        setMovieList(listaPelis)
        setHeroMovies(listaPelis.slice(0,2))
        
      }catch(error){
        console.error('No se lidiar con errores sorry')
      }finally{
        setIsLoading(false)
      }

    }

    renderMovies()

  }, [movieId, genreId])
  

  return (
    <div className='relative min-h-svh py-20'>
        <Header movieData={null}/>
        <div className='mx-8' >
          <div className='flex gap-6 '>
          <TrendCard pelicula={heroMovies[0]} variant='short'>    
          </TrendCard>
          <TrendCard pelicula={heroMovies[1]} variant='large'>    
          </TrendCard>
        

          </div>
          
          <div className='my-8'>
            <GenreCard setGenreId={setGenreId}/>
          </div>
          <SectionContainer scrollType='flex-wrap'  movieList={movieList} setMovieId={setMovieId} title={`Tendencias ${genreId != "0" ? 'en '+ genres[genreId]: ""}`} ></SectionContainer>
        </div>
        <Footer/>

    </div>
  )
}

export default TendenciasApp