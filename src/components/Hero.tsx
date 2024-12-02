import React from 'react'
import heroImg from '@/imgs/m2teNSCH7sxkuXHossRJXhxPKeT.jpg'
import {Button, buttonVariants} from '@/components/ui/button'
import {Badge, badgeVariants} from '@/components/ui/badge'
import {NavLink} from 'react-router'
import HeroBackground from '@/components/ui/hero-background'
type Props = {}

function Hero({}: Props) {
  return (
    <div className='w-full text-slate-100 font-Urbanist overflow-hidden relative pt-20 pb-4' >
             <div className='top-0 left-0 absolute z-[-1] h-[80svh] overflow-hidden  before:w-full before:absolute before:bottom-0 before:left-0 before:h-3/5 before:from-transparent before:bg-gradient-to-b before:to-primary'>
          <HeroBackground className="" heroImg={heroImg}></HeroBackground>
        </div>
            <div className='mx-10 pt-20 xl:w-1/3 lg:w-3/5'>
                <h2 className='before:w-10/12 font-bold before:h-px before:bg-white before:absolute before:top-3 before:right-0 relative '>Bienvenido</h2>
                <div>
                    <h2 className='py-3 text-5xl font-bold'>Bienvenido a tu biblioteca  de películas</h2>
                    <p>Todas las peliculas que puedes imaginar, y la <br />
                    informacion que necesitas para decidir verla</p>
                </div>
                <Button className='my-10 bg-green-700 text-lg py-6 px-5'>
                    <NavLink to='/similares'>
                        Ver Similares
                    </NavLink>
                </Button>
            </div>
            <div className='h-full mb-12 mr-10 font-semibold -mt-12 lg:text-xl flex flex-col items-end'>
                <h3 className='text-2xl font-bold'>Sonic 3: La película</h3>
                <div className='w-auto ml-auto '>
                <Badge  className={badgeVariants({variant: 'secondary'})} >Imdb 5.5</Badge>   
                </div>
            </div>
    </div>
  )
}

export default Hero