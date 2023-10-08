import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const CreateUser = () => {
    const [name, setname] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
 
    const navigate = useNavigate();
    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser/', { name, email, age })
            .then(res => {
                console.log(res)
                navigate(`/`)
              
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primry justify-content-center align-item-center'>
            <div className='w-50 bg-white rounded p-3'>

                <form onSubmit={Submit}>
                    <h2> Add User </h2>

                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text'
                            placeholder='Enter Name'
                            className='form-control'
                            onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='text'
                            placeholder='Enter Email'
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type='text'
                            placeholder='Enter Age'
                            className='form-control'
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div> </div>
    )
}
