import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableApp from './TableApp';
import ChartDetails from "./ChartDetails"
import "./index.css"

const App = () => {
  return (
    
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TableApp/>}></Route>
        <Route path='/chart' element={<ChartDetails/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App