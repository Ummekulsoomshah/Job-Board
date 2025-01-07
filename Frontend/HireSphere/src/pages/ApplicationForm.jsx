import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ApplicationForm = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [skills, setskills] = useState()
    const [resume, setresume] = useState(null)
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("skills", skills);
    formData.append("resume", resume); // Append the resume file
        try {
            const response = await axios.post(`http://localhost:3000/user/JobApplysubmit`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Specify content type
                    "authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
            )
            console.log('response', response)
            if (response.status === 200) {
                const data = response.data
                console.log(data)
                //   setuser(data.user)
                localStorage.getItem('token')
                //   if (data.user.role === 'employer') {
                //     navigate('/employeeDash');
                //   } else if (data.user.role === 'job_seeker') {
                //     navigate('/jobslisting');
                //   }
                navigate('/jobslisting')
            }
        } catch (error) {
            console.log('error', error)
        }
        setname("")
        setemail("")
        setskills("")
        setresume(null)
        document.getElementById('resumeInput').value = '';
    }

    return (
        <div className='p-7 w-3/4 flex flex-col justify-between h-screen'>

            <form onSubmit={(e) => { submitHandler(e) }}>
                <h3 className='text-xl mb-2'>Enter your Name</h3>
                <div className='flex gap-4'>

                    <input
                        required
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                        className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                        placeholder='abc developer'
                        type="text" />
                </div>
                <h3 className='text-xl mb-2'>Enter your Email</h3>
                <div className='flex gap-4'>

                    <input
                        required
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                        className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                        placeholder='abc developer'
                        type="email" />
                </div>
                <h3 className='text-xl mb-2'>Enter skills</h3>
                <input
                    required
                    value={skills}
                    onChange={(e) => { setskills(e.target.value) }}
                    className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                    placeholder='abc pvt ltd'
                    type="text" />
                <h3>Upload your resume</h3>
                <input
                    required
                    // value={resume}
                    onChange={(e) => { setresume(e.target.files[0]) }}
                    id='resumeInput'
                    className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'
                    placeholder='candidate should be capable of ...' type="file" ></input>

                <button
                    className='mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg'
                >Submit your application</button>
            </form>
        </div>
    )
}

export default ApplicationForm
