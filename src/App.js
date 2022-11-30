import Welcome from './components/noauth/Welcome.js'
import Login from './components/noauth/Login.js'
import Notes from './components/auth/Notes.js'

function App () {
  return (
    <div className='App'>
      <Welcome/>
      <Notes/>
    </div>
  )
}

export default App;