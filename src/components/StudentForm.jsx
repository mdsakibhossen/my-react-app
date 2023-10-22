const StudentForm = (props) => {
  // Add Student
  const addStudent = (e) => {
    e.preventDefault();
    if (!props.studentName.trim()) {
      return alert("Please Enter Student's Name...");
    }

    const student = {
      id: String(Date.now()),
      name: props.studentName,
      isPresent: undefined,
    };
    props.setAllStudents([...props.allStudents, student]);
    props.setStudentName("");
  };

  // Update Student
  const updateStudent = (e) => {
    e.preventDefault();
    if (!props.studentName.trim()) {
      return alert("Please Enter Student Name");
    }

    const newAllStudents = props.allStudents.map((student) => {
      if (student === props.editAbleStudent) {
        return {
          ...student,
          name: props.studentName,
        };
      }
      return student;
    });

    props.setAllStudents(newAllStudents);
    props.setEditingMode(false);
    props.setStudentName("");
  };

  return (
    <form action="" onSubmit={props.editingMode ? updateStudent : addStudent}>
      <input
        type="text"
        value={props.studentName}
        onChange={(e) => props.setStudentName(e.target.value)}
        placeholder="Enter Student's Name"
      />
      <button type="submit">
        {props.editingMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
