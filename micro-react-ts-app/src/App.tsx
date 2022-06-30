import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      <h2>micro-react-ts-app</h2>
      <Outlet />
      { location.pathname === '/' ? <Navigate to='/home' /> : null }
    </>
  );
}

export default App;
