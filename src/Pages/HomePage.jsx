import React, { useEffect } from 'react'
import './HomePage.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { DeletStudents, fetchStudents } from '../Feature/allStudentsSlice'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { students } = useSelector((state) => state.students)

  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])

  const deleteData = (stu) => {
    dispatch(DeletStudents(stu))
    
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <h1 className="page-title">Home Page</h1>

      <div className="garden">
        <div className="container">
          <div className="header">
            <h2>Student Records</h2>
            <button className="add-btn" onClick={() => navigate('/Add')}>+ Add New</button>
          </div>

          <div className="card-container">
            {(Array.isArray(students) ?students :[])
            .map((student, index) => (
              <div className="card" key={index}>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Surname:</strong> {student.surname}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Standard:</strong> {student.standard}</p>

                <div className="card-buttons">
                  <button className="edit-btn" onClick={() => navigate('/Edit', { state: student })}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteData(student.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
