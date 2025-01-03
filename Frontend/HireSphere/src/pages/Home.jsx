import React from 'react'
import './home.css'
import img1 from '../assets/campaign-creators-qCi_MzVODoU-unsplash.jpg'
import img2 from '../assets/clem-onojeghuo-fY8Jr4iuPQM-unsplash.jpg'
const Home = () => {
    return (
        <>
        <div class="p-6 w-50 mx-auto bg-white rounded-xl shadow-lg  flex  items-center gap-4">
            <div class="text-4xl font-bold text-black">
                <button class="text-xl font-medium text-black">SIGN UP</button>
            </div>
            <div class="text-4xl font-bold text-black">
                <button class="text-xl font-medium text-black">LOGIN</button>
            </div>
        </div>
        <h1 className="text-5xl font-bold text-black pt-10 text-center">Welcome to Job Board</h1>
        <h4 className='text-center'>Hire or get hired</h4>
        <div className="flex justify-center gap-10 pt-10">
                <img src={img1} alt="Picture 1 " className="w-1/4 h-auto" />
                <img src={img2} alt="Picture 2" className="w-1/4 h-auto" />
            </div>
        </>

    )
}

export default Home
