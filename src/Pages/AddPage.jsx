import React, { useState } from 'react'
import "./AddPage.css"
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useDispatch } from 'react-redux'
import { AddStudents } from '../Feature/allStudentsSlice'
import { useNavigate } from 'react-router-dom'

const AddPage = () => {
  const dispatch=useDispatch()
  const nav=useNavigate()
  const [input,setinput]=useState({
    
    name:'',
    surname:'',
    standard:'',
    email:''

  })
 const  handlesubmit= async(e)=>{
e.preventDefault()
console.log(input);
 await dispatch(AddStudents(input))
nav('/Home')

 }
 const handlechange=(e)=>{
const name=e.target.name
const value=e.target.value

setinput((pre)=>({...pre, [name] : value}))
 }

  return (
    <>
      
        <Navbar/>
        <Sidebar/>
        <h1>Add Page</h1>
        
<div className="form-box" id="form">
  <h2>Student Registration</h2>
  <form onSubmit={handlesubmit}>
    <label>First Name</label>
    <input type="text" id="name" name="name" value={input.name}  onChange={handlechange} required />
    <label >Surname</label>
    <input type="text" id="surname" name="surname" value={input.surname} onChange={handlechange}  required />
    <label >Standard</label>
    <input type="text" id="standard" name="standard" value={input.standard} onChange={handlechange}  required />
    <label>Email</label>
    <input type="email" id="email" name="email" value={input.email}  onChange={handlechange} required />
    <input type="submit" defaultValue="Submit" />
  </form>
</div>


    </>
  )
}

export default AddPage
