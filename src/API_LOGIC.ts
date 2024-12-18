import axios, { AxiosResponse } from "axios"
import {
  listaT,
  MovieT,
  MovieCreditsResponseT,
  MovieDetailedT,
} from "@/TYPES_CREATED"

// Header functions
const baseURL = "https://api.themoviedb.org/3/"

const api = axios.create({
  baseURL: baseURL,
  params: {
    api_key: import.meta.env.VITE_SECRET_KEY,
    language: navigator.language,
  },
})

// Helper functions

export function redondear(numero: number) {
  // const valido =  numero !== "" && numero !== null  && !isNaN(Number(numero))
  // if (!valido) return "-"
  // const yup = Number(numero)
  return numero == 0
    ? "-"
    : numero == 10
      ? 10
      : (Math.floor(numero * 10) / 10).toFixed(1)
}
export function redondearF(numero: number | undefined) {
  if (numero == undefined || numero == 0) return 10
  return numero == 10 ? 10 : Number((Math.floor(numero * 10) / 10).toFixed(1))
}

export function whichSize(width: number) {
  let imgWidth: number = 0
  ;[92, 154, 185, 342, 500, 780].forEach((size) => {
    if (width < size) {
      return (imgWidth = size)
    }
  })
  return imgWidth
}

//Functional code

export async function searchShows(
  keyword: string,
  include_adult: boolean,
  year: string,
) {
  try {
    const include18 = include_adult ? "true" : "false"
    const url =
      "/search/movie?query=venom&include_adult=false&language=en-US&primary_release_year=2024&page=1"
    const urlAPi = `/search/movie?query=${keyword}&include_adult=${include18}&language=en-US&primary_release_year=${year}&page=1`
    console.log(url)
    const response = await api.get(urlAPi)
    const responsePP = response.data.results
    console.log(responsePP)
    return responsePP
    // const phrase = await response.json()
    // return phrase.results
  } catch (error: any) {
    console.log((error as Error).message)
  }
}

export const getMovie = async (
  lista: listaT = "popular",
  id?: number,
  genero?: string,
) => {
  try {
    let url = "/movie/" + (id ? `${id}/${lista}` : lista)
    if (genero && genero != "0") {
      url = `/discover/movie?include_adult=false&include_video=false&language=es-EC&page=1&sort_by=popularity.desc&with_genres=${genero}`
    }
    const response: AxiosResponse = await api.get(url)
    const data: MovieT[] = response.data.results
    return data
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export const getCredits = async (id: number) => {
  try {
    const url = `/movie/${id}/credits`
    const response: AxiosResponse = await api.get(url)
    const data: MovieCreditsResponseT = response.data
    return data
  } catch (error) {
    console.warn(error)
    return undefined
  }
}

export async function getHero(id: number) {
  const response: AxiosResponse = await api(`/movie/${id}`)
  const data: MovieDetailedT = response.data
  return data
  // if(typeof(posterSize)=="string"){
  //     console.log(`https://image.tmdb.org/t/p/${posterSize}${data.backdrop_path}`)
  //     // heroMovieImg.setAttribute('src', `https://image.tmdb.org/t/p/${posterSize}${data.backdrop_path}`)
  // }else{
  //     console.log(`https://image.tmdb.org/t/p/${`w${posterSize}`}${data.poster_path}`)
  //     // heroMovieImg.setAttribute('src', `https://image.tmdb.org/t/p/${`w${posterSize}`}${data.poster_path}`)
  // }

  // heroMovieTitle.textContent = data.title
  // heroMovieScore.textContent = redondear(data.vote_average)
  // movieDescriptionText.textContent = data.overview
}

// async function getHero(id, width) {
//   const posterSize = await whichSize(width)
//   const { data } = await api(`/movie/${id}`)
//   if (typeof posterSize == "string") {
//     heroMovieImg.setAttribute(
//       "src",
//       `https://image.tmdb.org/t/p/${posterSize}${data.backdrop_path}`,
//     )
//   } else {
//     heroMovieImg.setAttribute(
//       "src",
//       `https://image.tmdb.org/t/p/${`w${posterSize}`}${data.poster_path}`,
//     )
//   }
//   heroMovieTitle.textContent = data.title
//   heroMovieScore.textContent = redondear(data.vote_average)
//   movieDescriptionText.textContent = data.overview
// }
