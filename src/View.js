import React from 'react'
import { Link } from 'react-router-dom'

const view = () => {
  return (
    <div>
        <ul style={{backgroundColor:'pink',display:'flex',}}>
            <li>Instagram</li>
            <Link to='/signup'>
                <li className='signin'>Sign in?</li>
            </Link>
            <Link to='/login'>
                <li className='signin'>Login</li>
            </Link>
        </ul>
    </div>
  )
}

export default view