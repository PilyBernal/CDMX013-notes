import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite'
import { db } from '../../firebase/config.js'
import logo_notitas from '../../images/logo_notitas.png';
import logout from '../../images/logout.png';
import save from '../../images/save.png';
import './Add.css';

function Add() {
  const navigate = useNavigate();

  const [notita, setNotita] = useState({
    title: '',
    content: ''
  })

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    setNotita({
      ...notita,
      [e.target.name] : e.target.value
    })
  }

  const saveNotitas = (e) => {
    e.preventDefault();
    console.log(notita.title + ' / ' + notita.content)
    addDoc(collection(db, 'notitas'), {
      title: notita.title,
      content: notita.content
    })
    navigate('/Notes')
  }

  

  return (
    <div className="Add">

      <header>
        <img src = { logo_notitas } className = 'logo_n' alt = 'logo_n' />
        <img src = { logout } className = 'logout' alt = 'logout' />
      </header>

      <main>
        <form className = 'noteForm' onSubmit={saveNotitas}>
        
          <Fragment>

            <input 
              className = 'input-title'
              type = 'text'
              placeholder = 'Título de la nota'
              name = 'title'
              onChange = {handleInputChange}
            />

            <input 
              className = 'input-content'
              type = 'text'
              placeholder = 'Esta es solo una nota'
              name = 'content'
              onChange = {handleInputChange}
            />

            <button type='submit'>
              <img src = { save } className = 'save' alt = 'save' />
            </button>

          </Fragment>

        </form>
      </main>
          
    </div>
  );
  
}

export default Add;