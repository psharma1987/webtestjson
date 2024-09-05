import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApiDetailPage from './pages/ApiDetailPage';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <Router>
    <GlobalStyles />
    <Routes>
      <Route path="/"  Component={Home} />
      <Route path="/api-detail/:providerName" Component={ApiDetailPage} />
    </Routes>
  </Router>
);

export default App;
