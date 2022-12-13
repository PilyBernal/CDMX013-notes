import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth'
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config.js'
import notita from './Add.js'
import logo_notitas from '../../images/logo_notitas.png';
import logout from '../../images/logout.png';
import add from '../../images/add.png';
import OneNote from './OneNote.js'
import './Notes.css';


function Notes(props) {
  //console.log(props, 'props de Notes')
  const setUser = props.setUser; 

  //showNotes()

  const navigate = useNavigate();
  
  return (
    <div className="Notes">

      <header>
        <img src = { logo_notitas } className = 'logo' alt = 'logo' />

        <h1>MIS NOTITAS</h1>

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
        <button onClick = {()=>{
          console.log('Agregar nueva nota')
          navigate('/Add')
        }}>
          <img src = { add } className = 'add' alt = 'add' /></button>
      </main>
    
      <section> 
        {/*<h2>Título </h2>
        <h3>Aquí estará el contenido de tus notitas</h3>*/}
        <OneNote />
      </section>

    </div>
  );
}

export default Notes;