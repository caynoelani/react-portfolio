import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import './SocialIcons.scss'

const SocialIcons = () => {
    return (
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/caylabradley/">
                <div>
                    <BsLinkedin/>
                </div>
            </a>
            <a href="https://github.com/caynoelani">
                <div>
                    <FaGithubSquare/>
                </div>
            </a>
        </div>
    )
}

export default SocialIcons