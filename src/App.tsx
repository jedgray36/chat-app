import React from 'react';

import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Chat" element={<Chat />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
