import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentLists from "./StudentLists";

const StudentAttendance = () => {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editingMode, setEditingMode] = useState(false);
  const [editAbleStudent, setEditAbleStudent] = useState(null);

  // Derived State
  const presentStudents = allStudents.filter(
    (student) => student.isPresent === true
  );
  const absentStudents = allStudents.filter(
    (student) => student.isPresent === false
  );

  return (
    <div className="StudentAttendence" align="center">
      <h1>Student Attendence Management System</h1>
      <br />

      {/* Student Form Start */}
      <div className="student-form">
        <StudentForm
          studentName={studentName}
          setStudentName={setStudentName}
          editingMode={editingMode}
          setEditingMode={setEditingMode}
          editAbleStudent={editAbleStudent}
          allStudents={allStudents}
          setAllStudents={setAllStudents}
        />
      </div>
      {/* Student Form End */}

      <br />

      {/* Student Details Section Start */}
      <div className="student-details">

        {/* All Students Section Start */}
        <div className="all-students">
          <StudentLists
            caption="All Students"
            Students={allStudents}
            setAllStudents={setAllStudents}
            setEditingMode={setEditingMode}
            setStudentName={setStudentName}
            setEditAbleStudent={setEditAbleStudent}
            allStudentsTable={true}
          />
        </div>
        {/* All Students Section End */}

        <br />

        {/* Present Students Section Start */}
        <div className="present-students">
          <StudentLists
            caption="Present Students"
            Students={presentStudents}
            allStudents={allStudents}
            setAllStudents={setAllStudents}
          />
        </div>
        {/* Present Students Section End */}

        <br />

        {/* Absent Students Section Start */}
        <div className="absent-students">
          <StudentLists
            caption="Absent Students"
            Students={absentStudents}
            allStudents={allStudents}
            setAllStudents={setAllStudents}
          />
        </div>
        {/* Absent Students Section End */}
      </div>
      {/* Student Details Section End */}
    </div>
  );
};

export default StudentAttendance;
