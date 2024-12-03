import movieImg from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import {Badge, badgeVariants} from '@/components/ui/badge'
import { Button, buttonVariants } from './ui/button'

import {useState} from 'react'
type Props = {}

function MovieCard({}: Props) {
  const [loading, setLoading] = useState(true)
  
  return (
    <div className='relative flex rounded-md w-52 h-72 overflow-hidden'>
        <div className='absolute z-[-1] rounded-xl overflow-hidden w-52 '>
            <img src={movieImg} alt="movieImg" />
        </div>
        <div className='mt-auto flex flex-col justify-between h-full p-4  ml-auto '>
            <Button className='ml-auto' size='icon' variant='love'>❤️</Button>
            <Badge className={badgeVariants({variant: 'secondary'})} variant='imbd'>IMDB 4.5</Badge>
        </div>
    </div>
  )
}

export default MovieCard