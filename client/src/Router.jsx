import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Redirect from './components/Redirect'

const Router = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:shortUrl" element={<Redirect />} />
    </Routes></div>
  )
}

export default Router