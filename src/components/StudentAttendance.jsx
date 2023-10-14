import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentLists from "./StudentLists";

const StudentAttendance = () => {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editingMode, setEditingMode] = useState(false);
  const [editAbleStudent, setEditAbleStudent] = useState(null);
  const presentStudents = allStudents.filter(
    (student) => student.isPresent === true
  );
  const absentStudents = allStudents.filter(
    (student) => student.isPresent === false
  );

  const addStudent = (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
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

    const newAllStudents = allStudents.map((s) => {
      if (s === student) {
        return { ...s, isPresent: true };
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
      <div className="student-form">
        <StudentForm
          studentName={studentName}
          editingMode={editingMode}
          addStudent={addStudent}
          updateStudent={updateStudent}
          setStudentName={setStudentName}
        />
      </div>

      <br />
      <div className="student-details">
        <div className="all-students">
          <StudentLists
            caption="All Students"
            Students={allStudents}
            editStudent={editStudent}
            removeStudent={removeStudent}
            makePresent={makePresent}
            makeAbsent={makeAbsent}
            allStudentsTable={true}
          />
        </div>

        <br />

        <div className="present-students">
          <StudentLists
            caption="Present Students"
            Students={presentStudents}
            moveStudent={moveStudent}
          />
        </div>
        <br />

        <div className="absent-students">
          <StudentLists
            caption="Absent Students"
            Students={absentStudents}
            moveStudent={moveStudent}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
