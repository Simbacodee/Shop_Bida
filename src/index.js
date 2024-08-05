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
import Tintuc from './components/Tintuc/Tintuc';
import Admin from './components/Admin/Admin';
import ManageItem from './components/Admin/ManageItem';
import Create from './components/Admin/Create';
// import ManageItem from './components/Admin/Content/ManageItem';
// import DashBoard from './components/Admin/Content/DashBoard';
// import AdminNew from './components/AdminNew/Admin';
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
          <Route path="tintuc" element={<Tintuc />} />
        </Route>
        <Route path="admin" element={<Admin />} >
          {/* <Route index element={<DashBoard />} /> */}
          <Route path="manage_item" element={<ManageItem />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
