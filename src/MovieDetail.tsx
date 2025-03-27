import { useState, useEffect } from "react"
import Header from "@components/Header"
import Footer from "@components/Footer"
import HeroBackground from "@ui/hero-background"
import { useLocation } from "react-router"
import heroImgDefault from "@/imgs/default.png"
import "react-circular-progressbar/dist/styles.css"
import { getCredits, getHero, getMovie } from "@/API_LOGIC"
import { MovieCreditsResponseT, MovieDetailedT, MovieT } from "@/TYPES_CREATED"
import SectionContainer from "@components/SectionContainer"
import { Skeleton } from "@/components/ui/skeleton"
import { useParams } from "react-router"
import { getHeroImgURL } from "@/API_LOGIC"
import { MainMovieDetail } from "@components/MainMovieDetail"

function useOnUrlChange(callback: () => void) {
  const location = useLocation()

  useEffect(() => {
    // Ejecuta la función de callback al cambiar la URL
    callback()
  }, [location])
}

function MovieDetail() {
  const { id } = useParams<{ id: string }>()
  const [movieId, setMovieId] = useState<number>(Number(id))
  const [movie, setMovie] = useState<MovieDetailedT | null>(null)
  const [recommended, setRecommended] = useState<MovieT[] | null>(null)
  const [crewCast, setCrewCast] = useState<MovieCreditsResponseT | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useOnUrlChange(() => {
    setMovieId(Number(id))
  })

  useEffect(() => {
    setIsLoading(true)
    // setIsImgLoading(true)
    const getDetails = async () => {
      try {
        const idPelicula = Number(movieId)
        if (isNaN(idPelicula)) throw new Error("Parametro no es un numero")

        const [pelicula, lista, actores] = await Promise.all([
          getHero(idPelicula),
          getMovie("recommendations", Number(id), "0"),
          getCredits(Number(id)),
        ])

        if (!pelicula) throw new Error("No se pudo obtener lista")
        if (!lista) throw new Error("No se pudo obtener lista")
        if (!actores) throw new Error("No se pudo obtener actores")

        setMovie(pelicula)
        setRecommended(lista)
        setCrewCast(actores)
      } catch (error) {
        console.error("ijole pa" + error)
      } finally {
        setIsLoading(false)
        // setIsImgLoading(false)
      }
    }
    getDetails()
  }, [movieId])

  return (
    <div className="relative min-h-svh pb-20 text-slate-100">
      <Header movieData={null}></Header>
      <div className="absolute left-0 top-0 z-[-1] h-[40svh] w-full overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-b before:from-transparent before:to-primary">
        {isLoading && <Skeleton className="h-full w-full" />}

        <HeroBackground
          ClassName={`${isLoading ? "hidden" : ""}`}
          heroImg={movie ? getHeroImgURL(movie) : heroImgDefault}
        ></HeroBackground>
      </div>
      <div className="relative px-4 pt-64 lg:ml-24 lg:px-0">
        <MainMovieDetail
          isLoading={isLoading}
          movie={movie}
          crewCast={crewCast}
        />
      </div>
      <div className="mx-4 lg:m-14 lg:ml-24">
        <SectionContainer
          isLoading={isLoading}
          setMovieId={setMovieId}
          movieList={recommended}
          title="Recomendaciones"
          scrollType="flex-wrap"
        ></SectionContainer>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default MovieDetail
