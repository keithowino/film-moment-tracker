import React from 'react'
import './Header.css'
import { Components } from '../../../Constants'

const Header = () => {

    return (
        <header className='absolute top-0 left-0 right-0 z-50'>
            <Components.Navbar />
        </header>
    )
}

export default Header