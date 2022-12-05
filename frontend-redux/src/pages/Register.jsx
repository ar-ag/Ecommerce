import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'

import React from 'react'

function Register() {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name, email, password, password2} = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(password !== password2) {
            toast.error('password do not match');
        } else {
            const userData = {
                name,
                email,
                password,
            }
            dispatch(register(userData))
        }

    }


  return (
    <>
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
                <form onSubmit={onSubmit}>

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please register yourself!</p>

              <div className="form-outline form-white mb-4">
                
              <input type='text' className='form-control' id='name' name='name' value={name} 
                    placeholder='Enter your name' onChange={onChange} />
                
              </div>

              <div className="form-outline form-white mb-4">
                
              <input type='text' className='form-control' id='email' name='email' value={email} 
                    placeholder='Enter your email' onChange={onChange} />
                
              </div>

              <div className="form-outline form-white mb-4">
                
              
                <input type='password' className='form-control' id='password' name='password' value={password} 
                placeholder='Enter your password' onChange={onChange} />
            
        
                
              </div>

              <div className="form-outline form-white mb-4">
                
              
                
                <input type='password' className='form-control' id='password2' name='password2' value={password2} 
                placeholder='Confirm password' onChange={onChange} />
            
       
                
              </div>

              

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>
                </form>
              

            </div>

            

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
    </>
  )
}

export default Register