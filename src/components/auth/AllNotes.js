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
    <div className='allNotes'>
      {allNotes.map((nota) =>
        OneNote(nota)
      )}
    </div>
  )

} 

export default AllNotes;