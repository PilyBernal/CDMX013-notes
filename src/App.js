import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Welcome from './components/noauth/Welcome.js';
import Login from './components/noauth/Login.js'
import Notes from './components/auth/Notes.js';
import Add from './components/auth/Add.js';
import NotFound from './components/auth/NotFound.js';

function App () {

  const {user,setUser} = useState(null);
  if (!user) {
    return <Welcome setUser = { setUser }/>;
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