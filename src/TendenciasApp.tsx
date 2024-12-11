import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from './components/SectionContainer'
import { getMovie, MovieT, genreIdT, genres } from './API_LOGIC'
import GenreCard from '@/components/GenreCard'
import TrendCard from '@/components/TrendCard'



const TendenciasApp = () => {
  const {id} = useParams<{ id: genreIdT }>()
  const [movieId, setMovieId] = useState<number>(0)
  const [genreId, setGenreId] = useState<genreIdT>("0")
  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState<MovieT[]|null>(null)
  const [heroMovies, setHeroMovies] = useState<MovieT[]>([])

  useEffect(() => {
    setIsLoading(true)
    if (id) setGenreId(id)
    const renderMovies = async ()=>{
      try{
        console.log(id, 'hola pa')
        const listaPelis = id ?await getMovie('popular',movieId, genreId) : await getMovie('popular',movieId, genreId)
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
          <SectionContainer isLoading={isLoading} scrollType='flex-wrap'  movieList={movieList} setMovieId={setMovieId} title={`Tendencias ${genreId != "0" ? 'en '+ genres[genreId]: ""}`} ></SectionContainer>
        </div>
        <Footer/>

    </div>
  )
}

export default TendenciasApp