import Form from "./Form";
import NoteList from "./NoteList";
import ToDoAppProvider from "../contexts/ToDoAppContext";

const ToDoApp = () => {

  return (
    <div className="ToDoApp">
      <ToDoAppProvider>
        <Form />
        <NoteList />
      </ToDoAppProvider>
    </div>
  );
};

export default ToDoApp;
