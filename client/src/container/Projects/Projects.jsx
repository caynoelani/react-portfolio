import React, { useState, useEffect } from 'react'
import { ProjectCard } from '../../components'
import { projectsData } from '../../constants'
import './Projects.scss'

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <section className="projects app__section" id="projects">
            <h3>Recent Projects</h3>
            <div className="app__container projects__container">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        demoUrl={project.demoUrl}
                        codeUrl={project.codeUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects