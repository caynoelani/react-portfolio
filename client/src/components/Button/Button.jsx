import React from 'react'
import './Button.scss'

const Button = (props) => {

    return (
        <a href={props.href} className={props.classes}>{props.text}</a>
    )
}

export default Button
