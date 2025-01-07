import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
const EmployerDashboard = () => {
    
    return (
        <>
        <div class="p-6 w-50 mx-auto bg-white rounded-xl shadow-lg  flex  items-center gap-4">
            <div class="text-4xl font-bold text-black">
                <Link to='/jobForm' class="text-xl font-medium text-black">Create Job</Link>
            </div>
            <div class="text-4xl font-bold text-black">
                <Link to='/jobslisting' class="text-xl font-medium text-black">See Applicants</Link>
            </div>
        </div>
        <h1 className="text-5xl font-bold text-black pt-10 text-center">Dear Employer ,Welcome</h1>
        <h4 className='text-center'>Hire and Hire</h4>
        </>

    )
}

export default EmployerDashboard
