import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import { ThemeProvider } from './Components/Theme/ThemeContext';
//import AuthProvider from './components/AuthProvider/AuthProvider';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider> <RouterProvider router={router} /></ThemeProvider>
    </AuthProvider>


  </React.StrictMode>,
)
