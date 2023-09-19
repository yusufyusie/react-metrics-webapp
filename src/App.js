import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './components/CharacterList';

const App = () => (
  <Router>
    <Header />
    <Routes>
    <Route path="/" element={<CharacterList />} />
    </Routes>
  </Router>
);

export default App;
