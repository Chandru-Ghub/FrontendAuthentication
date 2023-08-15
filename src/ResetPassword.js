import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const ResetPassword = () => {

    const[password,setpassword] = useState();
    const[mail,setmail]  = useState()
    const[pass,setpass]  = useState()

    const navigate = useNavigate()


    
    const {id , token } = useParams()
    function handleSubmit(e){
            e.preventDefault();
            console.log(token)
            axios.post(`https://authentication-97er.onrender.com/reset-password/${id}/${token}`,{password})
            .then(result=>{console.log(result,id,token)
                if(result.data.Status == 'Success'){
                   alert('Password changed successfully')
                    navigate('/login')
                    }

            })
            .catch(err => console.log(err))
       
   }
  return (
    <div className='d-flex bg-secondary justify-content-center align-items-center  vh-100'>
    
        <div className='card d-flex  bg-white p-4 rounded w-20'>
        <h5 style={{color:'green'}}>Reset Password !</h5>
            <form onSubmit={handleSubmit} className='mb-3 '>
                <input  value={password} onChange={(e)=> setpassword(e.target.value)} className='mb-1' type="text" placeholder='Enter new password'/>
                <p style={{color:'red',fontSize:'14px'}}>{mail}</p>
            
                <button type='submit' className='btn btn-primary'>update</button>
              
               
            </form>
        </div>
    </div>
  )
}

export default ResetPassword