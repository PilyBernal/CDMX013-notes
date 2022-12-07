import { useNavigate } from "react-router-dom";
import logo_notitas from '../../images/logo_notitas.png';
import logout from '../../images/logout.png';
import add from '../../images/add.png';
import './Notes.css';

function Notes() {
  const navigate = useNavigate();

  return (
    <div className="Notes">

      <header>
        <img src = { logo_notitas } className = 'logo' alt = 'logo' />
        <h1>MIS NOTITAS</h1>
        <img src = { logout } className = 'logout' alt = 'logout' />
      </header>

      <main>
        <button onClick = {()=>{
          navigate('/Add')
        }}>
          <img src = { add } className = 'add' alt = 'add' /></button>
      </main>
        
      <section> 
        <h2>Título</h2>
        <h3>Aquí estará el contenido de tus notitas</h3>
      </section>
          
    </div>
  );
}

export default Notes;