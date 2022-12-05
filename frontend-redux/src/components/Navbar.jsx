import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

import React from 'react'


const navstyle = {
    background:"#100c08",
    color:"#ffffff"
}
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#F4ECF7'
  };

  const buttonStyle = {
    marginRight:"10rem",
    color:'red'
  };

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }


  return (
    <>

    <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={navstyle}>
  <a className="navbar-brand" href="/" style={{color:'#FFE5B4'}}>NFT Paintings</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    {
        user?(
            <>
                <li className="nav-item active">
                    <span className="nav-link" > <Link to = '/' style={linkStyle}>Home</Link> </span>
                </li>
                <li className="nav-item">
                    <span className="nav-link"> <Link to = '/cart' style={linkStyle}>Cart</Link></span>
                </li>
                <li className="nav-item float-right">
                 <button className='btn' onClick={onLogout} style={buttonStyle}>
                    <FaSignOutAlt />Logout
                </button>
                </li>
            </>
        ) : (
            <>
            <li className="nav-item active">
                    
                    <span className="nav-link" > <Link to = '/login' style={linkStyle}><FaSignInAlt />Login</Link> </span>
                </li>
                <li className="nav-item">
                    
                    <span className="nav-link" > <Link to = '/register' style={linkStyle}><FaUser />Register</Link> </span>
                </li>
                
            </>
        )
    }
      
      
    </ul>
  </div>
</nav>
    {/* <header className='header'>
        <div className='logo'>
            <Link to = '/'>Ecommerce</Link>
        </div>
        
        
            {
                user ? (
                    <>
                        <div className='logo'>
                            <Link to = '/cart'>Cart</Link>
                        </div>
                        <ul>
                            <li>
                                <button className='btn' onClick={onLogout}>
                                    <FaSignOutAlt />Logout
                                </button>
                            </li>
                        </ul>
                    </>
                ) : (
                    <ul>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt />Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser />Register
                            </Link>
                        </li>
                    </ul>
                )
            }
        
    </header> */}
    </>
  )
}

export default Navbar