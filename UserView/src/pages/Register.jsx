import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")

    const registerUser = (e) => {
        e.preventDefault()
        console.log(name, email, password, image)
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={(e) => {
                registerUser(e);
            }} action="" className='w-125 font-mono shadow-sm space-y-4 mt-20 shadow-black'>
                <div>
                    <label htmlFor="userName">
                        Name: <br />
                        <input type="text" placeholder='Enter Name...' id='userName' />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email:
                        <br />
                        <input className='border outline-none' type="email" placeholder='Enter email...' id='email' />

                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
                        <br />
                        <input className='border outline-none' type="password" placeholder='Enter Password...' id='password' /><br />
                    </label>
                </div>
                <div>
                    <label htmlFor="userImage">
                        Image:
                        <input className='border outline-none' type="file" placeholder='Select image...' id='userImage' />
                        <br />
                    </label>
                </div>
                <button className='bg-orange-500 text-white w-full'>Register</button>
            </form>
        </div>
    )
}

export default Register
