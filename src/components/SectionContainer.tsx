import MovieCard from '@/components/MovieCard'
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area'
import {MovieT, redondear, scrollT} from '@/API_LOGIC'
import { Scrollbar } from '@radix-ui/react-scroll-area'
type Props = {
  title: string, 
  movieList: MovieT[] | null , 
  scrollType?: scrollT, 
  setMovieId: React.Dispatch<React.SetStateAction<number>>
}


function SectionContainer({title, movieList, scrollType, setMovieId}: Props) {
  const arrayMovies:JSX.Element[]  = []

  movieList?.forEach(movie =>{
    arrayMovies.push(
      <MovieCard setMovieId={setMovieId} calificacion={movie.vote_average} idPelicula={movie.id} titulo={movie.title} imagenSrc={'https://image.tmdb.org/t/p/w342/'+movie.poster_path}></MovieCard>
    )
  })

  return (
    <div className='mb-8'>
      <h3 className='text-slate-100 mb-6 text-2xl font-bold font-Poppins'>{title}</h3>
        <ScrollArea className='w-full'>
      <div className={'w-max flex gap-4 '+ scrollType}>
        {...arrayMovies}
        </div>
        <Scrollbar/>
        </ScrollArea>
        {/* <MovieCard ></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard> */}
    </div>
  )
}

export default SectionContainer