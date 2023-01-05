import React from 'react'

import { Button, MoreInfoDropdown, Carousel } from '../../components'
import './ProjectCard.scss'

const ProjectCard = (props) => {
    return (
        <article className="project">
            <Carousel images={props.images} classes='app__flex project__img'/>
            <div className="project__description">
                <h5 className='project__title'>{props.title}</h5>
                <small className='project__role'>{props.role}</small>
                <p className='project__summary'>
                    {props.summary}
                </p>
            </div>
            <MoreInfoDropdown jobDescription={props.jobDescription} technologies={props.technologies}/>
            <div>
                <Button href={props.demoUrl} classes='btn btn--project' text="Demo" target="_blank" type='anchor--external'/>
                {!props.classified && <Button href={props.codeUrl} classes='btn btn--project' text="Code" target="_blank" type='anchor--external'/>}
            </div>
        </article>
    )
}

export default ProjectCard
