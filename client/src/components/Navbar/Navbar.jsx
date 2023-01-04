import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [navColor, setNavColor] = useState(false)

    //Change Nav Colorcd clien OnScroll
    const changeNavColor = () => {
        if (window.scrollY >= 80){
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    }

    window.addEventListener('scroll', changeNavColor)

    return (
        <nav className={navColor ? 'navbar on-scroll' : 'navbar'}>
            <div className='app__container navbar__container'>
                <a href="#home">
                    <h1>CaylaBradleyDev</h1>
                </a>
                <ul className="navbar__menu--default" id="navMenu">
                    { ['home', 'skills', 'projects', 'contact'].map( (section) => (
                        <li className='app__flex' key={section}>
                            <a className="link" href={`#${section}`}>{section}</a>
                        </li>
                    ))}
                </ul>
                <div className='navbar__menu--mobile'>
                    {
                        !toggle && <HiMenuAlt4 onClick={() => setToggle(true)}/>
                    }
                    {
                        toggle && (
                        <motion.div
                            whileInView= {{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut'}}
                        >
                            <HiX onClick={() => setToggle(false)}/>
                            <ul>
                            { ['home', 'skills', 'projects', 'contact'].map( (section) => (
                                <li className='app__flex' key={section}>
                                    <a className="link" href={`#${section}`} onClick={() => setToggle(false)}>{section}</a>
                                </li>
                            ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
