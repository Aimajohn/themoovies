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

function MovieDetail() {
  const percentage = 6.6
  return (

    <div className='relative min-h-svh text-slate-100'>
        <div className='top-0 left-0 absolute z-[-1]'>
          <HeroBackground heroImg={heroImg}></HeroBackground>
        </div>
        <Header ></Header>
        <div className='pt-80'>
          <div className='flex gap-10 px-10 bg-primary'>
            <section 
            // className='w-1/4'
            >
              <div className=' flex flex-col mt-12 pt-8'>
                <div className='rounded-xl w-80 overflow-hidden shadow-lg'>
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
            <section className='w-1/2'>
              <article>
                <h2>
                  Money Heist
                </h2>
                <p>Original title: La casa de papel</p>    
                <h4>Series (2017-2021) * 5 seasons * 48 episodes</h4>
                <div>
                  <Button>Watch trailer <span>P</span></Button>
                  <div>Guard</div>
                  <div>Share</div>
                </div>
                <p>
                  A criminal mastermind who goes by «The Professor» has a plan to pull off the
                  biggest heist in recorded history — to print billions of euros in the Royal Mint
                  of Spain. To help him carry out the ambitious plan, he recruits eight people with
                  certain abilities and who have nothing to lose. The group of thieves take hostages
                  to aid in their negotiations with the authorities, who strategize to come up with
                  a way to capture The Professor.
                </p>
                
              </article>
              <article>
                <h2>Details</h2>
                <div>
                  <div>
                    <h4>Genres</h4>
                    <div>
                      <Badge>Action</Badge>
                      <Badge>Crime</Badge>
                      <Badge>Drama</Badge>
                      <Badge>Thriller</Badge>
                    </div>
                  </div>
                  <div>
                    <h4>Country of origin</h4>
                    <p>Spain</p>
                  </div>
                  <div>
                    <h4>Runtime</h4>
                    <p>50 min</p>
                  </div>
                </div>
              </article>

            </section>
            <section>
              <h3>Cast & Crew</h3>
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