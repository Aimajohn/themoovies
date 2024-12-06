import {useEffect, useState} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from './components/SectionContainer'
import { getMovie, MovieT } from './API_LOGIC'
import GenreCard from '@/components/GenreCard'


type Props = {}

const TendenciasApp = (props: Props) => {

  const [movieId, setMovieId] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [movieList, setMovieList] = useState<MovieT[]|null>(null)

  useEffect(() => {
    setLoading(true)
    const renderMovies = async ()=>{
      try{
        const listaPelis = await getMovie('popular',0,16)
        if (!listaPelis)  throw new Error('terrible todo')
        setMovieList(listaPelis)
        
      }catch(error){
        console.error('No se lidiar con errores sorry')
      }finally{
        setLoading(false)
      }

    }

    renderMovies()

  }, [movieId])
  

  return (
    <div className='min-h-svh py-20'>
        <Header/>
        <div>
          <div>
            <div>Hola</div>
            <div>Hola</div>
          </div>
          <div>
            <GenreCard/>
            <div>trending</div>
            <div>Action</div>
            <div>Romance</div>
            <div>Romance</div>
            <div>Romance</div>
          </div>
          <SectionContainer movieList={movieList} setMovieId={setMovieId} title='Trending in Animation' ></SectionContainer>
        </div>
        <Footer/>

    </div>
  )
}

export default TendenciasApp