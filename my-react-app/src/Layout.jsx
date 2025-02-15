import React from 'react'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Layout