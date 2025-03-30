import { useEffect, useState } from "react"
import Header from "@/components/Header"
import SectionContainer from "@/components/SectionContainer"
import { InfiniteSection } from "@/components/InfiniteSection"
import Hero from "@/components/Hero"
import "@/App.css"
import Footer from "@/components/Footer"
import { getMovie, getHero } from "@/API_LOGIC"
import { MovieT, MovieDetailedT } from "@/TYPES_CREATED"
import { SearchBar } from "./components/searchBar"
import { useLocalStorage } from "./useLocalStorage"
import { default_recom } from "./papa"
import { default_hero } from "./papa"
let recommendations: MovieT[] = default_recom as any
recommendations = recommendations as MovieT[]

function App() {
  const [myMovies] = useLocalStorage("storagedMovies", "")
  const [listaMovies, setListaMovies] = useState<MovieT[] | null>(null)
  const [recommendedMovies, setRecommendedMovies] = useState<MovieT[] | null>(
    null,
  )
  const [movieId, setMovieId] = useState<number>(Number(0))
  const [hero, setHero] = useState<MovieDetailedT | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  // const [error, setError] = useState<string|null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        const pelis = await getMovie()

        if (!pelis) {
          console.error("Error: No se pudieron cargar las películas.")
          return
        }
        setListaMovies(pelis)
        const randomNumber = Math.floor(Math.random() * 20)
        const movieHero = await getHero(pelis[randomNumber].id)
        const recom = await getMovie(
          "recommendations",
          pelis[randomNumber].id,
          "0",
        )
        if (!recom) {
          console.error("Error: No se pudieron cargar las películas.")
          return
        }

        if (recom.length > 0) {
          setRecommendedMovies(recom)
        } else {
          setRecommendedMovies(recommendations)
        }

        if (!movieHero) return console.error("Error: NO se pudo cargar el Hero")
        setHero(movieHero)
      } catch (error) {
        console.error("nos cagamos" + error)
        setRecommendedMovies(recommendations)
        setHero(default_hero)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [])

  // if (movies != undefined){
  //   // getHero(movies[0].id, window.innerWidth)

  // }
  return (
    <div className="relative">
      <Header movieData={hero}></Header>
      <div className="w-full">
        <Hero key={movieId} movieData={hero} isLoading={isLoading}></Hero>
      </div>
      <div className="m-6 md:hidden">
        <SearchBar />
      </div>
      <div className="mx-4 mb-0 pb-20 lg:m-9 lg:-mt-6 lg:mb-0">
        <SectionContainer
          isLoading={isLoading}
          setMovieId={setMovieId}
          movieList={recommendedMovies}
          title="Películas Similares"
        ></SectionContainer>
        <SectionContainer
          isLoading={isLoading}
          setMovieId={setMovieId}
          movieList={Object.values(myMovies)}
          title="Tus películas favoritas ❤️ "
        ></SectionContainer>
        <InfiniteSection
          isLoading={isLoading}
          setMovieId={setMovieId}
          movieList={listaMovies}
          title="Tendencias"
          scrollType={true}
        ></InfiniteSection>
      </div>
      <Footer />
    </div>
  )
}

export default App
