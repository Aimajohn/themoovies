
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders, Axios } from 'axios';

// Header functions

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: import.meta.env.VITE_SECRET_KEY,
        language: navigator.language
    }
})



//Types of data

export type scrollT = 'flex-wrap' | 'scroll'

export type MovieT = {
    adult: string;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number
}

export type MovieDetailedT = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection?: {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: {
        id: number;
        name: string;
        logo_path: string | null;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string; // En formato ISO "YYYY-MM-DD"
    revenue: number;
    runtime: number | null; // Puede ser null si no está disponible
    spoken_languages: {
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
 };

 // Tipo para un miembro del reparto (cast)
export type CastMemberT = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string; // Puede ser opcional si a veces está ausente
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  };
  
  // Tipo para un miembro del equipo técnico (crew)
  export type CrewMemberT = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string; // Puede ser opcional
    credit_id: string;
    department: string;
    job: string;
  };
  
  // Tipo para la respuesta completa de la API
  export type MovieCreditsResponseT = {
    id: number;
    cast: CastMemberT[];
    crew: CrewMemberT[];
  };
  

export type listaT = 'recommendations' | 'popular'

// Helper functions

export function redondear(numero: number){
    // const valido =  numero !== "" && numero !== null  && !isNaN(Number(numero)) 
    // if (!valido) return "-"
    // const yup = Number(numero)
    return numero == 0
        ?  "-"
        : numero == 10 ? 10 : (Math.floor(numero*10)/10).toFixed(1)
}
export function redondearF(numero: number|undefined){
    if( numero == undefined || numero == 0 ) return 10
    return numero == 10 ? 10 : Number((Math.floor(numero*10)/10).toFixed(1))
}


function whichSize(width: number){
    let imgWidth: number = 0;
    [92, 154, 185, 342, 500, 780].forEach(size=>{
        if(width < size){
            return imgWidth = size;
        }
    })
    return (imgWidth > 0)?imgWidth:"original"
}


//Functional code

export const getMovie = async (lista: listaT = 'popular', id?: number, genero?: number) => {
    try{

        let url ='/movie/'+ (id? `${id}/${lista}`: lista)
        if (genero){
            url = `/discover/movie?include_adult=false&include_video=false&language=es-EC&page=1&sort_by=popularity.desc&with_genres=${genero}`
        }
        const response: AxiosResponse = await api.get(url)
            const data: MovieT[] = response.data.results
            return data
    }
    catch(error){
        return undefined
    }
}

export const getCredits = async (id: number) => {
    try{
        const url = `/movie/${id}/credits`
        const response: AxiosResponse = await api.get(url)
        const data: MovieCreditsResponseT = response.data
        return data
    }
    catch(error){
        return undefined
    }
}





export async function getHero(id:number, width:number){
    const posterSize = whichSize(width)
    const response : AxiosResponse = await api(`/movie/${id}`)
    const data : MovieDetailedT = response.data 
    return (data)
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
