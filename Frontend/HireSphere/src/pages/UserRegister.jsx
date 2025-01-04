import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserRegister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const { user, setuser } = useContext(UserDataContext)
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault()
        const newuserData = {
            name: name,
            email: email,
            password: password,
            role: role
        }
        try {
            console.log('before')
            const response = await axios.post(`http://localhost:3000/user/register`, newuserData);

            console.log('response', response)
            if (response.status === 201) {
                const data = response.data
                console.log(data)
                setuser(data.user)
                localStorage.setItem('token', data.token)

                navigate('/employeeDash')
            }
        }
        catch (error) {
            console.log('error', error)
        }



        console.log("name", name)
        console.log("email", email)
        console.log("password", password)
        console.log("role", role)

        setName('')
        setEmail('')
        setPassword('')
        setRole('')
    }
    return (
        <div className='flex justify-center content-center'>
            <div className='p-7 w-1/2 flex flex-col justify-between h-screen'>
                {/* <img className='w-16 ml-1 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" /> */}

                <form onSubmit={(e) => { submitHandler(e) }}>
                    <h3 className='text-xl mb-2'>Enter your Full name</h3>
                    <div className='flex gap-4'>

                        <input
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                            placeholder='firstname'
                            type="text" />
                    </div>
                    <h3 className='text-xl mb-2'>Enter your email address</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                        placeholder='user@gmail.com'
                        type="email" />
                    <h3>Enter your password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'
                        placeholder='user123@' type="text" />
                    <h3>Select your role</h3>
                    <select
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'>
                        <option value="" disabled selected>Select your role</option>
                        <option value="job_seeker">Job Seeker</option>
                        <option value="employer">Employer</option>
                    </select>
                    <button
                        className='mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg'
                    >REGISTER</button>
                    <p>Already have an Account?<Link to='/login' className='text-blue-600'>Sign in here</Link></p>
                </form>
                {/* <div>
                    <Link to='/captain-register'
                        className='bg-[#10b461] flex items-center justify-center rounded mt-5 px-10 py-2 border w-full text-lg placeholder:text-base'
                    >Register as a Captain</Link>
                </div> */}
            </div>
        </div>
    )
}

export default UserRegister
