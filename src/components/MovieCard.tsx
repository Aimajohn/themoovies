// import movieImg from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import {Badge, badgeVariants} from '@/components/ui/badge'
import { Button, } from './ui/button'
import {NavLink} from 'react-router'
import { useNavigate } from "react-router";
import {redondear} from '@/API_LOGIC'
import {Skeleton} from '@/components/ui/skeleton'

type Props = {
  calificacion: number,
  imagenSrc: string,
  titulo: string,
  idPelicula: number,
  isLoading: boolean,
  setMovieId: React.Dispatch<React.SetStateAction<number>>
}

function MovieCard({calificacion, imagenSrc, titulo, idPelicula, isLoading, setMovieId}: Props) {
  const navigate = useNavigate()
  const changeUrl = ()=>{
    setMovieId(idPelicula)
    navigate("/movie/"+idPelicula)
  }

  
  return (
    <div className='min-w-52 w-52 overflow-hidden'>
      {isLoading && <Skeleton className='w-52 h-72 mb-2'/>}
      <div className={`group relative flex rounded-md h-72 overflow-hidden hover:cursor-pointer ${isLoading? 'hidden': 'block'}`} >
        <Button onClick={changeUrl} asChild className=' w-52 h-full p-0 group-hover:cursor-pointer'>
          
          <div className={`rounded-xl overflow-hidden w-52 `}>
                <img className='group-hover:scale-105 transition-transform duration-300'  src={imagenSrc} alt="movieImg" />
          </div>
        
        </Button>
          <Button className='absolute top-0 right-0 m-2' size='icon' variant='love'>❤️</Button>
          <Badge className={badgeVariants({variant: 'secondary'}) + ' absolute bottom-0 right-0 m-2'} variant='imbd'>IMDB {redondear(calificacion)}</Badge>
    </div>
    {isLoading && <Skeleton className='w-36 h-4 rounded-full'/>}
    <Button className={`text-slate-200 w-11/12 flex text-left justify-start pl-0 ${isLoading? 'hidden': 'block'}`} variant="link">{
      <NavLink className='truncate text-ellipsis' to={"/movie/"+idPelicula}>
        {titulo}
      </NavLink>
    }</Button>
    </div>
  )
}

export default MovieCard