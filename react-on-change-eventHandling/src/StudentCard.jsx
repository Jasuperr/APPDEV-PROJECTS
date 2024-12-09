// src/StudentCard.jsx
export default function StudentCard(props) {
    const students = props.students;
  
    return (
      <div className="student-cards">
        {students.length > 0 ? (
          students.map((student, index) => (
            <div key={index} className="student-card">
              <h4>Student ID: {student.id}</h4>
              <p>Name: {student.name}</p>
              <p>Course: {student.course}</p>
              <p>Age: {student.age}</p>
              <p>Gender: {student.gender}</p>
              <p>Date: {student.date}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No students added yet.</p>
        )}
      </div>
    );
  }
  