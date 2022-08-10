import React, {useContext} from 'react'
import './Navbar.css'
import {AuthContext} from '../../context/authContext/AuthContext';
import {logout} from '../../context/authContext/actions'

const Navbar = ({showForm, setShowForm}) => {

  const {user} = useContext(AuthContext)
  const {dispatch} = useContext(AuthContext)

  const handleLogout = async () => {
    dispatch(logout())
    window.location.reload()
  }

  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        <a href="/" className="navbar__logo">
          <img src="https://assets-global.website-files.com/6027ab9296f259a23eb6d66d/614b7b1a8daf4904a5d8b873_cwj-logo-primary.svg" width="80" alt="Content Writing Jobs" height="27" />
        </a>
        <div className="navbar__links">
          {user ? (
            <>
            <span className="navbar__links-login" onClick={handleLogout}>Log Out</span>
            <a href={`profile/${user.id}`} className="navbar__links-login">Profile</a>
            </>
          ) : (
            <span className="navbar__links-login" onClick={() => setShowForm(true)}>Log In</span>
          )}
          <a href="/postjob">
            <button>Post a Job</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar