import { FaPlay } from "react-icons/fa";
import {Button} from '@/components/ui/button'
import { MovieT } from '@/API_LOGIC';
import imgPoster from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import {NavLink} from 'react-router'

type variantT = 'short' | 'large'

type Props = {pelicula: MovieT|null, variant: variantT}

function TrendCard({pelicula, variant}: Props) {
  console.log('pelicula', pelicula)
  return (
    <div className={`shadow-2xl  rounded-xl px-6 text-slate-200  overflow-hidden relative h-80 group
    before:absolute  before:h-full before:w-5/6 before:z-10 before:bg-gradient-to-r before:top-0 before:left-[38%]  before:to-transparent 
    ${variant == 'short'
      ? 'grow-[1.5] bg-emerald-950 before:from-emerald-950' 
      : 'grow-[2.5] bg-violet-950 before:from-violet-950'} 
    `}>
            <div className=' h-full py-8 relative'>
                <h2 className='absolute top-1/3 translate-y-1/2 z-10 text-4xl font-semibold mb-6 text-wrap'>{pelicula?.title}</h2>
                <div className='text-slate-700  absolute bottom-6 left-0'>
                    <Button asChild variant='outline'>
                      <NavLink to={`/movie/${pelicula?.id}`}>
                        <FaPlay/>
                        Ver ahora
                      </NavLink>
                    </Button>
                </div>
              
            </div>
            <div className={`absolute right-0 ${variant == 'short'? 'bottom-20' : 'bottom-56'}  w-3/5 h-full group-hover:scale-105 transition-transform duration-300 shadow-md`}>
              <img src={pelicula? `https://image.tmdb.org/t/p/original/${pelicula.poster_path}` : imgPoster} alt="Pster peli" />
            </div>

          </div>
  )
}

export default TrendCard