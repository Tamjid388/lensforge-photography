import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Approuter from './routes/Approuter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Approuter}></RouterProvider>
  </StrictMode>,
)
