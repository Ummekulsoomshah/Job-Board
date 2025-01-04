import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const JobForm = () => {
    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')
    const navigate=useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault()
        const jobData = {
            position: position,
            company: company,
            description: description
        }
        try {
            console.log('before')
            const response = await axios.post(`http://localhost:3000/jobformcreation`, jobData);

            console.log('response', response)
            if (response.status === 201) {
                const data = response.data
                console.log(data)
            }
        }
        catch (error) {
            console.log('error', error)
        }
        setPosition('')
        setCompany('')
        setDescription('')
    }
    return (
        <div className='p-7 w-3/4 flex flex-col justify-between h-screen'>

            <form onSubmit={(e) => { submitHandler(e) }}>
                <h3 className='text-xl mb-2'>Enter Position Name</h3>
                <div className='flex gap-4'>

                    <input
                        required
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                        placeholder='abc developer'
                        type="text" />
                </div>
                <h3 className='text-xl mb-2'>Enter Company hiring</h3>
                <input
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                    placeholder='abc pvt ltd'
                    type="text" />
                <h3>Enter your Job description</h3>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'
                    placeholder='candidate should be capable of ...' type="text" ></textarea>
                {/* <h3>Select your role</h3> */}
                {/* <select
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'>
            <option value="" disabled selected>Select your role</option>
            <option value="job_seeker">Job Seeker</option>
            <option value="employer">Employer</option>
        </select> */}
                <button
                    className='mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg'
                >Create Job</button>
            </form>
        </div>
    )
}

export default JobForm
