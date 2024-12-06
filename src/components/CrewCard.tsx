import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import { CastMemberT } from '@/API_LOGIC'
type Props = {miembro: CastMemberT}

function CrewCard({miembro}: Props) {
  return (
    <div className='flex gap-3 mb-5'>
        <Avatar>
          <AvatarImage className='aspect-square overflow-hidden' src={"https://image.tmdb.org/t/p/w92"+miembro.profile_path} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
            <h5 className='leading-none font-light text-slate-200' >{miembro.name}</h5>
            <span className='text-xs text-slate-400'>as {miembro.character}</span>
        </div>
    </div>
  )
}

export default CrewCard