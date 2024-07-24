import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Write from './Write';
import Bell from './Bell';
import Account from './Account';
import Layout from './Layout';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/write" element={<Write />} />
        <Route path="/bell" element={<Bell />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
