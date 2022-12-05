import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Welcome from './components/noauth/Welcome.js';
import Notes from './components/auth/Notes.js';
import Add from './components/auth/Add.js';
import NotFound from './components/auth/NotFound.js';

function App () {

  const [user,setUser] = useState(null);
  if (!user) {
    return (
      <Routes>
        <Route path = '/' element = { <Welcome setUser = { setUser } /> } />
        <Route path = '/NotFound' element = { <NotFound setUser = { setUser } /> } />
      </Routes>
    );
  }
 
  return (
    <div className='App'>
 
      <Routes>
       
        <Route path = '/' element = { <Notes /> } />
        <Route path = '/Add' element = { <Add /> } />
        <Route path = '*' element = { <NotFound /> } />
      </Routes>
       
    </div>
  )
  
}

export default App;