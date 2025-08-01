import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="logo image" />
      <img className='profile' src={assets.profile_image} alt="image of the profile user" />
    </div>
  )
}

export default Navbar
