import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
        <h3>LOGIN</h3>
            <form onSubmit={handleSubmit} className='mb-3 '>
                <input value={email} onChange={(e)=> setemail(e.target.value)} className='mb-4' type="text" placeholder='Enter Your email ID'/>
                <p style={{color:'red',fontSize:'14px'}}>{mail}</p>
                <input value={password} onChange={(e)=>setpassword(e.target.value)} className='mb-4' type="text" placeholder='Enter Your Password' />
                
                <p style={{color:'red',fontSize:'14px'}}>{pass}</p>
                <Link to = '/forgot'  ><span style={{color:'green'}}>Forgot Password?</span></Link><br></br>
                <button type='submit' className='btn btn-primary'>Login</button>
               
            </form>
        </div>
    </div>
  )
}

export default Login