import logo_notitas from '../../images/logo_notitas.png';
import logout from '../../images/logout.png';
import add from '../../images/add.png';
import './Notes.css';
import Add from './Add';

function Notes() {
  return (
    <div className="Notes">

      <header>
        <img src = { logo_notitas } className = 'logo' alt = 'logo' />
        <h1>MIS NOTITAS</h1>
        <img src = { logout } className = 'logout' alt = 'logout' />
      </header>

      <main>
        <button onClick = {() =>
          
          console.log('click')
          }><img src = { add } className = 'add' alt = 'add' /></button>
          Add()
      </main>
        
      <section> 
        <h2>Título</h2>
        <h3>Contenido</h3>
      </section>
          
    </div>
  );
}

export default Notes;