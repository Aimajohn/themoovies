
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders, Axios } from 'axios';

// Header functions

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: '41f595b6e9a3306dcd645e1eab82f413',
        language: navigator.language
    }
})

type movie = {
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


interface movies<T> {
    [Key: number]: T;
}

export const getMovie = async () => {
    try{
        let movies: movies<movie>  = {}
        const response: AxiosResponse = await api.get('/movie/popular')
        const data: [movie] = response.data.results


        data.forEach(movie =>{
            movies[movie.id] = movie
        })
        return (data)
    }
    catch(error){
        console.log(error)
    }
}


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

