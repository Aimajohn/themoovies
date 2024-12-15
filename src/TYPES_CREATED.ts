//Types of data

export type scrollT = "flex-wrap" | "scroll"

export type MovieT = {
  adult: string
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieDetailedT = {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection?: {
    id: number
    name: string
    poster_path: string | null
    backdrop_path: string | null
  }
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string
  id: number
  imdb_id: string | null
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: {
    id: number
    name: string
    logo_path: string | null
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string // En formato ISO "YYYY-MM-DD"
  revenue: number
  runtime: number | null // Puede ser null si no está disponible
  spoken_languages: {
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

// Tipo para un miembro del reparto (cast)
export type CastMemberT = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string // Puede ser opcional si a veces está ausente
  cast_id: number
  character: string
  credit_id: string
  order: number
}

// Tipo para un miembro del equipo técnico (crew)
export type CrewMemberT = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string // Puede ser opcional
  credit_id: string
  department: string
  job: string
}

// Tipo para la respuesta completa de la API
export type MovieCreditsResponseT = {
  id: number
  cast: CastMemberT[]
  crew: CrewMemberT[]
}

export type listaT = "recommendations" | "popular"

export type genreIdT =
  | "28"
  | "12"
  | "16"
  | "35"
  | "80"
  | "99"
  | "18"
  | "10751"
  | "14"
  | "36"
  | "27"
  | "10402"
  | "9648"
  | "10749"
  | "878"
  | "10770"
  | "53"
  | "10752"
  | "37"
  | "0"

export const genres = {
  "28": "Acción",
  "12": "Aventura",
  "16": "Animación",
  "35": "Comedia",
  "80": "Crimen",
  "99": "Documental",
  "18": "Drama",
  "10751": "Familia",
  "14": "Fantasía",
  "36": "Historia",
  "27": "Terror",
  "10402": "Música",
  "9648": "Misterio",
  "10749": "Romance",
  "878": "Ciencia ficción",
  "10770": "Película de TV",
  "53": "Suspense",
  "10752": "Bélica",
  "37": "Western",
  "0": "",
}
