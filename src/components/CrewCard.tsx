import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import { CastMemberT } from '@/API_LOGIC'
import {Skeleton} from '@/components/ui/skeleton'
type Props = {miembro: CastMemberT, isLoading: boolean}

function CrewCard({miembro, isLoading}: Props) {
  return (
    <div className='flex gap-3 mb-5'>
        <Avatar>
        {isLoading && <Skeleton className='w-10 h-10 rounded-full'/>}
          
          <AvatarImage className={`aspect-square overflow-hidden ${isLoading? 'hidden': 'block'}`} src={"https://image.tmdb.org/t/p/w92"+miembro.profile_path} />
          <AvatarFallback>N/</AvatarFallback>
        </Avatar>
        <div>
            {isLoading && <Skeleton className='w-12 h-3 mb-2'/>}
            {isLoading && <Skeleton className='w-24 h-3 mb-2'/>}
            <h5 className={`leading-none font-light text-slate-200 ${isLoading? 'hidden': 'block'}`} >{miembro.name}</h5>
            <span className={`text-xs text-slate-400 ${isLoading? 'hidden': 'block'}`}>as {miembro.character}</span>
        </div>
    </div>
  )
}

export default CrewCard