import React from 'react'
import Logo from '../imgs/logo.png'

type Props = {}

function Header({}: Props) {
  return (
    <header className="absolute lg:relative z-10 h-28 flex flex-row p-2 justify-center items-center w-full font-poppins text-xl font-semibold text-gray-100 lg:justify-between lg:text-sm lg:font-light lg:h-16  
    ">
        <button id="backButton" type="button" className="p-5 material-symbols-rounded text-gray-100 absolute z-20 left-4 lg:hidden">
            arrow_back_ios_new
        </button>
        <a href="#home" id="pageLogo" className="w-56 lg:w-40 lg:!block lg:ml-3">
            <img  className="object-fit" src={Logo} alt="The Moovies Logo"/>
        </a>
        <div className="hidden lg:flex lg:justify-end w-1/2 ">
            <a href="#trends" className="px-2 mx-2 hover:underline">
                Tendencias
            </a>
            <a href="#trends" className="px-2 mx-2 hover:underline">
                Peliculas similares
            </a>

        </div>

        <div id="searchPageTitle" className="flex items-center flex-col ">
            <h2 >Results</h2>
            <span className="text-sm text-gray-400 font-montserrat" id="searchInputText">for "Avengers"</span>
        </div>

        <button id="tuneButton" type="button" className="hidden p-5 material-symbols-rounded text-gray-100 right-4 absolute z-20">
        tune
        </button>
    </header>
  )
}

export default Header