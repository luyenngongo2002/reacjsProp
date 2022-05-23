import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './pages/component/CRUD_project';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud/>
  </React.StrictMode>
  //component
);
// show

reportWebVitals();
