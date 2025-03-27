import { FaPlay } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { MovieT } from "@/TYPES_CREATED"
import imgPoster from "@/imgs/default.png"
import { NavLink } from "react-router"
import { whichSize } from "@/API_LOGIC"

type variantT = "short" | "large"

type Props = { pelicula: MovieT | null; variant: variantT }

function TrendCard({ pelicula, variant }: Props) {
  const backImgWidth = whichSize(window.innerWidth)
  const imgURL =
    backImgWidth == 0
      ? "https://image.tmdb.org/t/p/original" + pelicula?.backdrop_path
      : backImgWidth > 768 && backImgWidth < 1024
        ? `https://image.tmdb.org/t/p/w${backImgWidth}/${pelicula?.poster_path}`
        : `https://image.tmdb.org/t/p/w${backImgWidth}/${pelicula?.backdrop_path}`

  return (
    <div
      className={`group relative h-56 overflow-hidden rounded-xl px-6 text-slate-200 shadow-2xl before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:to-transparent lg:h-80 ${
        variant == "short"
          ? "hidden grow-[1.5] bg-emerald-950 before:bg-gradient-to-t before:from-emerald-950 before:from-30% md:block"
          : "grow-[2.5] bg-violet-950 before:from-violet-950 before:from-45% before:md:bg-gradient-to-r md:before:from-30% lg:before:bg-gradient-to-t lg:before:from-35%"
      } `}
    >
      <div className="relative h-full py-8">
        <h2 className="absolute top-1/2 z-10 translate-y-1/2 truncate text-nowrap text-2xl font-semibold md:top-1/3 md:mb-6 md:text-4xl lg:bottom-6">
          {pelicula?.title}
        </h2>
        <div className="absolute bottom-6 left-0 z-20 text-slate-700">
          <Button asChild variant="outline">
            <NavLink to={`/movie/${pelicula?.id}`}>
              <FaPlay />
              Ver ahora
            </NavLink>
          </Button>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 h-2/3 w-full shadow-lg transition-transform duration-300 group-hover:scale-105 ${
          variant == "short"
            ? "bottom-20 top-0 w-full"
            : "-top-4 md:top-0 lg:-top-1/4 lg:h-full lg:w-full"
        }`}
      >
        <img src={pelicula ? imgURL : imgPoster} alt="Pster peli" />
      </div>
    </div>
  )
}

export default TrendCard
