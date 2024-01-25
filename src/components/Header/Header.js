import React from 'react'

import './Header.css'

import Logo from '../../assets/desktop/logo.svg';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        
        <div className='header-container'>
            <div className='header-items container'>
                <div className='header-logo'>
                    <Link to = '/'><img src = {Logo} /></Link>
                </div>
                <div className='toggle'>
                    <Toggle/>
                </div>
            </div>
        </div>
        
    )
}

export default Header
