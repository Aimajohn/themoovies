import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CastMemberT } from "@/TYPES_CREATED"
import { Skeleton } from "@/components/ui/skeleton"
type Props = { miembro: CastMemberT; isLoading: boolean }

function CrewCard({ miembro, isLoading }: Props) {
  return (
    <div className="mb-5 flex gap-3">
      <Avatar>
        {isLoading && <Skeleton className="h-10 w-10 rounded-full" />}

        <AvatarImage
          className={`aspect-square overflow-hidden ${isLoading ? "hidden" : "block"}`}
          src={"https://image.tmdb.org/t/p/w92" + miembro.profile_path}
        />
        <AvatarFallback>N/</AvatarFallback>
      </Avatar>
      <div>
        {isLoading && <Skeleton className="mb-2 h-3 w-12" />}
        {isLoading && <Skeleton className="mb-2 h-3 w-24" />}
        <h5
          className={`font-light leading-none text-slate-200 ${isLoading ? "hidden" : "block"}`}
        >
          {miembro.name}
        </h5>
        <span
          className={`text-xs text-slate-400 ${isLoading ? "hidden" : "block"}`}
        >
          as {miembro.character}
        </span>
      </div>
    </div>
  )
}

export default CrewCard
