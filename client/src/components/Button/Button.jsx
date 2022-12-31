import React from 'react'
import './Button.scss'

const Button = (props) => {
    return (
        <div className={`btn ${props.classes}`}>
            {props.text}
        </div>
    )
}

export default Button
