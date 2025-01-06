import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import UserContextState from './context/UserContext'
import JobForm from './pages/JobForm';
import EmployerDashboard from './pages/EmployerDashboard';
import ApplicantsList from './pages/ApplicantsList'
import ApplicantsProfile from './pages/ApplicantsProfile'
import JobList from './pages/JobList'
import ApplicationForm from './pages/ApplicationForm'
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
        <Route path='/jobslisting' element={<JobList/>}/>
        <Route path='/ApplicantsList' element={<ApplicantsList/>}/>
        <Route path='/ApplicantsProfile' element={<ApplicantsProfile/>}/>
        <Route path='/ApplicationForm' element={<ApplicationForm/>}/>

      </Routes>
       </UserContextState>
    </BrowserRouter>
  )
}

export default App
