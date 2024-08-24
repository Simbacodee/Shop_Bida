// src/App.js
import React, { useState } from 'react';
import './App.css';
import ScrollBack from './components/BackToTop/ScrollBack';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { CartProvider } from './components/CartContext/CartContext';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, useLocation } from 'react-router-dom';
const App = () => {
  const location = useLocation();
  const [sortOrder, setSortOrder] = useState('');

  const handleSelect = (eventKey) => {
    setSortOrder(eventKey);
  };

  // Danh sách các đường dẫn muốn hiển thị dropdown
  const pagesWithDropdown = ['/howpool', '/rhinopool', '/peripool', '/mezzpool', '/universalpool', '/cuetecpool', '/mitpool', '/predatorpool', '/focuspool', '/dufferinpool', '/colip', '/ngon', '/phanhay', '/phukien'];

  return (
    <CartProvider>
      <div className='app-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='main-container'>
          <div className='sidenav-container'></div>
          <div className='content'>
            {pagesWithDropdown.includes(location.pathname) && (
              <div className='filter-items'>
                <NavDropdown title="Thứ tự mặc định" id="basic-nav-dropdown" onSelect={handleSelect}>
                  <NavDropdown.Item eventKey="price-low-to-high">Thứ tự theo giá: thấp đến cao</NavDropdown.Item>
                  <NavDropdown.Item eventKey="price-high-to-low">Thứ tự theo giá: cao đến thấp</NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
            <Outlet context={{ sortOrder }} />
          </div>
        </div>
        <Carousel />
        <hr />
        <ScrollBack />
        <div className='footer-container'>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
