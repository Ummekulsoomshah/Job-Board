import React from 'react'

const ApplicationForm = () => {
    return (
        <div className='p-7 w-3/4 flex flex-col justify-between h-screen'>

            <form onSubmit={(e) => { submitHandler(e) }}>
                <h3 className='text-xl mb-2'>Enter your Name</h3>
                <div className='flex gap-4'>

                    <input
                        required
                        className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                        placeholder='abc developer'
                        type="text" />
                </div>
                <h3 className='text-xl mb-2'>Enter skills</h3>
                <input
                    required
                    className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
                    placeholder='abc pvt ltd'
                    type="text" />
                <h3>Upload your resume</h3>
                <input
                    required
                    className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'
                    placeholder='candidate should be capable of ...' type="file" ></input>
            
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
                >Submit your application</button>
            </form>
        </div>
    )
}

export default ApplicationForm
