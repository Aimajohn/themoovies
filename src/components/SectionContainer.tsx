import MovieCard from '@/components/MovieCard'

import {MovieT, redondear} from '@/API_LOGIC'
type Props = {title: string, movieList: MovieT[] | null }


function SectionContainer({title, movieList}: Props) {
  const arrayMovies:JSX.Element[]  = []

  movieList?.forEach(movie =>{
    arrayMovies.push(
      <MovieCard calificacion={movie.vote_average} titulo={movie.title} imagenSrc={'https://image.tmdb.org/t/p/w342/'+movie.poster_path}></MovieCard>
    )
  })

  return (
    <div className='px-10 mb-8'>
      <h3 className='text-slate-100 mb-6 text-2xl font-bold font-Poppins'>{title}</h3>
      <div className='flex overflow-x-scroll gap-4 scroll-fix'>
        {...arrayMovies}
        {/* <MovieCard ></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard> */}
      </div>
    </div>
  )
}

export default SectionContainer