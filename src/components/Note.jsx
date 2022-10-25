import {useState,React} from 'react'

const Note = ({note,deleteNote}) => {

const [modeEdit, setModeEdit] = useState(false);
const [item, setItem] = useState(note);

const toggle = () => {
  setModeEdit(!modeEdit);
  setItem(note)
}

  return (
  
      
        <li style={{marginBottom: '.6rem'}}>
          <div>id : {note.id}</div>
          {
            modeEdit ? 
            <label>
              <input type="text" value={item.title}  onChange={(ev) => setItem({...item, title: ev.target.value})}/>
            </label>:<div>title: {note.title}</div>

          }
          {
            modeEdit ? 
            <label>
              <input type="text" value={item.body} onChange={(ev) => setItem({...item, body: ev.target.value})}/>
            </label>:<div>body: {note.body}</div>

          }
           <button onClick={()=> toggle()}>{modeEdit ? 'cortar' : 'editar'}</button>
           {
                 modeEdit &&
                 <button>nuero</button>
           }
           {
            !modeEdit &&
            <button onClick={()=> deleteNote(note.id)}>X</button>

           }
        </li>
      
   
  );
}

export default Note;