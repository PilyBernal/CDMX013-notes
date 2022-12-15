import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config.js'
import OneNote from './OneNote'

const AllNotes = () => {

  const [allNotes, setAllNotes] = useState([])

  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "notitas"))
    querySnapshot.then
      ((notes) => {
        let mynotes = []
        notes.forEach((doc) => {

          mynotes.push(doc.data())

        })

        console.log(mynotes)
        setAllNotes(mynotes)
      });
  }, [])

  return (
    <div>
      {allNotes.map((nota) =>
        OneNote(nota)
      )}
    </div>
  )

}
/*const AllNotes = () => {
  const [notes, setNotes] = useState([])
  const querySnapshot = getDocs(collection(db, "notitas"))
  //console.log(querySnapshot)
  querySnapshot.then(resultado => setNotes(resultado.map(res => res.data())))  //resultado.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    
  return (
    <div className="listOfNotes">HOLA
      {notes.map(note => {

        <OneNote
          key={note.id}
          title={note.title}
          content={note.content}
        />

      })}
    </div>
)}*/
//} 

//console.log(querySnapshot)

/*const listOfNotes = useState.map((notes) =>
  <li key={notes.id}>
    {notes.text}
  </li>
);
console.log(listOfNotes)
 
}))*/
//OneNote() 

export default AllNotes;