
import { useContext } from "react";
import { ToDoAppContext } from "../contexts/ToDoAppContext";

const Form = (props) => {
  const toDoContext = useContext(ToDoAppContext);
  return (
    <form action="#" onSubmit={toDoContext.submitHandler}>
      <input
        type="text"
        value={toDoContext.noteText}
        id="noteText"
        placeholder="Enter Note....."
        onChange={(e) => toDoContext.setNoteText(e.target.value)}
      />
      <button type="submit">{toDoContext.editMode ? "Update Note" : "Add Note"}</button>
    </form>
  );
}

export default Form