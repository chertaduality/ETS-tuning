import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'slick-carousel/slick/slick.css';
import { HashRouter } from 'react-router-dom';
import { ParallaxProvider} from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
    <HashRouter>
    <App />
    </HashRouter>
    </ParallaxProvider>
  </React.StrictMode>
);
