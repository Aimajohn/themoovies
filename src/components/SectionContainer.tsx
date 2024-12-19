import MovieCard from "@/components/MovieCard"
import { useRef } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { MovieT, scrollT } from "@/TYPES_CREATED"
import { Skeleton } from "@ui/skeleton"
type Props = {
  title: string
  movieList: MovieT[] | null
  scrollType?: scrollT
  setMovieId: React.Dispatch<React.SetStateAction<number>>
  isLoading: boolean
}

export function MovieSkeleton() {
  return (
    <div className="mb-4 mr-4 inline-block">
      <Skeleton className="h-72 w-52" />
      <Skeleton className="mt-2 h-5 w-28" />
    </div>
  )
}

function SectionContainer({
  title,
  movieList,
  scrollType,
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
        calificacion={movie.vote_average}
        idPelicula={movie.id}
        titulo={movie.title}
        imagenSrc={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
      ></MovieCard>,
    )
  })

  const skeletonList: JSX.Element[] = Array.from({ length: 17 })
  skeletonList.fill(<MovieSkeleton />, 0, 16)
  return (
    <div className="mb-8 w-full" ref={scrollContainerRef}>
      {isLoading && <Skeleton className="mb-6 h-8 w-60 rounded-lg" />}

      <h3
        className={`mb-6 font-Poppins text-2xl font-bold text-slate-100 ${isLoading ? "hidden" : ""}`}
      >
        {title}
      </h3>
      <ScrollArea className="w-full">
        {isLoading && [...skeletonList]}
        <div
          className={`mb-2 w-full gap-4 ${scrollType} ${isLoading ? "hidden" : "flex"}`}
        >
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
