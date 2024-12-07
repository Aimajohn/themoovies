import Logo from '@/imgs/logo2.png'
import {NavLink} from 'react-router'
import {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
  }
   from "@/components/ui/navigation-menu";
import { MovieDetailedT } from '@/API_LOGIC';

type Props = {
    movieData : MovieDetailedT | null
}

function Header({movieData}: Props) {
    const myUrl = window.location.href
  return (
    <header className='w-full absolute top-0 right-0 flex justify-between px-4 py-4 from-primary bg-gradient-to-b to-to-[#000000]'>
       <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavLink to='/' id="pageLogo" className="w-56 lg:w-40 lg:!block lg:ml-3">
                        <img  className="object-fit" src={Logo} alt="The Moovies Logo"/>
                    </NavLink>
                </NavigationMenuItem>

            </NavigationMenuList>

       </NavigationMenu>
        <NavigationMenu className="w-full flex justify-between ">
            
            <NavigationMenuList>
                {(!myUrl.includes('tendencias') && !myUrl.includes('movie')) && <>
                <NavigationMenuItem>
                        <NavigationMenuLink href='/tendencias'  className={navigationMenuTriggerStyle()}>
                            Tendencias
                        </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                        <NavigationMenuLink href={movieData?`/movie/${movieData.id}`:'/'} className={navigationMenuTriggerStyle()}>
                            Peliculas Similares
                        </NavigationMenuLink>
                </NavigationMenuItem>
                </>
                }
                <NavigationMenuItem>
                        <NavigationMenuLink href='https://github.com/Aimajohn' target='_blank' className={navigationMenuTriggerStyle()} >
                                Github
                        </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    </header>
  )
}

export default Header