import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroBackground from './components/ui/hero-background'
import {Button, buttonVariants} from '@/components/ui/button'
import {Badge} from '@/components/ui/badge'
import CrewCard from '@/components/CrewCard'
import movieFace from '@/imgs/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg'

function MovieDetail() {
  return (

    <div>
        <Header ></Header>
        <div>
          <HeroBackground heroImg='hola'></HeroBackground>
          <div>
            <section>
              <div>
                <img src={movieFace} alt="caratula movie" />
                </div>
                <div>
                  <span>82%</span>
                  <span>followers</span>
                </div>
            </section>
            <section>
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