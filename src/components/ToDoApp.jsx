import {useState} from 'react'
import Form from "./Form";
import NoteList from "./NoteList";

const ToDoApp = () => {
  const [noteText, setNoteText] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="ToDoApp">
      <Form
        noteText={noteText}
        setNoteText={setNoteText}
        editMode={editMode}
        setEditMode={setEditMode}
        editableNote={editableNote}
        noteList={noteList}
        setNoteList={setNoteList}
      />

      <NoteList
        noteList={noteList}
        setNoteList={setNoteList}
        setEditMode={setEditMode}
        setNoteText={setNoteText}
        setEditableNote={setEditableNote}
      />
    </div>
  );
};

export default ToDoApp;
