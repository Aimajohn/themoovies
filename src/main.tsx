import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router"
import App from "@/App.tsx"
import MovieDetail from "@/MovieDetail.tsx"
import TendenciasApp from "@/TendenciasApp.tsx"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tendencias/" element={<TendenciasApp />} />
        <Route path="/tendencias/genero/:id" element={<TendenciasApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
