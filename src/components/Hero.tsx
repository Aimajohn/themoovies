import { Button } from "@/components/ui/button"
import { Badge, badgeVariants } from "@/components/ui/badge"
import { NavLink } from "react-router"
import HeroBackground from "@/components/ui/hero-background"
import { MovieDetailedT } from "@/TYPES_CREATED"
import { redondear, getHeroImgURL } from "@/API_LOGIC"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "./ui/skeleton"
import heroImgDefault from "@/imgs/default.png"

type Props = {
  movieData: MovieDetailedT | null
  isLoading: boolean
}

function Hero({ movieData, isLoading }: Props) {
  const imagenSrc = movieData ? getHeroImgURL(movieData) : heroImgDefault

  const titulo = movieData?.title || "Titulo"
  const calificacion = movieData?.vote_average ?? 0

  return (
    <div className="relative w-full overflow-hidden pb-4 pt-20 font-Montserrat text-slate-100">
      {isLoading && (
        <Skeleton className="mask-fade-bottom absolute left-0 top-0 z-[-1] h-[52svh] w-full overflow-hidden before:absolute" />
      )}
      <div
        className={`mask-fade-bottom absolute left-0 top-0 z-[-1] h-[52svh] w-full overflow-hidden ${isLoading ? "hidden" : "block"}`}
      >
        <HeroBackground ClassName="" heroImg={imagenSrc}></HeroBackground>
      </div>
      <div className="mx-10 pt-80 lg:w-3/5 lg:pt-12 xl:w-2/5">
        <div className="hidden lg:block">
          <div className="flex items-center gap-4">
            <h2>Bienvenido</h2>
            <Separator />
          </div>
          <div>
            <h2 className="py-3 text-5xl font-bold">
              Bienvenido a tu biblioteca <br /> de películas
            </h2>
            <p>
              Todas las peliculas que puedes imaginar, y la <br />
              informacion que necesitas para decidir verla
            </p>
          </div>
          <Button className="my-10 bg-green-700 px-5 py-6 text-lg">
            <NavLink to={"/movie/" + movieData?.id}>Ver Ahora</NavLink>
          </Button>
        </div>
      </div>
      <div className="-mt-12 mr-10 flex h-full flex-col items-end font-semibold lg:mb-12 lg:text-xl">
        <h3 className="max-w-[50%] text-right text-2xl font-bold">{titulo}</h3>
        <div className="ml-auto w-auto">
          <Badge className={badgeVariants({ variant: "secondary" })}>
            IMBD {redondear(calificacion)}
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Hero
