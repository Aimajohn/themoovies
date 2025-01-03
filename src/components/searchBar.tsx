import { Input } from "@ui/input"
import { FaMagnifyingGlass } from "react-icons/fa6"
// import { searchShows } from "@/API_LOGIC"
import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import { useMyContext } from "@/MyContext"

export function SearchBar() {
  const { setSearchValue } = useMyContext()
  const navigate = useNavigate()
  const [searchTyped, setSearchTyped] = useState("")
  const searchedValue = useRef<HTMLInputElement>(null)

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTyped(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTyped.trim() !== "") {
      setSearchValue(searchTyped)
      navigate("/search=/" + searchTyped)
    }
  }

  return (
    <div className="lg:mx-6">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="relative flex items-center">
          <FaMagnifyingGlass
            size={16}
            className="absolute left-2 text-slate-200 text-opacity-60"
          />
          <Input
            placeholder="Search..."
            ref={searchedValue}
            onChange={(e) => inputHandler(e)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </div>
      </form>
    </div>
  )
}
