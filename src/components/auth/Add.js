import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config.js'
import { getAuth, signOut } from 'firebase/auth'
import logo_notitas from '../../images/logo_notitas.png';
import logout from '../../images/logout.png';
import save from '../../images/save.png';
import './Add.css';

function Add(props) {
  //console.log(props, 'props de Add')
  const setUser = props.setUser;
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

    navigate('/')
  }

  return (
    <div className="Add">

      <header>
        
        <button onClick = {()=>{
          console.log('Regresar a lista de notas')
          const auth = getAuth();
          signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
        }}>
          <img src = { logo_notitas } className = 'logo_n' alt = 'logo_n' />
        </button>

        <button onClick = {()=>{
          console.log('Quiere salir de Notitas')
          const auth = getAuth();
          signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
        }}>
          <img src = { logout } className = 'logout' alt = 'logout' />
        </button>

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