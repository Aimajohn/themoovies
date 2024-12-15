import Header from "@components/Header"
import { useMyContext } from "@/MyContext"
import SectionContainer from "@components/SectionContainer"
import { useEffect, useState } from "react"
import { searchShows } from "@/API_LOGIC"
import { MovieT, MovieDetailedT } from "@/TYPES_CREATED"
import { useParams } from "react-router"

type Props = {}

export function SearchPage({}: Props) {
  const { key } = useParams<{ key: string }>()
  const { movieId, setMovieId, searchValue, setSearchValue } = useMyContext()
  const [listaMovies, setListaMovies] = useState<MovieT[] | null>(null)
  const [hero, setHero] = useState<MovieDetailedT | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        console.log()
        if (!key) return console.log("errorpa")
        const pelis = await searchShows(searchValue)
        if (!pelis)
          return console.error("Error: No se pudieron cargar las películas.")

        setListaMovies(pelis)
      } catch (error) {
        console.error("nos cagamos" + error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [searchValue])

  return (
    <>
      <Header movieData={null} />
      <div className="flex min-h-svh w-full pt-20">
        <section className="w-1/5 bg-black">
          <h1>Limita tu busqueda para obtener mejores resultados</h1>
        </section>
        <section className="w-3/5">
          <SectionContainer
            title="Resultados"
            isLoading={false}
            setMovieId={setMovieId}
            scrollType="flex-wrap"
            key={0}
            movieList={listaMovies}
          />
        </section>
        <section className="w-1/5 bg-green-300 py-8">
          <div className="mx-auto size-64 bg-black"></div>
        </section>
      </div>
    </>
  )
}
