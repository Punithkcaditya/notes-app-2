import React from 'react'

const Note = ({note,deleteNote}) => {
  return (
  
      
        <li style={{marginBottom: '.6rem'}}>
          id : {note.id}, title: {note.title}, body: {note.body}
          <button onClick={()=> deleteNote(note.id)}>X</button>
        </li>
      
   
  )
}

export default Note;