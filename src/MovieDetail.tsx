import {useState, useEffect} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroBackground from './components/ui/hero-background'
import {Button} from '@/components/ui/button'
import {Badge} from '@/components/ui/badge'
import CrewCard from '@/components/CrewCard'
import {useLocation} from 'react-router'
// import movieFace from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import heroImg from '@/imgs/m2teNSCH7sxkuXHossRJXhxPKeT.jpg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaShareAlt, FaBookmark, FaPlay } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table"
import {NavLink, useParams} from 'react-router'
import {getCredits, getHero, getMovie, MovieCreditsResponseT, MovieDetailedT, MovieT} from '@/API_LOGIC'
import {redondearF} from '@/API_LOGIC'
import SectionContainer from './components/SectionContainer'
import {Skeleton} from '@/components/ui/skeleton'


function useOnUrlChange(callback:() => void) {
  const location = useLocation();

  useEffect(() => {
    // Ejecuta la función de callback al cambiar la URL
    callback();
  }, [location]);
}

function MovieDetail() {
  const {id} = useParams<{ id: string }>()
  const [movieId, setMovieId] = useState<number>(Number(id))
  const [movie, setMovie] = useState<MovieDetailedT|null>(null)
  const [recommended, setRecommended] = useState<MovieT[]|null>(null)
  const [crewCast, setCrewCast] = useState<MovieCreditsResponseT|null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useOnUrlChange(() =>{
    setMovieId(Number(id))
  })

  useEffect(() => {
    setIsLoading(true)

    const getDetails = async ()  => {
      try{
          const idPelicula = Number(movieId)
          if(isNaN(idPelicula)) throw new Error('Parametro no es un numero') 
            
          const [pelicula, lista, actores] = await Promise.all([
            getHero(idPelicula, 780), 
            getMovie('recommendations', Number(id), "0"),
            getCredits(Number(id))
          ]) 

          if (!pelicula) throw new Error('No se pudo obtener lista')         
          if(!lista) throw new Error('No se pudo obtener lista')
          if(!actores) throw new Error('No se pudo obtener actores')

          setMovie(pelicula)
          setRecommended(lista)
          setCrewCast(actores)
        }catch(error){
          console.error('ijole pa')
        }finally{
          setIsLoading(false)
        }
    }
    getDetails()
  }, [movieId])

    const genreGenerator = (miLista: {id: number;name: string;}[] | undefined)=>{ 
      if (!miLista) return []
      const genresList: JSX.Element[] = []
      let keymaster = 0
      for (const pelicula of miLista){
        keymaster++
        genresList.push(<Badge key={keymaster}>{pelicula.name}</Badge>)
      }
      return genresList
    }

    const castGenerator = (movieCast: MovieCreditsResponseT) =>{
      const returnValue:JSX.Element[]  = []
      movieCast.cast.slice(0,5).forEach(member =>{
        returnValue.push(
          <CrewCard key={member.cast_id} isLoading={isLoading} miembro={member}></CrewCard>
        )
      })
      return returnValue
    }
   

  
  return (

    <div className='relative min-h-svh text-slate-100 pb-20'>
        <Header movieData={null}></Header>
        <div className='top-0 left-0 absolute z-[-1] w-full h-[40svh] overflow-hidden  before:w-full before:absolute before:bottom-0 before:left-0 before:h-1/2 before:from-transparent before:bg-gradient-to-b before:to-primary'>
        
        {isLoading && <Skeleton className='w-full h-full '/>}
        
          <HeroBackground ClassName={`${isLoading? 'hidden': ''}`} heroImg={'https://image.tmdb.org/t/p/original/'+ movie?.backdrop_path || heroImg}></HeroBackground>
        </div>
        <div className='pt-64 relative ml-24 mr-8'>
          <div className='flex gap-10 pt-8 '>
            <section
            className='w-1/5'
            >
              <div className=' flex flex-col '>
                {isLoading && <Skeleton className='w-[262.55px] h-[383.33px] rounded-xl shadow-xl ' />}

                <div className={`rounded-xl w-4/5 overflow-hidden shadow-lg ${isLoading? 'hidden': 'block'}`}>
                  <img src={"https://image.tmdb.org/t/p/w342"+movie?.poster_path} alt="caratula" />
                </div>
                <div className='flex items-center mt-4 h-20 ' >
                  
                {isLoading && <Skeleton className='w-16 h-16 mt-4 ml-5 mr-5 rounded-full'/>}
                
                    <CircularProgressbar className={`w-1/3 h-16 font-bold ${isLoading? 'hidden': 'block'}`} strokeWidth={7.5} maxValue={10} value={redondearF(movie?.vote_average)} text={`${redondearF(movie?.vote_average)}`}  styles={buildStyles({
                        pathColor: `rgb(234, 179, 8)`,
                        textColor: '#f3f7f2',
                        textSize: '2rem',
                        trailColor: '#060606'
                      })} />
                  <div className=' w-2/3 '>
                  {isLoading && <Skeleton className='w-24 h-3 mt-2'/>}
                  {isLoading && <Skeleton className='w-24 h-3 mt-3'/>}
                  <p className={` ${isLoading? 'hidden': 'block'}`}><b>{movie?.vote_count} </b>ratings</p>
                  <p className={` ${isLoading? 'hidden': 'block'}`}><b>{movie?.popularity} </b>views</p>
                  </div>
                </div>
              </div>

            </section>
            <section className='w-3/5'>
              <article>
              {isLoading && <Skeleton className='w-56 h-7 mb-2 rounded-full'/>}
                <h1 className={`text-3xl font-Poppins font-bold tracking-wide ${isLoading? 'hidden': 'block'}`}>
                  {movie?.title}
                </h1>
              {isLoading && <Skeleton className='w-24 h-3 my-3 rounded-full'/>}
                <p className={`text-sm font-light leading-loose ${isLoading? 'hidden': 'block'}`}>Original title: {movie?.original_title}</p>
              {isLoading && <Skeleton className='w-36 h-5 my-5 rounded-full'/>}
                <h4 className={`text-slate-200 leading-loose font-semibold ${isLoading? 'hidden': 'block'}`}>
                  Movie ({movie?.release_date})</h4>
                <div className='my-4 pt-1 flex gap-3 items-center'>
                  {isLoading && <Skeleton className='w-[168.72px]  h-12 rounded-lg'/>}
                  <Button className={`font-semibold font-Urbanist text-lg px-5 py-6 ${isLoading? 'hidden': ''}`} variant='secondary'>
                    <NavLink className={'flex items-center gap-2'} to={ movie? movie.homepage : 'https://www.youtube.com/'}>
                      Watch trailer <FaPlay />
                    </NavLink>
                    </Button>
                  {isLoading && <> <Skeleton className='h-12 w-12 rounded-full'/>  <Skeleton className='h-12 w-12 rounded-full'/></>}
                  
                  <Button className={`${isLoading? 'hidden' : ''}`} size='iconMain' variant='ghost'><FaBookmark/></Button>
                  <Button className={`${isLoading? 'hidden' : ''}`} size='iconMain' variant='ghost'><FaShareAlt/></Button>
                </div>
                {isLoading && <Skeleton className='w-4/5 h-32 mb-2'/>}
                <p className={`w-4/5 text-slate-200 my-8 ${isLoading? 'hidden': 'block'}`}>
                  {movie
                    ? movie.overview ? movie.overview : 'No description' 
                    : 'No description'
                  }
                </p>

              </article>

              <article>
                {isLoading && <Skeleton className='w-28 h-7 my-5 rounded-full '/>}
                <h2 className={`text-2xl font-Poppins font-semibold tracking-wide ${isLoading? 'hidden': 'block'}`}>Details</h2>
                {isLoading && <Skeleton className='w-2/5 h-32 mb-2'/>}
                <Table className={`${isLoading? 'hidden': ''}`}>
                <TableBody>
                  <TableRow>
                    <TableHead className="text-left">Genres</TableHead>
                    <TableCell className={`font-medium flex gap-1 `}>
                      {
                        (!movie)? <p></p> : [...genreGenerator(movie.genres)]
                      }
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-left">Country of Origin</TableHead>
                    <TableCell className={`font-medium `}>{movie?.origin_country}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-left">Runtime</TableHead>
                    <TableCell className={`font-medium `}>{movie?.runtime} min</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              </article>

            </section>
            <section className='w-1/5'>
              {isLoading && <Skeleton className='w-28 h-5 mb-5 rounded-full '/>}
              <h3 className={`font-bold text-xl tracking-wide font-Poppins mb-4 ${isLoading? 'hidden': 'block'}`}>Cast & Crew</h3>
              <div>
                {crewCast? castGenerator(crewCast):'None'}
              </div>
              {/* <Button>Show all</Button> */}
            </section>
          </div>
        </div>
        <div className='m-14 ml-24 '>
          <SectionContainer isLoading={isLoading} setMovieId={setMovieId} movieList={recommended} title='Recomendaciones' scrollType='flex-wrap'></SectionContainer>
        </div>

        <Footer></Footer>

    </div>
  )
}

export default MovieDetail