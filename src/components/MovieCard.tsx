import { Badge, badgeVariants } from "@/components/ui/badge"
import { Button } from "@ui/button"
import { NavLink } from "react-router"
import { useNavigate } from "react-router"
import { redondear } from "@/API_LOGIC"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"
import { MovieT } from "@/TYPES_CREATED"

type Props = {
  idPelicula: number
  isLoading: boolean
  setMovieId: React.Dispatch<React.SetStateAction<number>>
  movieInfo: MovieT
}

function MovieCard({ idPelicula, isLoading, movieInfo, setMovieId }: Props) {
  const navigate = useNavigate()
  const changeUrl = () => {
    window.scroll(0, 0)
    setMovieId(idPelicula)
    navigate("/movie/" + idPelicula)
  }
  const [isImageLoading, setIsImageLoading] = useState(true)

  const loadImg = () => {
    setIsImageLoading(false)
  }

  return (
    <div className="aspect-[3/5] h-auto w-full overflow-hidden">
      {isImageLoading && <Skeleton className="h-full w-full" />}
      <div
        className={`group relative flex overflow-hidden rounded-md hover:cursor-pointer ${isImageLoading ? "hidden" : "block"}`}
      >
        <Button
          onClick={changeUrl}
          asChild
          className="h-full w-52 p-0 group-hover:cursor-pointer"
        >
          <span className={`w-52 overflow-hidden rounded-xl`}>
            <img
              className={`transition-transform duration-300 group-hover:scale-105`}
              src={"https://image.tmdb.org/t/p/w342/" + movieInfo.poster_path}
              alt="movieImg"
              onLoad={() => loadImg()}
            />
          </span>
        </Button>

        <Badge
          className={
            badgeVariants({ variant: "secondary" }) +
            " absolute bottom-1 right-4"
          }
          variant="imbd"
        >
          IMDB {redondear(movieInfo.vote_average)}
        </Badge>
      </div>
      {isLoading && <Skeleton className="h-4 w-36 rounded-full" />}
      <Button
        className={`flex w-11/12 justify-start pl-0 text-left text-slate-200 ${isLoading ? "hidden" : "block"}`}
        variant="link"
      >
        {
          <NavLink
            className="truncate text-ellipsis"
            to={"/movie/" + idPelicula}
          >
            {movieInfo.title}
          </NavLink>
        }
      </Button>
    </div>
  )
}

export default MovieCard
