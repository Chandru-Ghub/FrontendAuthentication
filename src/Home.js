import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate() 
  axios.defaults.withCredentials = true
  useEffect(()=>{
      axios.get('https://authentication-97er.onrender.com/home')
      .then(result => {console.log(result)
            if(result.data !== 'Success'){
              navigate('/login')
            }
      }).catch(err=>console.log(err))
  },[])
  return (
    
    <div>
       <ul style={{backgroundColor:'pink',display:'flex',}}>
            <h1>Instagram</h1>
            <Link to='/'>
                <li style={{color:'blue'}} className='signin'>Logout</li>
            </Link>
            
        </ul>
    </div>
  )
}

export default Home