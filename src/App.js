import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import IndexApp from './components';
import Parte2 from './components/parte2';
import Header from './components/header';

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Header/>
        <main className='main'>
          <Routes>
            <Route path= "/" element={<IndexApp/>} />
            <Route path= "/parte2" element={<Parte2/>} />
          </Routes>
        </main>
      
    </Router>
   
  );
}

export default App;
