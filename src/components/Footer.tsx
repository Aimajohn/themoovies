import React from 'react'
import Logo from '@/imgs/icon-just-books.png'
import MooviesLogo from '@/imgs/logo.png'

type Props = {}

function Footer({}: Props) {
  return (
        <footer className='bg-yellow-500 flex justify-between py-2 px-8'>
            <div className='flex items-center'>
                <div className='text-center flex items-center flex-col mr-8'>
                    <img src={Logo} className='w-10' alt="Aimajohn Logo" />
                    <span className='text-xs'>Aimajohn</span>
                </div>
                <span>
                    Hecho con ❤️ por John
                </span>
            </div>
            <div className='my-auto'>
                <img className='h-10' src={MooviesLogo} alt="Logo The Moovies" />
            </div>
        </footer>
  )
}

export default Footer