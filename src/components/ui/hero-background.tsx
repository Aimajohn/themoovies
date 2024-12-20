// import secoImg from '@/imgs/m2teNSCH7sxkuXHossRJXhxPKeT.jpg'

type Props = { heroImg: string; ClassName: string }
import { useState, useEffect } from "react"
import { Skeleton } from "./skeleton"

function HeroBackground({ heroImg, ClassName }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    console.log("not sure")
  }, [isLoading])

  return (
    <>
      {isLoading && <Skeleton className="h-full w-full" />}
      <div
        className={`${ClassName} ${
          isLoading ? "hidden" : "block"
        } lg:after:to-darkblue2 w-full bg-gray-500 after:absolute after:left-0 after:top-0 after:h-20 after:w-full lg:-mt-20 lg:after:bg-opacity-50 lg:after:bg-gradient-to-t lg:after:from-transparent`}
      >
        <img
          src={heroImg}
          onLoad={() => setIsLoading(false)}
          alt="heroPoster"
        />
      </div>
    </>
  )
}

export default HeroBackground
