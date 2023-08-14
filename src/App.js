
import { useState } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import view from './View'
import Forgot from './Forgot'
import ResetPassword from './ResetPassword'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
              <BrowserRouter>
              <Routes>
                <Route path='/signup' Component={SignUp} />
                <Route path='/login' Component={Login} />
                <Route path='/home' Component={Home} />
                <Route path='/' Component={view} />
                <Route path='/forgot' Component={Forgot} />
                <Route path='/reset_password/:id/:token' Component={ResetPassword} />
              </Routes>
            </BrowserRouter>
        
   </div>
  )
}

export default App