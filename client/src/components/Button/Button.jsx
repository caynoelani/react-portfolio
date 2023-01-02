import React from 'react'
import './Button.scss'

const Button = (props) => {

    if(props.type === 'anchor--internal') 
        return (
            <a 
                href={props.href}
                className={`${props.classes}`}
            >
                {props.text}
            </a>
        ) 

    else if(props.type === 'anchor--external') 
        return (
            <a 
                href={props.href}
                className={`${props.classes}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.text}
            </a>
        ) 

    else if (props.type === 'filter')
        return (
            <button 
                className={`${props.classes}`}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        )

}

export default Button
