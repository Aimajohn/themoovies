import axios, { AxiosResponse } from "axios"
import {
  listaT,
  MovieT,
  MovieCreditsResponseT,
  MovieDetailedT,
} from "@/TYPES_CREATED"

// Header functions

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
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

function whichSize(width: number) {
  let imgWidth: number = 0
  ;[92, 154, 185, 342, 500, 780].forEach((size) => {
    if (width < size) {
      return (imgWidth = size)
    }
  })
  return imgWidth > 0 ? imgWidth : "original"
}

//Functional code

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

export async function getHero(id: number, width: number) {
  const posterSize = whichSize(width)
  const response: AxiosResponse = await api(`/movie/${id}`)
  const data: MovieDetailedT = response.data
  console.log(posterSize)
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
