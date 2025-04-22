import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents } from './Feature/allStudentsSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import LogInPage from './Pages/LogInPage'
import EditPage from './Pages/EditPage'
import HomePage from './Pages/HomePage'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchStudents())
  },[])

  const students = useSelector((state)=> state.students.students)

  console.log(students);
  

  return (
    <>

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<SignUpPage/>} />
          <Route path='/Login' element={<LogInPage/>} />
          <Route path='/Edit' element={<EditPage/>} />
          <Route path='/Home' element={<HomePage/>} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
