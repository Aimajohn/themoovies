import Header from "@components/Header"
import { useMyContext } from "@/MyContext"
import SectionContainer from "@components/SectionContainer"
import { useEffect, useState } from "react"
import { searchShows } from "@/API_LOGIC"
import { MovieT } from "@/TYPES_CREATED"
import { useParams } from "react-router"
import { Switch } from "@ui/switch"
import { Label } from "@ui/label"
import batabitAd from "@/imgs/batabit.png"
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectContent,
  SelectLabel,
} from "@ui/select"

export function SearchPage() {
  const { key } = useParams<{ key: string }>()
  const { setMovieId, searchValue } = useMyContext()
  const [listaMovies, setListaMovies] = useState<MovieT[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [filters, setFilters] = useState({ includes18: false, yearMovie: "" })

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        if (!key) return console.log("errorpa")
        const pelis = await searchShows(
          searchValue,
          filters.includes18,
          filters.yearMovie,
        )
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
  }, [searchValue, filters])

  const startYear = 1970
  const endYear = 2024
  const yearsArray = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => endYear - index,
  )
  const compo: JSX.Element[] = [<SelectItem value="none">Ninguno</SelectItem>]
  yearsArray.forEach((year) => {
    compo.push(<SelectItem value={String(year)}>{year}</SelectItem>)
  })
  const yearOnChange = (e: string) => {
    setFilters({ ...filters, yearMovie: e })
  }
  const checkedOnChange = (e: boolean) => {
    setFilters({ ...filters, includes18: e })
  }

  return (
    <>
      <Header movieData={null} />
      <div className="flex min-h-svh w-full pt-20">
        <section className="my-8 w-1/4 rounded-xl bg-blue-50 bg-opacity-5 py-8 opacity-90">
          <h1 className="mb-6 text-center font-Montserrat text-xl font-bold text-slate-200">
            Tablero Proyectos
          </h1>
          <div className="mx-6 mb-6 overflow-hidden rounded-lg bg-slate-100 pb-4">
            <img src={batabitAd} alt="batabit Ad" />
            <div className="mx-4 mt-4 text-slate-800">
              <h2 className="font-bold">Proyecto Batabit</h2>
              <span className="font-Montserrat text-sm text-opacity-20">
                <b className="font-semibold">Release date: </b>April 2021{" "}
              </span>
            </div>
          </div>
          <div className="mx-6 mb-6 overflow-hidden rounded-lg bg-slate-100 pb-4">
            <img src={batabitAd} alt="batabit Ad" />
            <div className="mx-4 mt-4 text-slate-800">
              <h2 className="font-bold">Proyecto Batabit</h2>
              <span className="font-Montserrat text-sm text-opacity-20">
                <b className="font-semibold">Release date: </b>April 2021{" "}
              </span>
            </div>
          </div>
          <div className="mx-6 mb-6 overflow-hidden rounded-lg bg-slate-100 pb-4">
            <img src={batabitAd} alt="batabit Ad" />
            <div className="mx-4 mt-4 text-slate-800">
              <h2 className="font-bold">Proyecto Batabit</h2>
              <span className="font-Montserrat text-sm text-opacity-20">
                <b className="font-semibold">Release date: </b>April 2021{" "}
              </span>
            </div>
          </div>
        </section>
        <section className="w-full px-8 py-4 text-slate-200">
          <div className="my-4 flex items-center justify-between rounded-lg bg-blue-200 bg-opacity-5 px-8 py-6">
            <h1>Limita tu busqueda para obtener mejores resultados</h1>
            <div className="flex items-center gap-2">
              <Switch onCheckedChange={(e) => checkedOnChange(e)} id="plus18" />
              <Label htmlFor="plus18">Contenido +18</Label>
              <Select onValueChange={(e) => yearOnChange(e)}>
                <SelectTrigger className="ml-8 w-[180px]">
                  <SelectValue placeholder="Fecha de Lanzamiento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Año</SelectLabel>
                    {...compo}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <SectionContainer
            title={`Resultados para ${key}`}
            isLoading={isLoading}
            setMovieId={setMovieId}
            scrollType="flex-wrap"
            key={0}
            movieList={listaMovies}
          />
        </section>
      </div>
    </>
  )
}
