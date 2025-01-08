import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const ApplicantsList = () => {
  const { jobId } = useParams()
  console.log("jobId", jobId)
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
        console.log("error", err);
      }
    };

    fetchApplicants();
  }, [jobId]);
  return (
    <>
      {applicants.length > 0 ? (
        <ul className="w-full mx-auto flex flex-col items-center gap-10">
          {applicants.map((applicant) => (
            <li key={applicant._id} className="p-6 text-4xl w-1/2 mx-auto bg-white rounded-xl shadow-lg">
              <h2>{applicant.name}</h2>
              <div className="text-4xl font-bold text-black">
                <p className="text-xl font-medium text-black">Email: {applicant.email}</p>
              </div>
              <div className="text-4xl font-bold text-black">
                <p className="text-xl font-medium text-black">Skills: {applicant.skills}</p>
              </div>
              <div className="text-4xl font-bold text-black">
                <a href={`http://localhost:3000/${applicant.resume}`} className="text-xl font-medium text-blue-500" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div class="bg-gray-100">
        <div class="h-screen flex flex-col justify-center items-center">
            <p class="text-4xl font-medium text-gray-800">No Applicants Found</p>
            <Link to="/jobslisting" class="mt-4 text-xl text-blue-600 hover:underline">Go back home</Link>
        </div>
    </div>
      )}
    </>
  )
}

export default ApplicantsList
