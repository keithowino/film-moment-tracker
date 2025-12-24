import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { data } from '../../../Constants';

const Navbar = () => {

    document.addEventListener("click", ((e) => {

        const navbarLinks = document.querySelectorAll(".navbar-link");

        function removeCurrentActives() {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("active");
            });
        }

        if (e.target.classList.contains("navbar-link")) {
            removeCurrentActives();
            e.target.classList.add("active");

        } else if (e.target.parentElement.attributes.href && !e.target.parentElement.classList.contains("navbar-link")) {
            removeCurrentActives();
        }

    }))

    return (
        <nav className="navbar flex items-center justify-between h-10 px-10 z-50 bg-[#fc01ef5b] backdrop-blur-[10px] text-white font-bold">
            <div className="nav-title">
                <h1 className="site-title font-serif">{data.brand}</h1>
            </div>
            <div className="navbar-links">
                <ul className='flex gap-6'>
                    <li><Link className="navbar-link" to="/">home</Link></li>
                    <li><Link className="navbar-link" to="/updates">updates</Link></li>
                    <li><Link className="navbar-link" to="/anime">anime</Link></li>
                    <li><Link className="navbar-link" to="/other">other</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar