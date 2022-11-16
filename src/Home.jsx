import { useState, React } from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";

export default function Dashboard() {
 
  const [notes, setNotes] = useState([
    { id: 1, title: "title", body: "lorem" },
    { id: 2, title: "title", body: "lorem" },
    { id: 3, title: "title", body: "lorem" },
    { id: 4, title: "title", body: "lorem" },
    { id: 56, title: "title", body: "lorem" },
  ]);


  // const changeState = () => {
  //   const reg = { id: 6, title: "title6", body: "lorem ipsum" };
  //   notes.push()
  //   setNotes(notes.concat(reg));
  // };


  return (
    <>
      <pre>{JSON.stringify(notes)}</pre>
      <div className="container">
        <h1 className="title has-text-centered mt-5"></h1>
      <Notes notes={notes} setNotes={setNotes}></Notes>
      <Form  notes={notes} setNotes={setNotes}></Form>
      {/* <button onClick={() => changeState()}>change</button> */}
      <br></br>
      </div>


    
    </>
  );
}
