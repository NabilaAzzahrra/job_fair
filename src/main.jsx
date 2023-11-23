import React from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CompanyOne from './pages/CompanyOne.jsx'
import CompanyTwo from './pages/CompanyTwo.jsx'
import CompanyThree from './pages/CompanyThree.jsx'
import CompanyFour from './pages/CompanyFour.jsx'
import CompanyFive from './pages/CompanyFive.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/tasco",
    element: <CompanyOne />
  },
  {
    path: "/gajah-mada",
    element: <CompanyTwo />
  },
  {
    path: "/bank-woori-saudara",
    element: <CompanyThree />
  },
  {
    path: "/adira",
    element: <CompanyFour />
  },
  {
    path: "/csa",
    element: <CompanyFive />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
