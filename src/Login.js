import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './pngwing.com (1).png'
const Login = () => {

    const[email,setemail] = useState();
    const[password,setpassword] = useState();
    const[mail,setmail]  = useState()
    const[pass,setpass]  = useState()

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    function handleSubmit(e){
            e.preventDefault();
            console.log(email,password)
            axios.post('https://authentication-97er.onrender.com/verify',{email,password})
            .then(result=>{console.log(result)

                setmail('')
                setpass('')
                if(result.data == 'Success'){
                   
                    setpass('')
                    setTimeout(() => {
                        navigate('/home')
                    }, 2000);
                    }
                    
                
                else if(result.data == 'user Not Found'){
                    setmail('No record Found')
                }
                else if(result.data == 'Incorrect Password'){
                    setpass('invalid Password')
                }
              

            
            })
            .catch(err => console.log(err))
       
    }
  return (
    <div className='d-flex bg-secondary justify-content-center align-items-center  vh-100'>
    
        <div className='card d-flex  bg-white p-5 rounded w-20'>
            <div className='icon'>
            <img className='cam' src={logo} alt="" />
        <h3>LOGIN</h3>
        </div>
            <form onSubmit={handleSubmit} className='mb-3 '>
                <input  value={email} onChange={(e)=> setemail(e.target.value)} className='mb-4' type="email" required placeholder='Enter Your email ID'/>
                <p style={{color:'red',fontSize:'14px'}}>{mail}</p>
                <input value={password} onChange={(e)=>setpassword(e.target.value)} className='mb-4' type="password" required placeholder='Enter Your Password' />
                
                <p style={{color:'red',fontSize:'14px'}}>{pass}</p>
                
                <button type='submit' className='btns'> <h5>Login </h5></button><br></br>
                <Link to = '/forgot'  ><span >Forgot Password?</span></Link>
               
            </form>
        </div>
    </div>
  )
}

export default Login