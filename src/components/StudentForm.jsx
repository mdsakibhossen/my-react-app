import React from 'react'

const StudentForm = (props) => {
  return (
    <form action="" onSubmit={props.editingMode ? props.updateStudent : props.addStudent}>
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
}

export default StudentForm