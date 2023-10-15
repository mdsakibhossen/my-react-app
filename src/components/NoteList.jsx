
const NoteList = (props) => {
    const removeHandler = (note) => {
      const newNoteList = props.noteList.filter((n) => n !== note);
      props.setNoteList(newNoteList);
    };

    const editHandler = (note) => {
      props.setEditMode(true);
      props.setNoteText(note.text);
      props.setEditableNote(note);
    };
  return (
    <ul id="noteList">
      {props.noteList.map((note) => (
        <li key={note.id}>
          <span>{note.text} </span>
          <button onClick={() => editHandler(note)}>Edit</button>
          <button onClick={() => removeHandler(note)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList