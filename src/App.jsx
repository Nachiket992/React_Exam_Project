import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import LogInPage from './Pages/LogInPage'
import EditPage from './Pages/EditPage'
import HomePage from './Pages/HomePage'
import AddPage from './Pages/AddPage'

function App() { 

  return (
    <>

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<SignUpPage/>} />
          <Route path='/Login' element={<LogInPage/>} />
          <Route path='/Edit' element={<EditPage/>} />
          <Route path='/Home' element={<HomePage/>} />
          <Route path='/Add' element={<AddPage/>} />


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
