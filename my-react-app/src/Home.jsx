import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Home