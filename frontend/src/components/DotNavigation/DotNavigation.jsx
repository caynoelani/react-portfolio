import React from 'react'
import './DotNavigation.scss'

const DotNavigation = ({active}) => {
    return (
        <div className='dot-navigation'>
            { ['home', 'skills', 'projects', 'contact', 'footer' ].map( (section, index) => (
                <a
                    href={`#${section}`}
                    key={section+index}
                    className="dot-navigation--dot"
                    style={ active === section ? {backgroundColor: '#0096E2'}: {}}
                />
            ))}
        </div>
    )
}

export default DotNavigation
