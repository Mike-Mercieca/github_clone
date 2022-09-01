import React from 'react';
import { Routes, Route } from 'react-router-dom';

import * as Pages from './pages';

function App() {
  
  return (
    //Route paths go here
    <div className="App">
      <Routes>
        <Route path='/' element={<Pages.HomePage/>} />
        <Route path='/user'>
          <Route path=':username' element={<Pages.UserPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
