import movieImg from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import {Badge, badgeVariants} from '@/components/ui/badge'
import { Button, buttonVariants,  } from './ui/button'
import {NavLink} from 'react-router'

import {useState} from 'react'
import {redondear} from '@/API_LOGIC'
type Props = {
  calificacion: number,
  imagenSrc: string,
  titulo: string,
  idPelicula: number
}

function MovieCard({calificacion, imagenSrc, titulo, idPelicula}: Props) {
  const [loading, setLoading] = useState(true)
  
  return (
    <div className='min-w-52'>
      <div className='group relative flex rounded-md   h-72 overflow-hidden' >
        <Button asChild className=' w-52 h-full p-0 group-hover:cursor-pointer'>
          <NavLink to={"/movie/"+idPelicula} className='rounded-xl overflow-hidden w-52'>
                <img className='group-hover:scale-105 transition-transform duration-300' src={imagenSrc} alt="movieImg" />
          </NavLink>
        </Button>
          <Button className='absolute top-0 right-0 m-2' size='icon' variant='love'>❤️</Button>
          <Badge className={badgeVariants({variant: 'secondary'}) + ' absolute bottom-0 right-0 m-2'} variant='imbd'>IMDB {redondear(calificacion)}</Badge>
    </div>
    <Button className='text-slate-200 ml-0 pl-0' variant="link">{
      <NavLink to={"/movie/"+idPelicula}>
        {titulo}
      </NavLink>
    }</Button>
    </div>
  )
}

export default MovieCard