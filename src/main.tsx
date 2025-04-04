import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { HashRouter, Routes, Route } from "react-router"
import App from "@/App.tsx"
import MovieDetail from "@/MovieDetail.tsx"
import TendenciasApp from "@/TendenciasApp.tsx"
import "@/index.css"
import { SearchPage } from "./SearchPage"
import { MyContextProvider } from "@/MyContext"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tendencias/" element={<TendenciasApp />} />
          <Route path="/search=/:key" element={<SearchPage />} />
          <Route path="/tendencias/genero/:key" element={<TendenciasApp />} />
        </Routes>
      </HashRouter>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v22.0"
      ></script>
    </MyContextProvider>
  </StrictMode>,
)
