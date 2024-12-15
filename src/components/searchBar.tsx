import { Input } from "@ui/input"
import { FaMagnifyingGlass } from "react-icons/fa6"

type Props = {}

export function SearchBar({}: Props) {
  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="relative flex items-center">
          <FaMagnifyingGlass
            size={16}
            className="absolute left-2 text-slate-200 text-opacity-60"
          />
          <Input placeholder="Search..."></Input>
        </div>
      </form>
    </div>
  )
}
