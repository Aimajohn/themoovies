import "./main.css"
console.log("mama")
const img = document.getElementById("imagenCool")
const listMovies = document.getElementById("listMovies")

const KEY = "41f595b6e9a3306dcd645e1eab82f413"
const baseURL = "https://api.themoviedb.org/3/"

async function getConfig() {
  try {
    const configURL = `${baseURL}configuration?api_key=${KEY}`
    const response = await fetch(configURL)
    const phrase = await response.json()
    return phrase
  } catch (error) {
    console.log((error as Error).message)
  }
}
async function getPoster(imgPath: string) {
  try {
    const baseConfig = await getConfig()
    const imgBaseURL = await baseConfig.images.secure_base_url
    const imgURL = `${imgBaseURL}w154/${imgPath}`
    return imgURL
  } catch (error: any) {
    console.log((error as Error).message)
  }
}
async function searchShows(keyword: string) {
  try {
    const urlCompleta = `${baseURL}search/tv?api_key=${KEY}&query=${keyword}`
    const response = await fetch(urlCompleta)
    const phrase = await response.json()
    return phrase.results
  } catch (error: any) {
    console.log((error as Error).message)
  }
}

async function renderShow(show: any) {
  const poster = await getPoster(show.poster_path)
  const aMovie = document.createElement("li")
  aMovie.classList.add("moviePoster")
  aMovie.innerHTML = `
        <img class='imgPoster' src='${poster}'/>
        <h2 class='movieTitle'> ${show.name} </h2>
    `
  listMovies!.appendChild(aMovie)
}
async function getShows(keyword: string, n: number) {
  const results = await searchShows(keyword)
  const required = await results.slice(0, n)
  for (let show of required) {
    if (show.poster_path) {
      renderShow(show)
    }
  }
}

//Buscador
const searchBar = document.querySelector("#searchBar") as HTMLInputElement
const searchIcon = document.getElementById("searchIcon")

searchIcon!.onclick = () => {
  while (listMovies!.firstChild) {
    listMovies!.firstChild.remove()
  }
  getShows(searchBar.value, 5)
}
const fixMyLife = document.getElementById("fixMyLife")

searchBar.addEventListener("keyup", async function (event) {
  if (event.key == "Enter") {
    while (listMovies!.firstChild) {
      listMovies!.firstChild.remove()
    }
    getShows(searchBar.value, 5)
  }
})

// Intersection Observer

const intersectionArticle = document.getElementById("intersectionArticle")

function handlerIntersection(entries: any[]) {
  const moviesDiv = entries[0]
  if (moviesDiv.intersectionRatio <= 0.2) {
    intersectionArticle!.classList.add("intersectionShownActivator")
  }
}

const observer = new IntersectionObserver(handlerIntersection, {
  threshold: 0.2,
})

observer.observe(listMovies!)

// VisibilityChange

function handlerVisibilityChange() {
  document.visibilityState == "hidden"
    ? console.log("Pues se fue el muchacho")
    : console.log("Volvio")
}

document.addEventListener("visibilitychange", handlerVisibilityChange)

// Cache PWA
