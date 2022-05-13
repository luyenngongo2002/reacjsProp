import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ColorBox from './pages/component/StateVidu3/ColorBox';
import Counter from "./pages/component/StateVidu3/Counter";
import State from './pages/component/StateVidu2/state';
import Content from './pages/component/StateVidu1/StateVidu1';
import reportWebVitals from './reportWebVitals';
import Car from './pages/StateVidu3-D';
import App from './App';
import Category from './pages/component/Exercise/Category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <State/> */}
    {/* {<Content/>} */}
    {/* <ColorBox />
    <Counter/> */}
    {/* <Content /> */}
    {/* <Car/> */}
  <Category/>
  </React.StrictMode>
  //component
);
// show

reportWebVitals();
