import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
type Props = {}

function CrewCard({}: Props) {
  return (
    <div className='flex gap-3 mb-5'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
            <h5 className='leading-none font-light text-slate-200' >Selena Gomez</h5>
            <span className='text-xs text-slate-400'>as Tokio</span>
        </div>
    </div>
  )
}

export default CrewCard