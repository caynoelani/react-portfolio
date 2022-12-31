import React from 'react'
import './Header.scss'
import { images } from '../../constants'
import { Button } from '../../components'

const Header = () => {
    return (
        <header className='header' id="home">
            <div className="app__container header__container">
                <div className="header__description">
                    <h2>Software Engineer</h2>
                    <p>
                        I build full-stack applications both you and your clients will love!
                    </p>
                    <Button href="#contact" classes="btn btn--primary" text="Let's Connect!"/>
                </div>
                    <div className="header__img-container">
                    <div className="header__img-wrapper">
                        <img className="header__img" src={images.developer} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header