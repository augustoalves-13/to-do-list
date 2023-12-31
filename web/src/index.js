import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/home';
import ProfilePage from './pages/perfil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/perfil' element={<ProfilePage/>} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);