type Props = { heroImg: string; ClassName: string }
import { useState, useEffect } from "react"
import { Skeleton } from "./skeleton"

function HeroBackground({ heroImg, ClassName }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    const myImage = new Image()
    myImage.src = heroImg
    myImage.onload = () => setIsLoading(false)

    myImage.onload = null
  }, [])

  return (
    <>
      {isLoading && <Skeleton className="h-[52svh] w-full" />}
      <div
        className={`${ClassName} ${
          isLoading ? "hidden" : "block"
        } lg:after:to-darkblue2 w-full bg-gray-500 after:absolute after:left-0 after:top-0 after:h-20 after:w-full lg:-mt-20 lg:after:bg-opacity-50 lg:after:bg-gradient-to-t lg:after:from-transparent`}
      >
        <img
          className="w-full"
          src={heroImg}
          onLoad={() => setIsLoading(false)}
          alt="heroPoster"
        />
      </div>
    </>
  )
}

export default HeroBackground
