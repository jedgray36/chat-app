import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
import NavBar from './components/NavBar';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className='main-container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/Chat" element={<Chat />}></Route>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
