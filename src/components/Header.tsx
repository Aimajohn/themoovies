import Logo from "@/imgs/logo2.png"
import { NavLink } from "react-router"
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { MovieDetailedT } from "@/TYPES_CREATED"
import { SearchBar } from "@components/searchBar"

type Props = {
  movieData: MovieDetailedT | null
}

function Header({ movieData }: Props) {
  const myUrl = window.location.href
  return (
    <header className="to-to-[#000000] absolute right-0 top-0 flex w-full justify-between bg-gradient-to-b from-primary px-4 py-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink
              to="/"
              id="pageLogo"
              className="w-56 lg:ml-3 lg:!block lg:w-40"
            >
              <img className="object-fit" src={Logo} alt="The Moovies Logo" />
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="flex w-full justify-between">
        <SearchBar />
        <NavigationMenuList>
          {!myUrl.includes("tendencias") && !myUrl.includes("movie") && (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/tendencias"
                  className={navigationMenuTriggerStyle()}
                >
                  Tendencias
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={movieData ? `/movie/${movieData.id}` : "/"}
                  className={navigationMenuTriggerStyle()}
                >
                  Peliculas Similares
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          )}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="https://github.com/Aimajohn"
              target="_blank"
              className={navigationMenuTriggerStyle()}
            >
              Github
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Header
