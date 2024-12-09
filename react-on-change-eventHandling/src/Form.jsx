// src/Form.jsx
import React, { useState } from 'react';
import StudentCard from './StudentCard';

export default function Form() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [attendance, setAttendance] = useState([]);

  const handleIdChange = (event) => setId(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleCourseChange = (event) => setCourse(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  const addAttendance = () => {
    const newAttendance = {
      id,
      name,
      course,
      age,
      gender,
      date
    };
    setAttendance([...attendance, newAttendance]);

    // Reset form fields
    setId('');
    setName('');
    setCourse('');
    setAge('');
    setGender('');
    setDate('');
  };

  return (
    <div className="form-container">
      <h4>Student Attendance Information Form:</h4>
      <div>
        <label>ID Number:</label>
        <input type="text" value={id} onChange={handleIdChange} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Course:</label>
        <input type="text" value={course} onChange={handleCourseChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>Male:</label>
        <input type="radio" value="Male" checked={gender === "Male"} onChange={handleGenderChange} />
        <label>Female:</label>
        <input type="radio" value="Female" checked={gender === "Female"} onChange={handleGenderChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={handleDateChange} />
      </div>
      <button onClick={addAttendance}>Submit</button>

      <div className="student-preview">
        <h2>Student to be added:</h2>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Date:</strong> {date}</p>
      </div>

      <StudentCard students={attendance} />
    </div>
  );
}
