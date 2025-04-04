import { useEffect, useState, useRef } from "react"
import { NavLink } from "react-router"
import { redondearF } from "@/API_LOGIC"
import { MovieCreditsResponseT, MovieDetailedT } from "@/TYPES_CREATED"
import { Skeleton } from "@ui/skeleton"
import { Button } from "@ui/button"
import CrewCard from "@components/CrewCard"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { AlertDialogTrigger } from "@/components/ui/alert-dialog"
import ShareContainer from "@/components/ShareContainer"
import { FaShareAlt, FaPlay } from "react-icons/fa"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table"
import { useLocalStorage } from "@/useLocalStorage"

type Props = {
  crewCast: MovieCreditsResponseT | null
  movie: MovieDetailedT | null
  isLoading: boolean
}

type miLista = { id: number; name: string }[]

export function MainMovieDetail({ crewCast, movie, isLoading }: Props) {
  const [isFav, setIsFav] = useState(false)
  const [isImgLoading, setIsImgLoading] = useState<boolean>(true)
  const favButton = useRef<HTMLSpanElement>(null)
  const [myFavourites, setMyFavourites] = useLocalStorage("storagedMovies", {})

  const loadImg = () => {
    setIsImgLoading(false)
  }

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

  const handlerFavourites = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    movieDetails: MovieDetailedT | null,
    pelicula: number | undefined,
  ) => {
    if (!pelicula) return "upsie"
    if (myFavourites[pelicula]) {
      const updatedFavourites = { ...myFavourites }
      delete updatedFavourites[pelicula]
      setMyFavourites(updatedFavourites)
    } else {
      setMyFavourites({ ...myFavourites, [pelicula]: movieDetails })
    }
    const animatedButton = e.currentTarget.firstChild as HTMLSpanElement
    animatedButton.classList.toggle("active")
  }

  useEffect(() => {
    favButton.current?.classList.remove("active")
    setIsFav(false)
    try {
      if (movie && myFavourites[movie.id]) {
        favButton.current?.classList.toggle("active")
        setIsFav(true)
      } else {
        favButton.current?.classList.remove("active")
        setIsFav(false)
      }
    } catch (error) {
      console.warn(error)
    }
  }, [myFavourites, isLoading])

  return (
    <div className="relative grid grid-cols-1 gap-10 px-4 pt-8 md:mx-auto md:w-4/5 md:grid-cols-[3fr_1fr] lg:gap-0 xl:w-full xl:grid-cols-[1fr_2fr_1fr]">
      <section className="hidden flex-col xl:flex">
        <div className="mx-auto w-3/5 overflow-hidden rounded-xl shadow-lg">
          {isLoading && (
            <Skeleton className="h-[383.33px] w-[262.55px] rounded-xl shadow-xl" />
          )}
          <img
            className={`${isLoading || isImgLoading ? "hidden" : "block"}`}
            src={"https://image.tmdb.org/t/p/w342" + movie?.poster_path}
            alt="caratula"
            onLoad={() => loadImg()}
          />
        </div>
        <div className="mx-auto mt-4 flex h-20 w-3/5 items-center gap-2">
          {isLoading && (
            <Skeleton className="mx-5 aspect-square size-16 rounded-full" />
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
      </section>
      <section className="mx-auto w-full">
        <article>
          <div className="flex items-center justify-between">
            <div>
              {isLoading && <Skeleton className="mb-2 h-7 w-56 rounded-full" />}
              <h1
                className={`font-Poppins text-3xl font-bold tracking-wide ${isLoading ? "hidden" : "block"}`}
              >
                {movie?.title}
              </h1>
              {isLoading && <Skeleton className="my-3 h-3 w-24 rounded-full" />}
              <p
                className={`text-sm font-light leading-loose ${isLoading ? "hidden" : "block"}`}
              >
                Original title: {movie?.original_title}
              </p>
              {isLoading && <Skeleton className="my-5 h-5 w-36 rounded-full" />}
              <h4
                className={`font-semibold leading-loose text-slate-200 ${isLoading ? "hidden" : "block"}`}
              >
                Movie ({movie?.release_date})
              </h4>
            </div>
            <div className="min-w-28 self-start lg:hidden">
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
              <div className="mt-2 text-center text-sm lg:m-0 lg:text-base">
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
            {isLoading && <Skeleton className="h-12 w-[168.72px] rounded-lg" />}
            <Button
              className={`px-5 py-6 font-Urbanist text-lg font-semibold ${isLoading ? "hidden" : ""}`}
              variant="secondary"
            >
              <a
                className={"flex items-center gap-2"}
                target="_blank"
                href={movie ? movie.homepage : "https://www.youtube.com/"}
              >
                Watch trailer <FaPlay />
              </a>
            </Button>
            {isLoading && (
              <>
                {" "}
                <Skeleton className="h-12 w-12 rounded-full" />{" "}
                <Skeleton className="h-12 w-12 rounded-full" />
              </>
            )}

            <Button
              className={`relative ${isFav ? "bg-[#fff4f3]" : ""} ${isLoading ? "hidden" : ""} }`}
              size="iconMain"
              variant={"ghost"}
              onClick={(e) => handlerFavourites(e, movie, movie?.id)}
            >
              {/* <FaBookmark /> */}
              <span ref={favButton} className="heart"></span>
            </Button>
            <div className={`${isLoading ? "hidden" : ""}`}>
              <ShareContainer movieId={movie?.id}>
                <AlertDialogTrigger>
                  <FaShareAlt />
                </AlertDialogTrigger>
              </ShareContainer>
            </div>
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
                <TableHead className="text-left">Country of Origin</TableHead>
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
      <section className="mx-auto">
        {isLoading && <Skeleton className="mb-5 h-5 w-28 rounded-full" />}
        <h3
          className={`mb-4 font-Poppins text-xl font-bold tracking-wide ${isLoading ? "hidden" : "block"}`}
        >
          Cast & Crew
        </h3>
        <div className="flex gap-4 overflow-scroll overflow-y-hidden md:flex-col md:overflow-clip lg:gap-0">
          {crewCast ? castGenerator(crewCast) : "None"}
        </div>
        {/* <Button>Show all</Button> */}
      </section>
    </div>
  )
}
