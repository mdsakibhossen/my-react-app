import { useContext } from "react";
import { ToDoAppContext } from "../contexts/ToDoAppContext";

const NoteList = () => {
  const toDoAppContext = useContext(ToDoAppContext)
  return (
    <ul id="noteList">
      {toDoAppContext.noteList.map((note) => (
        <li key={note.id}>
          <span>{note.text} </span>
          <button onClick={() => toDoAppContext.editHandler(note)}>Edit</button>
          <button onClick={() => toDoAppContext.removeHandler(note)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList