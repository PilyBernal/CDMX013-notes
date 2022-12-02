import logo_notitas from '../../images/logo_notitas.png';
import access from '../../images/access.png';
import './Welcome.css';
import Login from './Login.js'


function Welcome(props) {
  const { setUser } = props;
  return (
    <div className='Welcome'>

      <header>
        <img src = { logo_notitas } className = 'logo_notitas' alt = 'logo_notitas' />
      </header>

      <main>
        <p>
        <code>La mejor forma de tener a la mano esos detalles que necesitas recordar</code>
        </p>
      </main>
       
      <section>
        <button onClick = {() =>
          Login()
        }><img src={access} className="access" alt="access" /></button>
      </section>

          
    </div>
  );
}

export default Welcome;