import logo_notitas from '../../images/logo_notitas.png';
import logout from '../../images/logout.png';
import add from '../../images/add.png';
import './Notes.css';
import Login from '../noauth/Login.js'

function Notes() {
  return (
    <div className="Notes">

      <header>
        <img src={logo_notitas} className="logo_notitas" alt="logo_notitas" />
        <h1>MIS NOTITAS</h1>
        <img src={logout} className="logout" alt="logout" />
      </header>

      <main>
        <img src={add} className="add" alt="add" />
      </main>
        
      <section> 
        <h3>Aquí estarán tus notitas</h3>
      </section>
          
    </div>
  );
}

export default Notes;