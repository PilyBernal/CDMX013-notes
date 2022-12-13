import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config.js'
//import { notita } from './Add.js'

const OneNote = () => {
  const querySnapshot = getDocs(collection(db, "notitas"))
  //console.log(querySnapshot)
  querySnapshot.then (resultado => resultado.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    console.log(doc.data());
    const paiting1 = doc.data().title
    console.log(paiting1)
    const paiting2 = doc.data().content
    console.log(paiting2)
    return(<p>{paiting1}</p>, <p>{paiting2}</p>);
  }))
}

/*const OneNote = () => {
   
  notes()
  return <h2>Aquí estará la lista de notas</h2>
  //return <h2>{notes()}</h2>
  //const text = notes()
  //console.log(text)

  //return <h2>{text}</h2>
} */ 

export default OneNote;

//{OneNote()}