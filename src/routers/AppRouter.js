import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { HomeRouter } from './HomeRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} 
        />
        <Route path="/*" element={<HomeRouter />} 
        />
      </Routes>
    </BrowserRouter>
  )
};