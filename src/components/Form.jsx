
const Form = (props) => {

    const createhandler = () => {

      const note = {
        id: String(Date.now()),
        text: props.noteText,
      };

      props.setNoteList([...props.noteList, note]);
      props.setNoteText("");

    };

    const updateHandler = () => {
      const newNoteList = props.noteList.map((note) => {
        if (note === props.editableNote) {
          return {
            ...note,
            text: props.noteText,
          };
        }
        return note;
      });
      props.setNoteList(newNoteList);
      props.setEditMode(false);
      props.setNoteText("");
    };


    const submitHandler = (e)=>{
        e.preventDefault();
        if (!props.noteText.trim()) {
          return alert("Please Enter Your Notes...");
        }
        props.editMode ? updateHandler() : createhandler();
    }
  return (
    <form action="#" onSubmit={submitHandler}>
      <input
        type="text"
        value={props.noteText}
        id="noteText"
        placeholder="Enter Note....."
        onChange={(e) => props.setNoteText(e.target.value)}
      />
      <button type="submit">{props.editMode ? "Update Note" : "Add Note"}</button>
    </form>
  );
}

export default Form