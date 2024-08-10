import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Copool from './components/Copool/Copool';
import Colip from './components/Colip/Colip';
import Trangchu from './components/Trangchu/Trangchu';
import Banbida from './components/Banbida/Banbida';
import Ngon from './components/Ngon/Ngon';
import Phanhay from './components/Phanhay/Phanhay';
import Phukien from './components/Phukien/Phukien';
// import Tintuc from './components/Tintuc/Tintuc';
import Admin from './components/Admin/Admin';
import Home from './components/Admin/Home';
import Read from './components/Admin/Read';
import Create from './components/Admin/Create';
import Edit from './components/Admin/Edit';
import HowPool from './components/HowPool/HowPool';
import RhinoPool from './components/Rhino/RhinoPool';
import PeriPool from './components/Peri/PeriPool';
import MezzPool from './components/Mezz/MezzPool';
import Universal from './components/Universal/Universal';
import CueTecPool from './components/Cuetec/CuetecPool';
import MitPool from './components/Mit/MitPool';
import PredatorPool from './components/Predator/PredatorPool';
import FocusPool from './components/Focus/FocusPool';
import DufferinPool from './components/Dufferin/DufferinPool';
import ProDuctDetail from './components/ProductDetail/ProDuctDetail';
import S4 from './components/S4Plus/S4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" index element={<Trangchu />} />
          <Route path="banbida" element={<Banbida />} />
          <Route path="copool" element={<Copool />} />
          <Route path="colip" element={<Colip />} />
          <Route path="ngon" element={<Ngon />} />
          <Route path="phanhay" element={<Phanhay />} />
          <Route path="phukien" element={<Phukien />} />
          {/* <Route path="tintuc" element={<Tintuc />} /> */}
          <Route path="howpool" element={<HowPool />} />
          <Route path="rhinopool" element={<RhinoPool />} />
          <Route path="peripool" element={<PeriPool />} />
          <Route path="mezzpool" element={<MezzPool />} />
          <Route path="universalpool" element={<Universal />} />
          <Route path="cuetecpool" element={<CueTecPool />} />
          <Route path="mitpool" element={<MitPool />} />
          <Route path="predatorpool" element={<PredatorPool />} />
          <Route path="focuspool" element={<FocusPool />} />
          <Route path="dufferinpool" element={<DufferinPool />} />
          <Route path="/product/:id" element={<ProDuctDetail />} />
          <Route path="s4" element={<S4 />} />
        </Route>
        <Route path="admin" element={<Admin />} >
          <Route path="home" element={<Home />} />
          <Route path="read/:id" element={<Read />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
