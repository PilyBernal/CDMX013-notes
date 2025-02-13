import { auth, provider, signInWithPopup, GoogleAuthProvider } from '../../firebase/config.js'

function authWithGoogle() {
  
  const promesa = signInWithPopup(auth, provider)
  const promesaUsuario = promesa.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    // The signed-in user info.
    const user = result.user;
    console.log('Bienvenida a NOTITAS ' + user.email)
    return(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }) 
  return promesaUsuario  

}

export default authWithGoogle;