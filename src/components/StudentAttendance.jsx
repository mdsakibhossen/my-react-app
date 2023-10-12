import { useState } from "react";

const StudentAttendance = () => {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editingMode, setEditingMode] = useState(false);
  const [editAbleStudent, setEditAbleStudent] = useState(null);
  const presentStudents = allStudents.filter(student=> student.isPresent === true);
  const absentStudents = allStudents.filter((student) => student.isPresent === false);

  const addStudent = (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
      return alert("Please Enter Student Name");
    }
    if (!setStudentName) {
      return alert("Please Enter Student's Name...");
    }
    const student = {
      id: String(Date.now()),
      name: studentName,
      isPresent: undefined,
    };

    setAllStudents([...allStudents, student]);
    setStudentName("");

    // console.log(studentName);
    // console.log(allStudents);
  };

  const removeStudent = (student) => {
    const newAllStudents = allStudents.filter((s) => s !== student);
    // console.log(newAllStudents);
    setAllStudents(newAllStudents);

  };

  const editStudent = (student) => {
    setEditingMode(true);
    setStudentName(student.name);
    setEditAbleStudent(student);
  };
  const updateStudent = (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
      return alert("Please Enter Student Name");
    }

    const newAllStudents = allStudents.map((student) => {
      if (student === editAbleStudent) {
        return {
          ...student,
          name: studentName,
        };
      }
      return student;
    });

    setAllStudents(newAllStudents);
    setEditingMode(false);
    setStudentName("");
  };

  const makePresent = (student) => {
    if (student.isPresent !== undefined) {
      return alert("The student is already in a list");
    }

    const newAllStudents = allStudents.map(s=>{
      if (s === student) {
        return {...s,isPresent: true}
      }
      return s;
    });

    setAllStudents(newAllStudents);
  };
  const makeAbsent = (student) => {
    if (student.isPresent !== undefined) {
      return alert("The student is already in a list");
    }

    const newAllStudents = allStudents.map((s) => {
      if (s === student) {
        return { ...s, isPresent: false };
      }
      return s;
    });

    setAllStudents(newAllStudents);
  };

  const moveStudent = (student) => {
    const newAllStudents = allStudents.map((s) => {
      if (s === student) {
        return { ...s, isPresent: !s.isPresent };
      }
      return s;
    });

    setAllStudents(newAllStudents);
  };

  return (
    <div className="StudentAttendence" align="center">
      <h1>Student Attendence Management System</h1>
      <br />
      <form action="" onSubmit={editingMode ? updateStudent : addStudent}>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter Student's Name"
        />
        <button type="submit">
          {editingMode ? "Update Student" : "Add Student"}
        </button>
      </form>
      <br />
      <div className="details">
        <table className="all-students" border={1}>
          <caption>All Students</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th colSpan={4}>Action</th>
            </tr>
          </thead>
          <tbody>
            {allStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <table className="present-students" border={1}>
          <caption>Present Students</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Acttion</th>
            </tr>
          </thead>
          <tbody>
            {presentStudents.map((student) => (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={() => moveStudent(student)}>
                    Accidentally Added
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <table className="absent-students" border={1}>
          <caption>Absent Students</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Acttion</th>
            </tr>
          </thead>
          <tbody>
            {absentStudents.map((student) => (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={() => moveStudent(student)}>
                    Accidentally Added
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAttendance;
