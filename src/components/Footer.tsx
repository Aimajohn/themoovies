import Logo from "@/imgs/icon-just-books.png"
import MooviesLogo from "@/imgs/logo.png"

function Footer() {
  return (
    <footer className="absolute bottom-0 flex h-16 w-full justify-between bg-yellow-500 px-8 py-2">
      <div className="flex items-center">
        <div className="mr-8 flex flex-col items-center text-center">
          <img src={Logo} className="w-10" alt="Aimajohn Logo" />
          <span className="text-xs">Aimajohn</span>
        </div>
        <span>Hecho con ❤️ por John</span>
      </div>
      <div className="my-auto">
        <img className="h-10" src={MooviesLogo} alt="Logo The Moovies" />
      </div>
    </footer>
  )
}

export default Footer
