import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Forgot = () => {

    const[email,setemail] = useState();
    const[mail,setmail]  = useState()
    const[pass,setpass]  = useState()

    const navigate = useNavigate()

    function handleSubmit(e){
            e.preventDefault();
            console.log(email)
            axios.post('https://authentication-97er.onrender.com/forgot-password',{email})
            .then(result=>{console.log(result)
                if(result.data == 'Success'){
                   alert('check your mail for password reset')
                
                    }
                    
           
              

            
            })
            .catch(err => console.log(err))
       
    }
  return (
    <div className='d-flex bg-secondary justify-content-center align-items-center  vh-100'>
    
        <div className='card d-flex  bg-white p-4 rounded w-20'>
        <h5 style={{color:'green'}}>Forgot Password !</h5>
            <form onSubmit={handleSubmit} className='mb-3 '>
                <input  value={email} onChange={(e)=> setemail(e.target.value)} className='mb-1' type="email" required placeholder='Enter Your email ID'/>
                <p style={{color:'red',fontSize:'14px'}}>{mail}</p>
                <button type='submit' className='btns '><h6>Send mail</h6></button>
               
            </form>
        </div>
    </div>
  )
}

export default Forgot