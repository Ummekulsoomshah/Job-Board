import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import UserContextState from './context/UserContext'
import JobForm from './pages/JobForm';
import EmployerDashboard from './pages/EmployerDashboard';
const App = () => {
  return (
    <BrowserRouter>
       <UserContextState>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userRegister' element={<UserRegister/>}/>
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/employeeDash' element={<EmployerDashboard/>} />
        <Route path='/jobForm' element={<JobForm/>} />
      </Routes>
       </UserContextState>
    </BrowserRouter>
  )
}

export default App
