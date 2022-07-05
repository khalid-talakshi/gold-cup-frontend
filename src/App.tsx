import React from 'react';
import {Teams, Home, TeamInfo, Register} from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigation } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
  <>
    <Navigation />
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/teams/:id" element={<TeamInfo />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </>
  );
}

export default App;
