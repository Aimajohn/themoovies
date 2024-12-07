import MovieCard from '@/components/MovieCard'
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area'
import {MovieT, scrollT} from '@/API_LOGIC'
import { Skeleton } from './ui/skeleton'
type Props = {
  title: string, 
  movieList: MovieT[] | null , 
  scrollType?: scrollT, 
  setMovieId: React.Dispatch<React.SetStateAction<number>>,
  isLoading: boolean
}



export function MovieSkeleton() {
  return (
    <div className='mb-4 mr-4 inline-block'>
        <Skeleton className='w-52 h-72'/>
        <Skeleton className='w-28 h-5 mt-2'/>
      </div>
  )
}

function SectionContainer({title, movieList, scrollType, setMovieId, isLoading}: Props) {
  const arrayMovies:JSX.Element[]  = []

  movieList?.forEach(movie =>{
    arrayMovies.push(
      <MovieCard isLoading={isLoading} setMovieId={setMovieId} key={movie.id} calificacion={movie.vote_average} idPelicula={movie.id} titulo={movie.title} imagenSrc={'https://image.tmdb.org/t/p/w342/'+movie.poster_path}></MovieCard>
    )
  })

    const skeletonList: JSX.Element[] = Array.from({length: 17})
    skeletonList.fill(<MovieSkeleton/>, 0,16)
    console.log(skeletonList)
  return (
    <div className='mb-8'>
    {isLoading && <Skeleton className='h-8 w-60 mb-6 rounded-lg'/>}

      <h3 className={`text-slate-100 mb-6 text-2xl font-bold font-Poppins ${isLoading? 'hidden': ''}`}>{title}</h3>
        <ScrollArea className='w-full pb-6'>
        {isLoading && [...skeletonList]}
          <div className={`w-full gap-4 ${scrollType} ${isLoading? 'hidden': 'flex '}`}>
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