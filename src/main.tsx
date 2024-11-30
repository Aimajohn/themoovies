import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import MovieDetail from '@/MovieDetail.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="Movie" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
