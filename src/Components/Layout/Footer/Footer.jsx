import React from 'react'
import './Footer.css'
import { data } from '../../../Constants'

const Footer = () => {
    return (
        <section className="footer text-center px-10 py-2.5 bg-[#fc01ef5b] backdrop-blur-[10px] text-white">
            Copyright 2025 made with love by {data.parentCompanyBrand}.
        </section>
    )
}

export default Footer
