import React from 'react'
import MovieCard from '@/components/MovieCard'
type Props = {title: string}

function SectionContainer({title}: Props) {
  return (
    <div className='px-10 mb-8'>
      <h3 className='text-slate-100 mb-6 text-2xl font-bold font-Poppins'>{title}</h3>
      <div className='flex overflow-x-scroll gap-4 scroll-fix'>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </div>
  )
}

export default SectionContainer