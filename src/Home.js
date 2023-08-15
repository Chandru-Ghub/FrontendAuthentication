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
            //   navigate('/login')
            }
      }).catch(err=>console.log(err))
  },[])
  return (
    
    <div className='main'>
      <div className='content'>
       <ul className='nav'>
       <img className='sg' src="https://www.shutterstock.com/image-vector/zdolbuniv-ukraine-march-29-2023-260nw-2281736183.jpg" alt="" />
            <Link to='/'>
                <li className='bns'>Logout</li>
            </Link>
            
        </ul>
        <div className='posts'>

            <img className='pics' src="https://blog.hootsuite.com/wp-content/uploads/2022/06/Instagram-Apps-Cover-Photo-556x556.png" alt="post1" />
            <img className='pics' src="https://blog.hootsuite.com/wp-content/uploads/2022/07/instagram-bio-ideas-business-556x556.png" alt="post2" />
            <img className='pics' src="https://blog.hootsuite.com/wp-content/uploads/2022/04/instagram-video-556x556.png" alt="post3" />
         
        </div>
        </div>
    </div>
  )
}

export default Home