import Logo from '@/imgs/logo2.png'
import {NavLink} from 'react-router'
import {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
  }
   from "@/components/ui/navigation-menu";
import {Link} from 'react-router'
import {Input} from '@/components/ui/input'
type Props = {}

function Header({}: Props) {
  return (
    <header className='w-full absolute top-0 right-0 flex justify-between px-4 py-4 from-[#04021a] bg-gradient-to-b to-to-[#000000]'>
       <NavigationMenu>
            <NavigationMenuList>
               
                <NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavLink to='/' id="pageLogo" className="w-56 lg:w-40 lg:!block lg:ml-3">
                            <img  className="object-fit" src={Logo} alt="The Moovies Logo"/>
                        </NavLink>
                    </NavigationMenuItem>
                </NavigationMenuItem>

            </NavigationMenuList>

       </NavigationMenu>
        <NavigationMenu className="w-full flex justify-between ">
            
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavLink to='/trending'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Tendencias
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink to='/simialars'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Peliculas Similares
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to='https://github.com/Aimajohn'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Github
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    </header>
  )
}

export default Header