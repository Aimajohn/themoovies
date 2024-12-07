import heroImg from '@/imgs/m2teNSCH7sxkuXHossRJXhxPKeT.jpg'
import {Button} from '@/components/ui/button'
import {Badge, badgeVariants} from '@/components/ui/badge'
import {NavLink} from 'react-router'
import HeroBackground from '@/components/ui/hero-background'
import { MovieDetailedT } from '@/API_LOGIC'
import {redondear} from '@/API_LOGIC'
import {Separator} from '@/components/ui/separator'

type Props = {
    movieData: MovieDetailedT | null
}

function Hero({movieData }: Props) {
    const imagenSrc = 'https://image.tmdb.org/t/p/original/'+ movieData?.backdrop_path || heroImg;
    const titulo = movieData?.title || "Titulo";
    const calificacion = movieData?.vote_average ?? 0;

  return (
    <div className='w-full text-slate-100 font-Montserrat overflow-hidden relative pt-20 pb-4' >
        <div className='top-0 left-0 absolute z-[-1] h-[52svh] overflow-hidden   before:w-full before:absolute before:bottom-0 before:left-0 before:h-1/2  before:from-transparent before:bg-gradient-to-b before:to-primary'>
          <HeroBackground heroImg={imagenSrc}></HeroBackground>
        </div>
            <div className='mx-10 pt-12 xl:w-2/5 lg:w-3/5'>
            <div className='flex items-center gap-4'>
                <h2 >Bienvenido</h2>
                <Separator />
            </div>
                <div>
                    <h2 className='py-3 text-5xl font-bold'>Bienvenido a tu biblioteca <br/> de películas</h2>
                    <p>Todas las peliculas que puedes imaginar, y la <br />
                    informacion que necesitas para decidir verla</p>
                </div>
                <Button className='my-10 bg-green-700 text-lg py-6 px-5'>
                    <NavLink to={"/movie/"+movieData?.id}>
                        Ver Ahora
                    </NavLink>
                </Button>
            </div>
            <div className='h-full mb-12 mr-10 font-semibold -mt-12 lg:text-xl flex flex-col items-end'>
                <h3 className='text-2xl font-bold'>{titulo}</h3>
                <div className='w-auto ml-auto '>
                <Badge  className={badgeVariants({variant: 'secondary'})} >IMBD {redondear(calificacion)}</Badge>   
                </div>
            </div>
    </div>
  )
}

export default Hero