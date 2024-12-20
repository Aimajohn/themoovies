import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SectionContainer from "@components/SectionContainer"
import { getMovie } from "@/API_LOGIC"
import { MovieT, genreIdT, genres } from "@/TYPES_CREATED"
import GenreCard from "@/components/GenreCard"
import TrendCard from "@/components/TrendCard"
import { Skeleton } from "@ui/skeleton"
import { ScrollArea, ScrollBar } from "@ui/scroll-area"

const TendenciasApp = () => {
  const { id } = useParams<{ id: genreIdT }>()
  const [movieId, setMovieId] = useState<number>(0)
  const [genreId, setGenreId] = useState<genreIdT>("0")
  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState<MovieT[] | null>(null)
  const [heroMovies, setHeroMovies] = useState<MovieT[]>([])

  useEffect(() => {
    setIsLoading(true)
    if (id) setGenreId(id)
    const renderMovies = async () => {
      try {
        const listaPelis = id
          ? await getMovie("popular", movieId, genreId)
          : await getMovie("popular", movieId, genreId)
        if (!listaPelis) throw new Error("terrible todo")
        setMovieList(listaPelis)
        setHeroMovies(listaPelis.slice(0, 2))
      } catch (error) {
        console.error("No se lidiar con errores sorry" + error)
      } finally {
        setIsLoading(false)
      }
    }

    renderMovies()
  }, [movieId, genreId])

  return (
    <div className="relative min-h-svh py-20">
      <Header movieData={null} />
      <div className="mx-4 lg:mx-8">
        {isLoading && (
          <div className="flex gap-6">
            <Skeleton className="h-80 grow-[1.5] rounded-xl" />
            <Skeleton className="h-80 grow-[2.5] rounded-xl" />
          </div>
        )}
        <div className={`flex gap-6 ${isLoading ? "hidden" : ""}`}>
          <TrendCard pelicula={heroMovies[0]} variant="short"></TrendCard>
          <TrendCard pelicula={heroMovies[1]} variant="large"></TrendCard>
        </div>
        <ScrollArea className="mb-4 w-full">
          <div className={`my-8`}>
            <GenreCard isLoading={isLoading} setGenreId={setGenreId} />
            <ScrollBar orientation="horizontal" />
          </div>
        </ScrollArea>
        <SectionContainer
          isLoading={isLoading}
          scrollType="flex-wrap"
          movieList={movieList}
          setMovieId={setMovieId}
          title={`Tendencias ${genreId != "0" ? "en " + genres[genreId] : ""}`}
        ></SectionContainer>
      </div>
      <Footer />
    </div>
  )
}

export default TendenciasApp
