import React from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CompanyOne from './pages/CompanyOne.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/mutiara-jaya",
    element: <CompanyOne />
  },
  {
    path: "/gajah-mada",
    element: <CompanyTwo />
  },
  {
    path: "/adira-finance",
    element: <CompanyThree />
  },
  {
    path: "/matell-indo",
    element: <CompanyFour />
  },
  {
    path: "/lp3i-tasik",
    element: <CompanyFive />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
