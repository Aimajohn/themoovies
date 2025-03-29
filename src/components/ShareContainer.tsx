import { useEffect, useState } from "react"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { BiSolidCopy } from "react-icons/bi"
import { useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { FaCheck, FaFacebook } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
type Props = {
  children: JSX.Element
  movieId: number | undefined
}

function ShareContainer({ children, movieId }: Props) {
  const location = useLocation()
  const [myUrl, setMyUrl] = useState("")
  const [isCopying, setIsCopying] = useState(false)

  useEffect(() => {
    setMyUrl("https://aimajohn.github.io/themoovies/#" + location.pathname)
  }, [location])

  const copyAnimation = () => {
    setIsCopying(true)
    setTimeout(() => {
      setIsCopying(false)
    }, 1200)
  }

  return (
    <div className="shareContainer items-centers relative flex aspect-square h-full w-full cursor-pointer rounded-full bg-slate-800 text-zinc-400 hover:bg-slate-200 hover:text-zinc-800">
      <AlertDialog>
        {children}
        <AlertDialogContent>
          <AlertDialogCancel className="absolute -right-1 top-1 border-none bg-transparent text-xl text-slate-300 hover:bg-transparent hover:text-slate-100 focus:border-none">
            <IoClose />
          </AlertDialogCancel>
          <AlertDialogHeader>
            <AlertDialogTitle>Compartir Enlace</AlertDialogTitle>
            <AlertDialogDescription>
              Copiar Link o Compartir en Facebook.
              <span className="mx-auto my-4 flex w-full items-center justify-between gap-4 rounded-md bg-slate-700/40 p-4 text-neutral-200">
                {myUrl}
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(myUrl)
                    copyAnimation()
                  }}
                  size="icon"
                  title="Copiar al portapapeles"
                  className="rounded-md bg-yellow-500 p-2 text-lg text-slate-900 hover:bg-yellow-600"
                >
                  {!isCopying && <BiSolidCopy />}
                  {isCopying && <FaCheck />}
                </Button>
              </span>
              <div
                title="Publicar en Facebook"
                className="fb-share-button ml-2 aspect-square h-auto w-min rounded-full border-2 border-white bg-white text-4xl text-blue-700 hover:text-blue-800"
                data-href="https://www.facebook.com/sharer/sharer.php?u=https://aimajohn.github.io/themoovies/#/movie/1125899"
                data-layout="button_count"
                data-size=""
              >
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${movieId ? "https://aimajohn.github.io/themoovies/?movie=" + movieId : "https://aimajohn.github.io/themoovies/"}`}
                  className="fb-xfbml-parse-ignore"
                >
                  <FaFacebook />
                </a>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default ShareContainer
