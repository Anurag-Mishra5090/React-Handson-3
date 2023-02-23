import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Back from './Back';
import User from './User';

function App() {
  

  return(
     
<div>
  <Routes>
    <Route path='/' element={<User />} />
    <Route path='/back' element={<Back />}/>
  </Routes>
</div>
   


    
  )

}


export default App;