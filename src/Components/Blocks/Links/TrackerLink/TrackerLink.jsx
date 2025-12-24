import React from 'react'
import './TrackerLink.css'
import { Link } from 'react-router-dom'
import { images } from '../../../../Constants'

const TrackerLink = (props) => {
    return (
        <div className="tracker">
            <Link to="/tracker"><img className={props.styles} src={images.search} alt="search icon" title='search' /> </Link>
        </div>
    )
}

export default TrackerLink
