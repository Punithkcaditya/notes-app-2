import {useState,React} from 'react'

const Note = ({note,deleteNote, updateNote}) => {

const [modeEdit, setModeEdit] = useState(false);
const [item, setItem] = useState(note);

const toggle = (e) => {
  e.preventDefault();
  setModeEdit(!modeEdit);
  setItem(note)
}

const edit = (e) =>{
  e.preventDefault();
updateNote(item);
setModeEdit(false);
}


  return (
  
      
    <div class="column is-one-quarter">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          Id : {note.id}
          </p>
        </header>
        <div class="card-content">
        <p class="card-content">
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
     
        </p>
        </div>

      <footer class="card-footer">
    <a href={'/'} class="card-footer-item" onClick={(e)=> toggle(e)}>{modeEdit ? 'cortar' : 'editar'}  </a>
    
    {
      modeEdit ? <a href={'/'} class="card-footer-item" onClick={(e)=> edit(e)}>nuero</a> : <a href={'/'} class="card-footer-item" onClick={(e)=> deleteNote(note.id,e)}>X</a>
    }
  
  </footer>
  </div>
      
        </div>
      
   
  );
}

export default Note;