import React from 'react'
import { Button } from '../../components'

const ProjectCard = (props) => {
    return (
        <article className="project">
            <div className="project__img">
                <img src={props.image} alt={`${props.title} project thumbnail`}/>
            </div>
            <div className="project__description">
                <h5>{props.title}</h5>
                <p>
                    {props.description}
                </p>
                <div>
                    <Button href={props.demoUrl} classes='btn btn--project' text="Demo" target="_blank" type='anchor--internal'/>
                    <Button href={props.codeUrl} classes='btn btn--project' text="Code" target="_blank" type='anchor--external'/>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard