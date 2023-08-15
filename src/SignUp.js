import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import logo from './pngwing.com (1).png'
const SignUp = () => {

    const[name,setname] = useState();
    const[email,setemail] = useState();
    const[password,setpassword] = useState();

    const navigate = useNavigate()

    function handleSubmit(e){
            e.preventDefault();
            console.log(name,email,password)

            axios.post('https://authentication-97er.onrender.com/register',{name,email,password})
            .then(result => console.log(result))
            .catch(err => console.log(err))

            window.alert('Registered sucessfully login now')
            navigate('/login')
    }
  return (
    <div className='d-flex bg-secondary justify-content-center align-items-center  vh-100'>
        <div className='card d-flex  bg-white p-5 rounded w-20'>
        <div className='icon'>
            <img className='cam' src={logo} alt="" />
        <h3>Register</h3>
        </div>
            <form onSubmit={handleSubmit} className='mb-3 '>
                <input value={name} onChange={(e)=> setname(e.target.value)} className='mb-4' type="text" placeholder='Enter Your Name'/><br></br>
                <input value={email} onChange={(e)=> setemail(e.target.value)} className='mb-4' type="text" placeholder='Enter Your email ID'/><br></br>
                <input value={password} onChange={(e)=>setpassword(e.target.value)} className='mb-4' type="text" placeholder='Enter Your Password' />
                <br></br>
                <button type='submit' className=' mb-3 btn btn-primary'>Register </button>
                <br />
                
            </form>
            <Link to='/login'>
                <button type='submit' className='btn btn-success'>Login</button>
            </Link>
        </div>
    </div>
  )
}

export default SignUp