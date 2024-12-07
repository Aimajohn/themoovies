// import secoImg from '@/imgs/m2teNSCH7sxkuXHossRJXhxPKeT.jpg'

type Props = {heroImg:string, ClassName: string}

function HeroBackground({heroImg, ClassName}: Props) {
  return (
         <div className={ClassName+' w-full  lg:-mt-20 after:w-full after:absolute after:h-20 lg:after:bg-gradient-to-t lg:after:from-transparent lg:after:to-darkblue2 lg:after:bg-opacity-50 after:top-0 after:left-0 bg-gray-500 '}>
            <img src={heroImg} alt="heroPoster" />
        </div>
  )
}

export default HeroBackground