import './App.css';
import ScrollBack from './components/BackToTop/ScrollBack';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { CartProvider } from './components/CartContext/CartContext';

import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <CartProvider>
      <div className='app-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='main-container'>
          <div className='sidenav-container'></div>
          <div className='content'>
            <Outlet />
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


  )
}

export default App;
