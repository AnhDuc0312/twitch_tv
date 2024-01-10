import React from 'react'
import logo from '../../resources/images/logoPlaceholder.svg'

const NavLogo = () => {
    return (
        <div className='nav-logo-container'>
            <img className="nav-logo" alt="" width="100%" height="100%" src={logo} />
        </div>
    )
}

const NavButton = ({text , onClickHandle}) => {
    return (
        <span className='nav-button' onClick={onClickHandle}>
            {text}
        </span>
    )
}

export const Nav = () => {
  return (
    <div className='nav-container'>
        <NavLogo/>
        <div className='nav-buttons-container'>
            <NavButton text="Browse" onClickHandle={() => {}}/>
            <NavButton text="Login" onClickHandle={() => {}}/>
            <div>
            <NavButton text="My Account" onClickHandle={() => {}}/>
            <NavButton text="Logout" onClickHandle={() => {}}/>
            </div>
        </div>
    </div>
  )
}
 