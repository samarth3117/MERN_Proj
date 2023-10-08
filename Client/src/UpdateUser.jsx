import { useNavigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

export const UpdateUser = () => {

    const { id } = useParams()
    const [name, setname] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const nevigate = useNavigate();

const Update = (e)=>{
    e.preventDefault();
        axios.put('http://localhost:3001/updateUser/'+id, { name, email, age })
            .then(res => {
                console.log(res)
                nevigate(`/`)
            })
            .catch(err => console.log(err))
}

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                setname(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='d-flex vh-100 bg-primry justify-content-center align-item-center'>
            <div className='w-50 bg-white rounded p-3'>

                <form onSubmit={Update}>
                    <h2> Update User </h2>

                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text'
                        placeholder='Enter Name'
                        className='form-control'
                        value={name}
                        onChange={(e) => setname(e.target.value)} />

                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='text'
                         placeholder='Enter Email'
                         className='form-control'
                         value={email}
                         onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type='text'
                         placeholder='Enter Age'
                         className='form-control'
                         value={age}
                         onChange={(e) => setAge(e.target.value)} />

                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div> </div>
    )
}
