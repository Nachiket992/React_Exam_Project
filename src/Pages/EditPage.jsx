import React, { useEffect, useState } from 'react'
import "./AddPage.css"
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { EditStudents } from '../Feature/allStudentsSlice'

const EditPage = () => {
  const dispatch = useDispatch()
  const loc = useLocation()

  const [input, setInput] = useState({
 
    name: '',
    surname: '',
    standard: '',
    email: ''
  })

  useEffect(() => {
    
      setInput(loc.state)
    
  }, [loc.state]) 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
    dispatch(EditStudents(input))

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <h1>Edit Page</h1>

      <div className="form-box" id="form">
        <h2>Student Edit</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={input.name}
            required
          />

          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            onChange={handleChange}
            value={input.surname}
            required
          />

          <label htmlFor="standard">Standard</label>
          <input
            type="text"
            id="standard"
            name="standard"
            onChange={handleChange}
            value={input.standard}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={input.email}
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default EditPage
