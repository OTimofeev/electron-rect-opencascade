import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { MainView } from './module/main';

const JustPlaceholder = () => {
  return (
    <MainView />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JustPlaceholder />} />
      </Routes>
    </Router>
  );
};

export default App;
