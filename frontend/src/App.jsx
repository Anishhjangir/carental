import React from 'react'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Root from "./Routes/Root"
import HomePage from './Routes/HomePage'
import AllVehicles from './Routes/AllVehicles'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route index element={<HomePage />} />
          <Route path='AllVehicles' element={<AllVehicles />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
