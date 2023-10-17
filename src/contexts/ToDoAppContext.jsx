import { useState, createContext } from "react";

export const ToDoAppContext = createContext();

// Provider Component
const ToDoAppProvider = ({children}) => {

    const [noteText, setNoteText] = useState("");
    const [noteList, setNoteList] = useState([]);
    const [editableNote, setEditableNote] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const createHandler = () => {
      const note = {
        id: String(Date.now()),
        text: noteText,
      };

      setNoteList([...noteList, note]);
      setNoteText("");
    };

    const updateHandler = () => {
      const newNoteList = noteList.map((note) => {
        if (note === editableNote) {
          return {
            ...note,
            text: noteText,
          };
        }
        return note;
      });
      setNoteList(newNoteList);
      setEditMode(false);
      setNoteText("");
    };

    const submitHandler = (e) => {
      e.preventDefault();
      if (!noteText.trim()) {
        return alert("Please Enter Your Notes...");
      }
      editMode ? updateHandler() : createHandler();
    };

    const removeHandler = (note) => {
      const newNoteList = noteList.filter((n) => n !== note);
      setNoteList(newNoteList);
    };

    const editHandler = (note) => {
      setEditMode(true);
      setNoteText(note.text);
      setEditableNote(note);
    };


     const contextValues = {
        noteText,
        setNoteText,
        noteList,
        setNoteList,
        editableNote,
        setEditableNote,
        editMode,
        setEditMode,
        createHandler,
        updateHandler,
        removeHandler,
        editHandler,
        submitHandler
    }






  return <ToDoAppContext.Provider value={contextValues}>{children}</ToDoAppContext.Provider>;
}

export default ToDoAppProvider;
