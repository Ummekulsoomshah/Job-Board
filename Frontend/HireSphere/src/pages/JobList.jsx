import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const JobList = () => {
    const [jobs, setJobs] = useState([]);
const [role,setrole]=useState('')
const navigate=useNavigate()
    useEffect(() => {
        const fetchJobs = async () => {
            try 
            {
                const response = await axios.get('http://localhost:3000/user/joblisting', {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem('token')} `
                    }
                });
                setJobs(response.data.jobs);
                setrole(response.data.role)
            } catch (err) {
                console.log(err);
            }
        };

        fetchJobs();
    }, []);
    const handleApply = (jobId) => {
        // Navigate to the application form or handle the apply action
        // navigate(`/apply/${jobId}`);
        navigate(`/ApplicationForm/${jobId}`)
    };

    const handleSeeApplicants = (jobId) => {
        // Navigate to the applicants list or handle the see applicants action
        // navigate(`/applicants/${jobId}`);
        navigate(`/ApplicantsList/${jobId}`)
    };
    return (
        <div >
        <h1 class=' 
        text-5xl font-bold text-black pt-10 text-center
        '>Job Listings</h1>
        {jobs.length > 0 ? (
            <ul className="w-full mx-auto flex flex-col items-center gap-10">
                {jobs.map((job) => (
                    <li key={job._id} className="p-6 ml-6 text-4xl w-full mx-auto bg-white rounded-xl shadow-lg">
                        <h2>{job.jobName}</h2>
                        <div class="text-4xl font-bold text-black">

                        <p  class="text-xl font-medium text-black">By :{job.company}</p>
                        </div>
                        {role === 'job_seeker' && (
                                <button
                                    className="mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg"
                                    onClick={() => handleApply(job._id)}
                                >
                                    Apply Now
                                </button>
                            )}
                            {role === 'employer' && (
                                <button
                                    className="mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg"
                                    onClick={() => handleSeeApplicants(job._id)}
                                >
                                    See Applicants
                                </button>
                            )}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No jobs available</p>
        )}
    </div>
    )
}

export default JobList
