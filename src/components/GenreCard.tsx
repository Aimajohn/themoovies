import React from "react"
import { Button } from "./ui/button"
import { NavLink } from "react-router"
import { TbHeartFilled, TbGhost2Filled } from "react-icons/tb"
import { FaMasksTheater, FaDumpsterFire } from "react-icons/fa6"
import { PiMoonStarsFill, PiSwordFill } from "react-icons/pi"
import { RiSwordFill } from "react-icons/ri"
import { ImPacman } from "react-icons/im"
import { genreIdT } from "@/API_LOGIC"

type Props = {
  setGenreId: React.Dispatch<React.SetStateAction<genreIdT>>
}

const genres = [
  {
    id: 28,
    name: "Acción",
    icon: <RiSwordFill />,
  },

  {
    id: 35,
    name: "Comedia",
    icon: <FaMasksTheater />,
  },
  {
    id: 80,
    name: "Crimen",
    icon: <FaDumpsterFire />,
  },
  {
    id: 14,
    name: "Fantasía",
    icon: <PiMoonStarsFill />,
  },
  {
    id: 27,
    name: "Terror",
    icon: <TbGhost2Filled />,
  },
  {
    id: 10749,
    name: "Romance",
    icon: <TbHeartFilled />,
  },
  {
    id: 12,
    name: "Aventura",
    icon: <PiSwordFill />,
  },
  {
    id: 16,
    name: "Animación",
    icon: <ImPacman />,
  },
]

const GenreCard = ({ setGenreId }: Props) => {
  const genreButton = (genre: {
    id: number
    name: string
    icon: JSX.Element
  }) => {
    window.scroll(0, 0)
    setGenreId(genre.id as unknown as genreIdT)
  }
  const genresGenerator = () => {
    const genresList: JSX.Element[] = []
    genres.forEach((genre) => {
      genresList.push(
        <Button
          asChild
          key={genre.id}
          variant="genre"
          onClick={() => genreButton(genre)}
          size="genre"
        >
          <NavLink to={`/tendencias/genero/${genre.id}`}>
            {genre.icon}
            {genre.name}
          </NavLink>
        </Button>,
      )
    })
    return genresList
  }

  return (
    <div className="flex gap-2 overflow-hidden">{...genresGenerator()}</div>
  )
}

export default GenreCard
