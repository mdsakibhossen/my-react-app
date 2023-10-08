import React, { useState } from "react";

function ToDoApp() {
  const [noteText, setNoteText] = useState("");
  const [btnText, setBtnText] = useState("Add Note");
  const [noteList, setNoteList] = useState([]);
  const [updateNote, setUpdateNote] = useState(false);

  const createHandler = (e) => {
    e.preventDefault();

    if (!noteText.trim()) {
      return alert("Please Enter Your Notes...");
    }

    const newNote = {
      id: String(Date.now()),
      text: noteText,
    };

    /* Updaing Code */
    if (updateNote) {
      /* Run For Updating */
      //   console.log("Note Got");
      //   console.log(updateNote);
      newNote.id = updateNote.id;

      const updatedNoteList = noteList.map((note) => {
        if (note.id === updateNote.id) {
          note = newNote;
        }
        return note;
      });
      // console.log(updatedNoteList);

      setNoteList(updatedNoteList);
      setBtnText("Add Note");

      setUpdateNote(false);
      alert("Note is Updated Successfully !!!");
    } else {
      setNoteList([...noteList, newNote]);
      alert("Note is Added Successfully !!!");
    }

    setNoteText("");

    // console.log(newNote);
    // console.log(noteList);
  };

  /* Remove Handler */
  const removeHandler = (id) => {
    const newNoteList = noteList.filter((note) => note.id !== id);
    // console.log(newNoteList);
    setNoteList(newNoteList);
    alert("Note is Removed Successfully !!!");
  };

  /* Edit Handler */
  const editHandler = (id) => {
    const editNote = noteList.filter((note) => note.id === id)[0];
    // console.log(editNote);
    setNoteText(editNote.text);
    setBtnText("Update Note");
    setUpdateNote(editNote);
  };

  return (
    <div className="ToDoApp">
      <form action="#" onSubmit={createHandler}>
        <input
          type="text"
          value={noteText}
          id="noteText"
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button type="submit">{btnText}</button>
      </form>
      <ul id="noteList">
        {noteList.map((note) => (
          <li key={note.id}>
            <span>{note.text} </span>
            <button onClick={() => editHandler(note.id)}>Edit</button>
            <button onClick={() => removeHandler(note.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
