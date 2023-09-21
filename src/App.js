import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

const App = () => (
  <Router>
    <Header />
    <Routes>
    <Route path="/" element={<CharacterList />} />
    <Route path="/details/:id/" element={<CharacterDetails />} />
    </Routes>
  </Router>
);

export default App;
