import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HookState from './pages/HookState.jsx'
import HookEffect from './pages/HookEffect.jsx'
import HookMemo from './pages/HookMemo.jsx'

import { ThemeProvider } from './contexts/ThemeContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/state', element: <HookState /> },
      { path: '/effect', element: <HookEffect /> },
      { path: '/memo', element: <HookMemo /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
