import logo_notitas from './images/logo_notitas.png';
import logo_access from './images/logo_access.png';
import './App.css';

function App() {
  return (
    <div className="Welcome">

      <header>
        <img src={logo_notitas} className="logo" alt="logo_notitas" />
      </header>

      <main>
        <p>
          <code>La mejor forma de tener a la mano esos detalles que necesitas recordar: ideas, tareas, números telefónicos, e-mails, citas médicas, faltantes en la despensa y más</code>
        </p>
      </main>
        
      <section>  
          <img src={logo_access} className="access" alt="logo_access" />
      </section>
          
    </div>
  );
}

export default App;
