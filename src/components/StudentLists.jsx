import React from 'react'

const StudentLists = (props) => {

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
                  <button onClick={() => props.editStudent(student)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => props.removeStudent(student)}>
                    Remove
                  </button>
                </td>
                <td>
                  <button onClick={() => props.makePresent(student)}>
                    Make Present
                  </button>
                </td>
                <td>
                  <button onClick={() => props.makeAbsent(student)}>
                    Make Absent
                  </button>
                </td>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <td>
                  <button onClick={() => props.moveStudent(student)}>
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
}

export default StudentLists