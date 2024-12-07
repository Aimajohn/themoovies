import MovieCard from '@/components/MovieCard'
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area'
import {MovieT, scrollT} from '@/API_LOGIC'
import { Skeleton } from './ui/skeleton'
type Props = {
  title: string, 
  movieList: MovieT[] | null , 
  scrollType?: scrollT, 
  setMovieId: React.Dispatch<React.SetStateAction<number>>
}



export function MovieSkeleton() {
  return (
    <div>
     { <div className='flex flex-col'>
        <Skeleton className='w-52 h-72'/>
        <Skeleton className='w-20 h-6'/>
      </div>}

      </div>
  )
}

function SectionContainer({title, movieList, scrollType, setMovieId}: Props) {
  const arrayMovies:JSX.Element[]  = []

  movieList?.forEach(movie =>{
    arrayMovies.push(
      <MovieCard setMovieId={setMovieId} key={movie.id} calificacion={movie.vote_average} idPelicula={movie.id} titulo={movie.title} imagenSrc={'https://image.tmdb.org/t/p/w342/'+movie.poster_path}></MovieCard>
    )
  })


  return (
    <div className='mb-8'>
      <h3 className='text-slate-100 mb-6 text-2xl font-bold font-Poppins'>{title}</h3>
        <ScrollArea className='w-full pb-6'>
          <div className={'w-full flex gap-4 '+ scrollType}>
            {...arrayMovies}
          </div>
          <ScrollBar orientation="horizontal" />
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