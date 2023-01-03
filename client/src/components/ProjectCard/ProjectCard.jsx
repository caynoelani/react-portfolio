import React from 'react'
import { Button } from '../../components'

const ProjectCard = (props) => {
    return (
        <article className="project">
            <div className="project__img">
                <img src={props.images[0]} alt={`${props.title} project thumbnail`}/>
            </div>
            <div className="project__description">
                <h5 className='project__title'>{props.title}</h5>
                <small className='project__role'>{props.role}</small>
                <p className='project__summary'>
                    {props.summary}
                </p>
                <div>
                    <Button href={props.demoUrl} classes='btn btn--project' text="Demo" target="_blank" type='anchor--external'/>
                    {!props.classified && <Button href={props.codeUrl} classes='btn btn--project' text="Code" target="_blank" type='anchor--external'/>}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard