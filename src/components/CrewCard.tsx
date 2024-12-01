import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
type Props = {}

function CrewCard({}: Props) {
  return (
    <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
            <h4>Selena Gomez</h4>
            <span>as Tokio</span>
        </div>
    </div>
  )
}

export default CrewCard