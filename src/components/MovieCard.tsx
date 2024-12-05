import movieImg from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import {Badge, badgeVariants} from '@/components/ui/badge'
import { Button, buttonVariants,  } from './ui/button'

import {useState} from 'react'
import {redondear} from '@/API_LOGIC'
type Props = {
  calificacion: number,
  imagenSrc: string,
  titulo: string
}

function MovieCard({calificacion, imagenSrc, titulo}: Props) {
  const [loading, setLoading] = useState(true)
  
  return (
    <div className='min-w-52'>
    <div className='relative flex rounded-md  h-72 overflow-hidden'>
        <div className='absolute z-[-1] rounded-xl overflow-hidden w-52 '>
            <img src={imagenSrc} alt="movieImg" />
        </div>
        <div className='mt-auto flex flex-col justify-between h-full p-4  ml-auto '>
            <Button className='ml-auto' size='icon' variant='love'>❤️</Button>
            <Badge className={badgeVariants({variant: 'secondary'})} variant='imbd'>IMDB {redondear(calificacion)}</Badge>
        </div>
    </div>
    <Button className='text-slate-200 ml-0 pl-0' variant="link">{titulo}</Button>
    </div>
  )
}

export default MovieCard