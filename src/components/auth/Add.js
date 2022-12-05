import logo_notitas from '../../images/logo_notitas.png';
import logout from '../../images/logout.png';
import save from '../../images/save.png';
import './Add.css';


function Add() {
  return (
    <div className="Add">

      <header>
        <img src = { logo_notitas } className = 'logo_n' alt = 'logo_n' />
        <img src = { logout } className = 'logout' alt = 'logout' />
      </header>

      <main>
        <h4>Título de la nota</h4>
        <h5>Esta es solo una nota</h5>
      </main>
        
      <section> 
        <button></button><img src = { save } className = 'save' alt = 'save' />
      </section>

          
    </div>
  );
}

export default Add;