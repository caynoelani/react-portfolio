import React from 'react'

import { Button } from '../../components'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="app__container footer__container">
                <div className="footer__description">
                    <a href="#home" className="footer__logo">
                        <h5>More About Cayla Bradley</h5>
                    </a>
                    <p>
                        I am a hard-working and self-motivated young professional seeking to expand and display my innovative ideas and technical skills. I studied full-stack web development in the Python, C#, and JavaScript languages at Coding Dojo. During this 14-week intensive program, I clocked in over 1800 hours of studying and programming. With hands-on training in full-stack software development, I am seeking an opportunity that will promote personal growth and development, and enable me to expand my range of knowledge.
                    </p>
                </div>
                <div className="footer__permalinks">
                    <h5>Permalinks</h5>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__contact-details">
                    <h5>Contact Me</h5>
                    <div>
                        <p>
                            <AiFillPhone />
                            +1 872 362 3848
                        </p>
                        <p>
                            <AiFillMail />
                            caylabradleydev@gmail.com
                        </p>
                    </div>
                    <div className="footer__socials">
                        <Button 
                            href='https://www.linkedin.com/in/caylabradley/'
                            text={<BsLinkedin />}
                            classes='btn--social'
                            type='anchor--external'
                        />
                        <Button
                            href='https://github.com/caynoelani'
                            text={<FaGithubSquare />}
                            classes='btn--social'
                            type='anchor--external'
                        />
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <small>Copyright &copy; CaylaBradleyDev 2022</small>
            </div>
        </footer>
    )
}

export default Footer