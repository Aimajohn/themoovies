import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroBackground from './components/ui/hero-background'
import {Button, buttonVariants} from '@/components/ui/button'
import {Badge} from '@/components/ui/badge'
import CrewCard from '@/components/CrewCard'
import movieFace from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'
import heroImg from '@/imgs/m2teNSCH7sxkuXHossRJXhxPKeT.jpg'
import {Card, CardContent, CardDescription, CardTitle, CardHeader} from '@/components/ui/card'
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


function MovieDetail() {
  const percentage = 6.6
  return (

    <div className='relative min-h-svh text-slate-100'>
        <Header ></Header>
        <div className='top-0 left-0 absolute z-[-1] h-[40svh] overflow-hidden  before:w-full before:absolute before:bottom-0 before:left-0 before:h-1/2 before:from-transparent before:bg-gradient-to-b before:to-primary'>
          <HeroBackground className="" heroImg={heroImg}></HeroBackground>
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
                    <CircularProgressbar className='w-1/3 h-16 font-bold ' strokeWidth={7.5} maxValue={10} value={percentage} text={`${percentage}`}  styles={buildStyles({
                        pathColor: `rgb(234, 179, 8)`,
                        textColor: '#f3f7f2',
                        textSize: '2rem',
                        trailColor: '#060606'
                      })} />
                  <div className=' w-2/3 '>
                  <p><b>158,675 </b>ratings</p>
                  <p><b>84 </b>reviews</p>
                  </div>
                </div>
              </div>

            </section>
            <section className='w-3/5'>
              <article>
                <h1 className='text-3xl font-Poppins font-bold tracking-wide'>
                  Money Heist
                </h1>
                <p className='text-sm font-light leading-loose'>Original title: La casa de papel</p>    
                <h4 className='text-slate-200 leading-loose font-semibold'>Series (2017-2021) * 5 seasons * 48 episodes</h4>
                <div className='my-4 flex gap-3 items-center'>
                  <Button className='font-semibold font-Urbanist text-lg px-5 py-6' variant='secondary'>Watch trailer <FaPlay/></Button>
                  <Button size='iconMain' variant='ghost'><FaBookmark/></Button>
                  <Button size='iconMain' variant='ghost'><FaShareAlt/></Button>
                </div>
                <p className='w-4/5 text-slate-200 my-8'>
                  A criminal mastermind who goes by «The Professor» has a plan to pull off the
                  biggest heist in recorded history — to print billions of euros in the Royal Mint
                  of Spain. To help him carry out the ambitious plan, he recruits eight people with
                  certain abilities and who have nothing to lose. The group of thieves take hostages
                  to aid in their negotiations with the authorities, who strategize to come up with
                  a way to capture The Professor.
                </p>
                
              </article>
            

              <article>
                <h2 className='text-2xl font-Poppins font-semibold tracking-wide'>Details</h2>
                <Table>
                <TableBody>
                  <TableRow>
                    <TableHead className="text-left">Genres</TableHead>
                    <TableCell className="font-medium flex gap-1">
                      <Badge>Action</Badge>
                      <Badge>Crime</Badge>
                      <Badge>Drama</Badge>
                      <Badge>Thriller</Badge>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-left">Country of Origin</TableHead>
                    <TableCell className="font-medium">Spain</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-left">Runtime</TableHead>
                    <TableCell className="font-medium">50 min</TableCell>
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