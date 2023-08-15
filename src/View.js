import React from 'react'
import { Link } from 'react-router-dom'

const view = () => {
  return (
    <div className='view'>
        <div className='box'>
              <img className='lg' src="https://www.shutterstock.com/image-vector/zdolbuniv-ukraine-march-29-2023-260nw-2281736183.jpg" alt="" />
                      <div className='clicks'>
                        <p className='bn'>
                        <Link to='/signup'>
                            SignupNew?
                        </Link>
                        </p>
                        <p className='bn'>
                        <Link to='/login'>
                            Signin
                        </Link>
                        </p>
                      </div>
              </div>
    </div>
  )
}

export default view