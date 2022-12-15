import React from 'react'

const OneNote = (nota) => {
  return (
    <div>
      <h6>{nota.id}</h6>  
      <h2>{nota.title}</h2>
      <h3>{nota.content}</h3>
    </div>
  )
}

export default OneNote