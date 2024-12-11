// import movieImg from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import { Badge, badgeVariants } from "@/components/ui/badge"
import { Button } from "./ui/button"
import { NavLink } from "react-router"
import { useNavigate } from "react-router"
import { redondear } from "@/API_LOGIC"
import { Skeleton } from "@/components/ui/skeleton"

type Props = {
  calificacion: number
  imagenSrc: string
  titulo: string
  idPelicula: number
  isLoading: boolean
  setMovieId: React.Dispatch<React.SetStateAction<number>>
}

function MovieCard({
  calificacion,
  imagenSrc,
  titulo,
  idPelicula,
  isLoading,
  setMovieId,
}: Props) {
  const navigate = useNavigate()
  const changeUrl = () => {
    window.scroll(0, 0)
    setMovieId(idPelicula)
    navigate("/movie/" + idPelicula)
  }

  return (
    <div className="w-52 min-w-52 overflow-hidden">
      {isLoading && <Skeleton className="mb-2 h-72 w-52" />}
      <div
        className={`group relative flex h-72 overflow-hidden rounded-md hover:cursor-pointer ${isLoading ? "hidden" : "block"}`}
      >
        <Button
          onClick={changeUrl}
          asChild
          className="h-full w-52 p-0 group-hover:cursor-pointer"
        >
          <div className={`w-52 overflow-hidden rounded-xl`}>
            <img
              className="transition-transform duration-300 group-hover:scale-105"
              src={imagenSrc}
              alt="movieImg"
            />
          </div>
        </Button>
        <Button
          className="absolute right-0 top-0 m-2"
          size="icon"
          variant="love"
        >
          ❤️
        </Button>
        <Badge
          className={
            badgeVariants({ variant: "secondary" }) +
            " absolute bottom-0 right-0 m-2"
          }
          variant="imbd"
        >
          IMDB {redondear(calificacion)}
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
            {titulo}
          </NavLink>
        }
      </Button>
    </div>
  )
}

export default MovieCard
