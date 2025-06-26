import React, { useContext, useEffect } from 'react';
import { userContext } from './Context/userContext';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';

const App = () => {
const { data } = useContext(userContext);
useEffect(()=>{},[data])
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default App;