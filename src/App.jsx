// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addbooks from './components/AddBooks'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Addbooks />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
