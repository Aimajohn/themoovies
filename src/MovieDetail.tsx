import { useState, useEffect } from "react"
import Header from "@components/Header"
import Footer from "@components/Footer"
import HeroBackground from "@ui/hero-background"
import { Button } from "@ui/button"
import CrewCard from "@components/CrewCard"
import { useLocation } from "react-router"
// import movieFace from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import heroImg from "@/imgs/m2teNSCH7sxkuXHossRJXhxPKeT.jpg"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { FaShareAlt, FaBookmark, FaPlay } from "react-icons/fa"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table"
import { NavLink, useParams } from "react-router"
import { getCredits, getHero, getMovie } from "@/API_LOGIC"
import { MovieCreditsResponseT, MovieDetailedT, MovieT } from "@/TYPES_CREATED"
import { redondearF, getHeroImgURL } from "@/API_LOGIC"
import SectionContainer from "@components/SectionContainer"
import { Skeleton } from "@/components/ui/skeleton"

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
  const [isImgLoading, setIsImgLoading] = useState<boolean>(true)

  useOnUrlChange(() => {
    setMovieId(Number(id))
  })

  useEffect(() => {
    setIsLoading(true)
    setIsImgLoading(true)
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
        setIsImgLoading(false)
      }
    }
    getDetails()
  }, [movieId])
  type miLista = { id: number; name: string }[]
  const genreGenerator = (miLista: miLista | undefined) => {
    if (!miLista) return []
    const genresList: JSX.Element[] = []
    let keymaster = 0
    for (const genero of miLista) {
      keymaster++
      genresList.push(
        <Button key={keymaster}>
          <NavLink to={"/tendencias/genero/" + genero.id}>
            {genero.name}
          </NavLink>
        </Button>,
      )
    }
    return genresList
  }

  const castGenerator = (movieCast: MovieCreditsResponseT) => {
    const returnValue: JSX.Element[] = []
    movieCast.cast.slice(0, 5).forEach((member) => {
      returnValue.push(
        <CrewCard
          key={member.cast_id}
          isLoading={isLoading}
          miembro={member}
        ></CrewCard>,
      )
    })
    return returnValue
  }

  const loadImg = () => {
    setIsImgLoading(false)
  }

  return (
    <div className="relative min-h-svh pb-20 text-slate-100">
      <Header movieData={null}></Header>
      <div className="absolute left-0 top-0 z-[-1] h-[40svh] w-full overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-b before:from-transparent before:to-primary">
        {isLoading && <Skeleton className="h-full w-full" />}

        <HeroBackground
          ClassName={`${isLoading ? "hidden" : ""}`}
          heroImg={movie ? getHeroImgURL(movie) : heroImg}
        ></HeroBackground>
      </div>
      <div className="relative px-4 pt-64 lg:ml-24 lg:px-0">
        <div className="relative flex flex-col gap-10 pt-8 lg:flex-row lg:gap-0">
          <section className="hidden lg:block lg:w-1/5">
            <div className="flex flex-col">
              {isImgLoading && (
                <Skeleton className="h-[383.33px] w-[262.55px] rounded-xl shadow-xl" />
              )}

              <div
                className={`w-4/5 overflow-hidden rounded-xl shadow-lg ${isImgLoading ? "hidden" : "block"}`}
              >
                <img
                  src={"https://image.tmdb.org/t/p/w342" + movie?.poster_path}
                  alt="caratula"
                  onLoad={() => loadImg()}
                />
              </div>
              <div className="mt-4 flex h-20 items-center">
                {isLoading && (
                  <Skeleton className="ml-5 mr-5 mt-3 size-16 rounded-full" />
                )}

                <CircularProgressbar
                  className={`h-16 w-1/3 font-bold ${isLoading ? "hidden" : "block"}`}
                  strokeWidth={7.5}
                  maxValue={10}
                  value={redondearF(movie?.vote_average)}
                  text={`${redondearF(movie?.vote_average)}`}
                  styles={buildStyles({
                    pathColor: `rgb(234, 179, 8)`,
                    textColor: "#f3f7f2",
                    textSize: "2rem",
                    trailColor: "#060606",
                  })}
                />
                <div className="w-2/3">
                  {isLoading && <Skeleton className="mt-2 h-3 w-24" />}
                  {isLoading && <Skeleton className="mt-3 h-3 w-24" />}
                  <p className={` ${isLoading ? "hidden" : "block"}`}>
                    <b>{movie?.vote_count} </b>ratings
                  </p>
                  <p className={` ${isLoading ? "hidden" : "block"}`}>
                    <b>{movie?.popularity} </b>views
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="order-1 lg:order-2 lg:w-3/5">
            <article>
              <div className="flex items-center justify-between">
                <div>
                  {isLoading && (
                    <Skeleton className="mb-2 h-7 w-56 rounded-full" />
                  )}
                  <h1
                    className={`font-Poppins text-3xl font-bold tracking-wide ${isLoading ? "hidden" : "block"}`}
                  >
                    {movie?.title}
                  </h1>
                  {isLoading && (
                    <Skeleton className="my-3 h-3 w-24 rounded-full" />
                  )}
                  <p
                    className={`text-sm font-light leading-loose ${isLoading ? "hidden" : "block"}`}
                  >
                    Original title: {movie?.original_title}
                  </p>
                  {isLoading && (
                    <Skeleton className="my-5 h-5 w-36 rounded-full" />
                  )}
                  <h4
                    className={`font-semibold leading-loose text-slate-200 ${isLoading ? "hidden" : "block"}`}
                  >
                    Movie ({movie?.release_date})
                  </h4>
                </div>
                <div className="self-start lg:hidden">
                  {isLoading && (
                    <Skeleton className="ml-5 mr-5 mt-3 size-16 rounded-full" />
                  )}

                  <CircularProgressbar
                    className={`mx-auto h-16 font-bold ${isLoading ? "hidden" : "block"}`}
                    strokeWidth={7.5}
                    maxValue={10}
                    value={redondearF(movie?.vote_average)}
                    text={`${redondearF(movie?.vote_average)}`}
                    styles={buildStyles({
                      pathColor: `rgb(234, 179, 8)`,
                      textColor: "#f3f7f2",
                      textSize: "2rem",
                      trailColor: "#060606",
                    })}
                  />
                  <div className="text-center">
                    {isLoading && <Skeleton className="mt-2 h-3 w-24" />}
                    {isLoading && <Skeleton className="mt-3 h-3 w-24" />}
                    <p className={` ${isLoading ? "hidden" : "block"}`}>
                      <b>{movie?.vote_count} </b>ratings
                    </p>
                    <p className={` ${isLoading ? "hidden" : "block"}`}>
                      <b>{movie?.popularity} </b>views
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
              <div className="my-4 flex items-center gap-3 pt-1">
                {isLoading && (
                  <Skeleton className="h-12 w-[168.72px] rounded-lg" />
                )}
                <Button
                  className={`px-5 py-6 font-Urbanist text-lg font-semibold ${isLoading ? "hidden" : ""}`}
                  variant="secondary"
                >
                  <NavLink
                    className={"flex items-center gap-2"}
                    to={movie ? movie.homepage : "https://www.youtube.com/"}
                  >
                    Watch trailer <FaPlay />
                  </NavLink>
                </Button>
                {isLoading && (
                  <>
                    {" "}
                    <Skeleton className="h-12 w-12 rounded-full" />{" "}
                    <Skeleton className="h-12 w-12 rounded-full" />
                  </>
                )}

                <Button
                  className={`${isLoading ? "hidden" : ""}`}
                  size="iconMain"
                  variant="ghost"
                >
                  <FaBookmark />
                </Button>
                <Button
                  className={`${isLoading ? "hidden" : ""}`}
                  size="iconMain"
                  variant="ghost"
                >
                  <FaShareAlt />
                </Button>
              </div>
              {isLoading && <Skeleton className="mb-2 h-32 w-4/5" />}
              <p
                className={`my-8 text-slate-200 lg:w-4/5 ${isLoading ? "hidden" : "block"}`}
              >
                {movie
                  ? movie.overview
                    ? movie.overview
                    : "No description"
                  : "No description"}
              </p>
            </article>

            <article>
              {isLoading && <Skeleton className="my-5 h-7 w-28 rounded-full" />}
              <h2
                className={`font-Poppins text-2xl font-semibold tracking-wide ${isLoading ? "hidden" : "block"}`}
              >
                Details
              </h2>
              {isLoading && <Skeleton className="mb-2 h-32 w-2/5" />}
              <Table className={`${isLoading ? "hidden" : ""}`}>
                <TableBody>
                  <TableRow>
                    <TableHead className="text-left">Genres</TableHead>
                    <TableCell className={`flex gap-1 font-medium`}>
                      {!movie ? <p></p> : [...genreGenerator(movie.genres)]}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-left">
                      Country of Origin
                    </TableHead>
                    <TableCell className={`font-medium`}>
                      {movie?.origin_country}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-left">Runtime</TableHead>
                    <TableCell className={`font-medium`}>
                      {movie?.runtime} min
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </article>
          </section>
          <section className="order-3 lg:w-1/5">
            {isLoading && <Skeleton className="mb-5 h-5 w-28 rounded-full" />}
            <h3
              className={`mb-4 font-Poppins text-xl font-bold tracking-wide ${isLoading ? "hidden" : "block"}`}
            >
              Cast & Crew
            </h3>
            <div className="flex gap-4 overflow-scroll lg:flex-col lg:gap-0 lg:overflow-clip">
              {crewCast ? castGenerator(crewCast) : "None"}
            </div>
            {/* <Button>Show all</Button> */}
          </section>
        </div>
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
