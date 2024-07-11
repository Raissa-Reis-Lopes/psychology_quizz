import React from 'react';
import { UserProvider } from './contexts/UserContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import EditProfile from './pages/EditProfile';
import DepressionTest from './pages/DepressionTest';
import Psychologists from './pages/Psychologists';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/depression-test' element={<DepressionTest/>} />
          <Route path='/psychologists' element={<Psychologists/>} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
