import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/joblisting', {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem('token')} `
                    }
                });
                setJobs(response.data.jobs);
            } catch (err) {
                console.log(err);
            }
        };

        fetchJobs();
    }, []);
    return (
        <div >
        <h1 class=' 
        text-5xl font-bold text-black pt-10 text-center
        '>Job Listings</h1>
        {jobs.length > 0 ? (
            <ul class=" w-full mx-auto  flex flex-cols items-center gap-10">
                {jobs.map((job) => (
                    <li key={job._id} class="p-6 text-4xl w-1/4 mx-auto bg-white rounded-xl shadow-lg ">
                        <h2>{job.jobName}</h2>
                        <div class="text-4xl font-bold text-black">

                        <p  class="text-xl font-medium text-black">By :{job.company}</p>
                        </div>
                        <div class="text-4xl font-bold text-black">

                        <p class="text-xl font-medium text-black">Description: {job.jobDescription}</p>
                        <Link to='/ApplicationForm'>Apply Now</Link>
                        </div>
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
