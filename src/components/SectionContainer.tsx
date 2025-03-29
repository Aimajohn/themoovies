import MovieCard from "@/components/MovieCard"
import { useRef } from "react"
import { MovieT, scrollT } from "@/TYPES_CREATED"
import { Skeleton } from "@ui/skeleton"
type Props = {
  title: string
  movieList: MovieT[] | null
  scrollType?: boolean
  setMovieId: React.Dispatch<React.SetStateAction<number>>
  isLoading: boolean
  cols?: number
}

export function MovieSkeleton() {
  return (
    <div className="mb-4 mr-2 inline-block">
      <Skeleton className="h-60 w-40 lg:h-72 lg:w-52" />
      <Skeleton className="mt-2 h-5 w-28" />
    </div>
  )
}

function SectionContainer({
  scrollType = false,
  title,
  movieList,
  setMovieId,
  isLoading,
}: Props) {
  const arrayMovies: JSX.Element[] = []
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  movieList?.forEach((movie) => {
    arrayMovies.push(
      <MovieCard
        isLoading={isLoading}
        setMovieId={setMovieId}
        key={movie.id}
        movieInfo={movie}
        idPelicula={Number(movie.id)}
      ></MovieCard>,
    )
  })

  const skeletonList: JSX.Element[] = Array.from({ length: 20 })
  skeletonList.fill(<MovieSkeleton />, 0, 20)
  const myElemento: JSX.Element = <div>{...skeletonList}</div>
  return (
    <div className="mx-4 mb-6 lg:mx-8" ref={scrollContainerRef}>
      {isLoading && <Skeleton className="mb-6 h-8 w-60 rounded-lg" />}

      <h3
        className={`mb-6 font-Poppins text-2xl font-bold text-slate-100 ${isLoading ? "hidden" : ""}`}
      >
        {title}
      </h3>

      <div>
        {isLoading && myElemento}
        {!movieList?.length && (
          <div className="flex items-center justify-center">
            <p className="my-2 rounded-md bg-slate-500/10 px-20 py-32 text-center text-xl text-slate-200">
              No tienes peliculas favoritas, intenta regalar corazoncitos 💖
            </p>
          </div>
        )}
        <div
          className={`${scrollType ? "" : "gridMoviesContainer"} grid w-full grid-cols-3 flex-wrap gap-4 overflow-hidden md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7`}
        >
          {...arrayMovies}
        </div>
      </div>
      {/* <MovieCard ></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard> */}
    </div>
  )
}

export default SectionContainer
