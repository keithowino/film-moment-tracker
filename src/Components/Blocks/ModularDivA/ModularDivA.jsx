import React from 'react'
import './ModularDivA.css'
import { Components, data } from '../../../Constants'

const ModularDivA = (props) => {
    return (
        <div className='flex font-bold m-2.5 text-blue-700 gap-2.5'>
            <h1 className='capitalize'>{props.pageId}</h1>
            <Components.TrackerLink styles={data.mainTrackerLinkStyles()} />
            <p className='italic font-medium text-neutral-800 hover:text-neutral-700'>Hover over the table data for more info'.</p>
        </div>
    )
}

export default ModularDivA
