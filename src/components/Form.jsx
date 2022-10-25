import {useState, React} from 'react'

const Form = ({notes, setNotes}) => {
  
    const initialNotes = {
        id: "",
        title: "",
        body: "",
      };
    const [note, setNote] = useState(initialNotes);

    const addNote = (e) => {
        e.preventDefault();
        if (note.title.trim() === "" || note.body.trim() === "") {
          return;
        }
        setNotes([
          ...notes,
          {
            ...note,
            id: notes.length > 0 ? Math.max(...notes.map((note) => note.id)) + 1 : 1
          },
        ]);

        setNote(initialNotes);


      };

  
  
  
    return (
    <form onSubmit={(e) => addNote(e)}>
    <label htmlFor="">
      Title
      <input
        type="text" value={note.title}
        onChange={(ev) => setNote({ ...note, title: ev.target.value })}
      />
    </label>
    <label htmlFor="">
      Body
      <input
        type="text" value={note.body}
        onChange={(ev) => setNote({ ...note, body: ev.target.value })}
      />
    </label>

    <button>Submit</button>
  </form>
  )
}

export default Form