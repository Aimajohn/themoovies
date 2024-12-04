
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders, Axios } from 'axios';

// Header functions


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: import.meta.env.VITE_SECRET_KEY,
        language: navigator.language
    }
})


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


export const getMovie = async () => {
    try{
        
        // let movies: movies<movie>  = {}
        // data.forEach(movie =>{
        //     movies[movie.id] = movie
        // })
        const response: AxiosResponse = await api.get('/movie/popular')
        const data: MovieT[] = response.data.results
        return (data)
    }
    catch(error){
        return undefined
    }
}

const movieList = getMovie()


async function whichSize(width: number){
    let imgWidth: number = 0;
    [92, 154, 185, 342, 500, 780].forEach(size=>{
        if(width < size){
            return imgWidth = size;
        }
    })
    return (imgWidth > 0)?imgWidth:"original"
}



export async function getHero(id:number, width:number){
    const posterSize = await whichSize(width)
    const {data} : AxiosResponse = await api(`/movie/${id}`)
    if(typeof(posterSize)=="string"){
        console.log(`https://image.tmdb.org/t/p/${posterSize}${data.backdrop_path}`)
        // heroMovieImg.setAttribute('src', `https://image.tmdb.org/t/p/${posterSize}${data.backdrop_path}`)
    }else{
        console.log(`https://image.tmdb.org/t/p/${`w${posterSize}`}${data.poster_path}`)
        // heroMovieImg.setAttribute('src', `https://image.tmdb.org/t/p/${`w${posterSize}`}${data.poster_path}`)
    }
    // heroMovieTitle.textContent = data.title
    // heroMovieScore.textContent = redondear(data.vote_average)
    // movieDescriptionText.textContent = data.overview
}

