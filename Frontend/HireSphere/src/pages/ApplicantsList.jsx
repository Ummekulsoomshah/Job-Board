import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const ApplicantsList = () => {
  const { jobId } = useParams()
  console.log("jobId",jobId)
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/applicantList/${jobId}`, {
          headers: {
            "authorization": `Bearer ${localStorage.getItem('token')} `
          },
          withCredentials: true
        });
        setApplicants(response.data.applicants);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApplicants();
  }, [jobId]);
  return (
    <>
    {applicants.length>0?(
      <div class="mt-6 p-6 w-50 mx-auto bg-white rounded-xl shadow-lg  flex  items-center gap-4">
      <div class="text-4xl w-1/2 items-center font-bold text-black">
        <p class="text-xl font-medium text-black">Web Developer</p>
        <Link to='/ApplicantsProfile'><h2>5 Applicants</h2></Link>
      </div>
    </div>
    ):(
      <h1>No applicanta</h1>
    )}
    </>
  )
}

export default ApplicantsList
