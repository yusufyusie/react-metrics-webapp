import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/details/:id/" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
