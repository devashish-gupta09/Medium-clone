import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Article from './components/Article';

// Styles
import { GlobalStyle } from './GlobalStyles';

const App: React.FC = () => (
  <Router>
    <Header />
    <hr />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/article' element={<Article />} />
    </Routes>

    <GlobalStyle />
  </Router>
);

export default App;
