import {useState, useEffect} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroBackground from './components/ui/hero-background'
import {Button, buttonVariants} from '@/components/ui/button'
import {Badge} from '@/components/ui/badge'
import CrewCard from '@/components/CrewCard'
import movieFace from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import heroImg from '@/imgs/m2teNSCH7sxkuXHossRJXhxPKeT.jpg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaShareAlt, FaBookmark, FaPlay } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {useParams} from 'react-router'
import {getHero, MovieDetailedT, MovieT} from '@/API_LOGIC'
import {redondearF} from '@/API_LOGIC'

function MovieDetail() {
  const {id} = useParams<{ id: string }>()
  const [movie, setMovie] = useState<MovieDetailedT|null>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const getDetails = async ()  => {
      try{
          const idPelicula = Number(id)
          if(isNaN(idPelicula)) throw new Error('Parametro no es un numero') 
          const pelicula = await getHero(idPelicula, 780)
          if (!pelicula) return null
          setMovie(pelicula)
          
        }catch(error){
          console.error('ijole pa')
        }finally{
          setLoading(false)
        }
    }
    getDetails()
  }, [])

    const genreGenerator = (miLista: {id: number;name: string;}[] | undefined)=>{ 
      if (!miLista) return []
      const genresList: JSX.Element[] = []
      let keymaster = 0
      for (const pelicula of miLista){
        keymaster++
        genresList.push(<Badge key={keymaster}>{pelicula.name}</Badge>)
      }
      console.log(genresList)
      return genresList
  }
   

  
  return (

    <div className='relative min-h-svh text-slate-100'>
        <Header ></Header>
        <div className='top-0 left-0 absolute z-[-1] h-[40svh] overflow-hidden  before:w-full before:absolute before:bottom-0 before:left-0 before:h-1/2 before:from-transparent before:bg-gradient-to-b before:to-primary'>
          <HeroBackground className="" heroImg={'https://image.tmdb.org/t/p/original/'+ movie?.backdrop_path || heroImg}></HeroBackground>
        </div>
        <div className='pt-64 relative ml-24 mr-8'>
          <div className='flex gap-10 pt-8 '>
            <section
            className='w-1/5'
            >
              <div className=' flex flex-col '>
                <div className='rounded-xl w-4/5 overflow-hidden shadow-lg'>
                  <img src={movieFace} alt="caratula" />
                </div>
                <div className='flex items-center mt-4 h-20 ' >
                    <CircularProgressbar className='w-1/3 h-16 font-bold ' strokeWidth={7.5} maxValue={10} value={redondearF(movie?.vote_average)} text={`${movie?.vote_average}`}  styles={buildStyles({
                        pathColor: `rgb(234, 179, 8)`,
                        textColor: '#f3f7f2',
                        textSize: '2rem',
                        trailColor: '#060606'
                      })} />
                  <div className=' w-2/3 '>
                  <p><b>{movie?.vote_count} </b>ratings</p>
                  <p><b>84 </b>reviews</p>
                  </div>
                </div>
              </div>

            </section>
            <section className='w-3/5'>
              <article>
                <h1 className='text-3xl font-Poppins font-bold tracking-wide'>
                  {movie?.title}
                </h1>
                <p className='text-sm font-light leading-loose'>Original title: {movie?.original_title}</p>
                <h4 className='text-slate-200 leading-loose font-semibold'>Movie ({movie?.release_date})</h4>
                <div className='my-4 flex gap-3 items-center'>
                  <Button className='font-semibold font-Urbanist text-lg px-5 py-6' variant='secondary'>Watch trailer <FaPlay/></Button>
                  <Button size='iconMain' variant='ghost'><FaBookmark/></Button>
                  <Button size='iconMain' variant='ghost'><FaShareAlt/></Button>
                </div>
                <p className='w-4/5 text-slate-200 my-8'>
                 {movie?.overview}
                </p>

              </article>


              <article>
                <h2 className='text-2xl font-Poppins font-semibold tracking-wide'>Details</h2>
                <Table>
                <TableBody>
                  <TableRow>
                    <TableHead className="text-left">Genres</TableHead>
                    <TableCell className="font-medium flex gap-1">
                      {...genreGenerator(movie?.genres)}
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-left">Country of Origin</TableHead>
                    <TableCell className="font-medium">{movie?.origin_country}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-left">Runtime</TableHead>
                    <TableCell className="font-medium">{movie?.runtime} min</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              </article>

            </section>
            <section className='w-1/5'>
              <h3 className='font-bold text-xl tracking-wide font-Poppins mb-4'>Cast & Crew</h3>
              <div>
                <CrewCard></CrewCard>
                <CrewCard></CrewCard>
                <CrewCard></CrewCard>
                <CrewCard></CrewCard>
              </div>
              <Button>Show all</Button>
            </section>
          </div>
        </div>
        <Footer></Footer>

    </div>
  )
}

export default MovieDetail