import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import user from '../noauth/authWithGoogle.js'

/*function signOutNotitas() {

  //const navigate = useNavigate();
  console.log(user.email)

  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    //navigate('/Welcome')
  }).catch((error) => {
    // An error happened.
  });

  return signOut(auth)
}

export default signOutNotitas*/