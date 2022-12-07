import logo_notitas from '../../images/logo_notitas.png';
import logout from '../../images/logout.png';
import save from '../../images/save.png';
import { saveNotitas } from '../../firebase/config';
import './Add.css';


function Add() {

  const handleSubmit=(e)=>{
    e.preventDefault()
    saveNotitas(
      { userMail: 'user.mail',
        title: 'Título', 
       content: 'Esta es solo una nota'}
    )
  }

  return (
    <div className="Add">

      <header>
        <img src = { logo_notitas } className = 'logo_n' alt = 'logo_n' />
        <img src = { logout } className = 'logout' alt = 'logout' />
      </header>

      <main>
        <form className = 'noteForm' onSubmit={handleSubmit}>

          <input 
            className = 'input-title'
            type = 'text'
            placeholder = 'Título'
            name = 'title'
          />

          <input 
            className = 'input-content'
            type = 'text'
            placeholder = 'Esta es solo una nota'
            name = 'content'
          />

          <button type='submit'>
            <img src = { save } className = 'save' alt = 'save' />
          </button>

        </form>
      </main>

          
    </div>
  );
}



export default Add;