import React from "react";

const StudentLists = (props) => {

  // Remove Student
  const removeStudent = (student) => {
    const newAllStudents = props.Students.filter((s) => s !== student);
    props.setAllStudents(newAllStudents);
  };

  // Edit Student
  const editStudent = (student) => {
    props.setEditingMode(true);
    props.setStudentName(student.name);
    props.setEditAbleStudent(student);
  };

  // Make Present
  const makePresent = (student) => {
    if (student.isPresent !== undefined) {
      return alert("The student is already in a list");
    }

    const newAllStudents = props.Students.map((s) => {
      if (s === student) {
        return { ...s, isPresent: true };
      }
      return s;
    });

    props.setAllStudents(newAllStudents);
  };

  // Make Absent
  const makeAbsent = (student) => {
    if (student.isPresent !== undefined) {
      return alert("The student is already in a list");
    }

    const newAllStudents = props.Students.map((s) => {
      if (s === student) {
        return { ...s, isPresent: false };
      }
      return s;
    });

    props.setAllStudents(newAllStudents);
  };

  // Move Student
  const moveStudent = (student) => {
    const newAllStudents = props.allStudents.map((s) => {
      if (s === student) {
        return { ...s, isPresent: !s.isPresent };
      }
      return s;
    });

    props.setAllStudents(newAllStudents);
  };

  return (
    <table border={1}>
      <caption>{props.caption}</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Student Name</th>
          <th colSpan={4}>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.Students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            {props.allStudentsTable ? (
              <React.Fragment>
                <td>
                  <button onClick={() => editStudent(student)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => removeStudent(student)}>Remove</button>
                </td>
                <td>
                  <button onClick={() => makePresent(student)}>
                    Make Present
                  </button>
                </td>
                <td>
                  <button onClick={() => makeAbsent(student)}>
                    Make Absent
                  </button>
                </td>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <td>
                  <button onClick={() => moveStudent(student)}>
                    Accidentally Added
                  </button>
                </td>
              </React.Fragment>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentLists;
