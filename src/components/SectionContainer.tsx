import React from 'react'
import MovieCard from '@/components/MovieCard'
type Props = {}

function SectionContainer({}: Props) {
  return (
    <div>
      <h3>Tendencias</h3>
      <div>
        <MovieCard></MovieCard>
      </div>
    </div>
  )
}

export default SectionContainer