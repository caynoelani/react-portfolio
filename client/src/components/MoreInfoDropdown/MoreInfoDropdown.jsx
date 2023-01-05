import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './MoreInfoDropdown.scss'

const MoreInfoDropdown = (props) => {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className='more-info-dropdown-container'>
            <motion.div
                layout
                data-show-more={showMore}
                className='more-info-content'
                id='more-info-content'
            >
                <ul>
                    <strong>Contributions:</strong><br/>
                    {props.jobDescription.map((bulletPoint, index)=> (
                        <li key={index}>- {bulletPoint}</li>
                    ))}
                </ul>
                <p><strong>Technologies Used:</strong><br/>{props.technologies.map((technology, index) => (
                    <span key={index}>{`${technology}, `}</span>
                ))}</p>
            </motion.div>
            <div className='expand-dropdown' onClick={() => setShowMore(!showMore)}>
                <span className='expand-dropdown__text app__flex'>
                    { showMore ? 'Hide Info': `More Info` }
                </span>
            </div> 
        </div>
    )
}

export default MoreInfoDropdown