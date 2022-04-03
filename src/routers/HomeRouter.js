import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Users } from '../pages/Users';
import { Create } from '../pages/Create';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

export const HomeRouter = () => {
 
  return (
    <>
      <Header />
      <div className="homeRouter">
        <div>
          <Sidebar />
        </div>
        <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/usuarios" element={<Users />} />
              <Route exact path="/crear" element={<Create />} />
            </Routes>
        </div>
      </div>
    </>
  )
}
