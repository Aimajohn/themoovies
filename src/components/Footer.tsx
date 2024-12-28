import Logo from "@/imgs/icon-themoovies.png"
import MooviesLogo from "@/imgs/logo.png"

function Footer() {
  return (
    <footer className="absolute bottom-0 flex h-20 w-full flex-col justify-center bg-yellow-500 px-8 py-2 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between gap-4">
        <div className="mr-auto flex flex-col items-center lg:mr-8">
          <img src={Logo} className="w-10" alt="Aimajohn Logo" />
          <span className="text-xs">Aimajohn</span>
        </div>
        <span>Hecho con ❤️ por John</span>
      </div>
      <div className="my-auto hidden lg:block">
        <img className="h-10" src={MooviesLogo} alt="Logo The Moovies" />
      </div>
    </footer>
  )
}

export default Footer
