import React from 'react'
import { DotNavigation, SocialIcons } from '../components'
import './wrapper.scss'

const Wrapper = (Component, idName, classNames) => function HOC(){
    return (
        <div id={idName} className={`${classNames}app__container`}>
            <SocialIcons />
            <div className='wrapper app__flex'>
                <Component />
            </div>
            Wrapper
            <DotNavigation active={idName}/>
        </div>
    )
}

export default Wrapper
