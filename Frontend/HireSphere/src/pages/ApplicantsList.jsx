import React from 'react'
import { Link } from 'react-router-dom'
const ApplicantsList = () => {
  return (
    <>
      <div class="mt-6 p-6 w-50 mx-auto bg-white rounded-xl shadow-lg  flex  items-center gap-4">
        <div class="text-4xl w-1/2 items-center font-bold text-black">
          <p class="text-xl font-medium text-black">Web Developer</p>
          <Link to='/ApplicantsProfile'><h2>5 Applicants</h2></Link>
        </div>
      </div>
      <div class="mt-6 p-6 w-50 mx-auto bg-white rounded-xl shadow-lg  flex  items-center gap-4">
        <div class="text-4xl w-1/2 items-center font-bold text-black">
          <p class="text-xl font-medium text-black">Data Scientist</p>
          <Link to='/ApplicantsProfile'><h2>2 Applicants</h2></Link>
        </div>
      </div>
    </>
  )
}

export default ApplicantsList
