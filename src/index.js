import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './pages/inicial/App';
import Carros from './pages/simucarro';
import Sorvetevenda from './pages/sorvete';
import Insta from './pages/insta';
import IMDB from './pages/filmes';
import Netflix from './pages/netflix';
import Marvel from './pages/sitemarvel';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />} />
        <Route path='/simucarro' element={<Carros />} />
        <Route path='/sorvete' element={<Sorvetevenda />} />
        <Route path='/insta' element={<Insta />} />
        <Route path='/filmes' element={<IMDB />} />
        <Route path='/netflix' element={<Netflix />} />
        <Route path='/sitemarvel' element={<Marvel />} />

        
        
        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

