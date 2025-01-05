import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setuser } = useContext(UserDataContext)
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    const userData = {
      password: password,
      email: email,
    }
    try {
      const response = await axios.post(`http://localhost:3000/user/login`, userData)
      console.log('response', response)
      if (response.status === 200) {
        const data = response.data
        console.log(data)
        setuser(data.user)
        localStorage.setItem('token', data.token)
        if (data.user.role === 'employer') {
          navigate('/employeeDash');
        } else if (data.user.role === 'job_seeker') {
          navigate('/jobslisting');
        }
      }
    } catch (error) {
      console.log('error', error)
    }
    setEmail('')
    setPassword('')
  }
  return (
    < div className='flex justify-center content-center'>

      <div className='p-7 w-1/2 flex flex-col justify-between'>
        <img className='w-16 ml-1 mb-5' alt="" />

        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-xl mb-2'>Enter your email address</h3>
          <input
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
            placeholder='user@gmail.com'
            type="email" />
          <h3>Enter your password</h3>
          <input
            required
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'
            placeholder='User123@'
            type="text" />
          <button
            className='mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg'
          >LOGIN</button>
          <p>New here?<Link to='/register' className='text-blue-600'>Create new Account</Link></p>
        </form>
        {/* <div>
        <Link to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center rounded mt-5 px-10 py-2 border w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
      </div> */}
      </div>
    </div>
  )
}

export default UserLogin
