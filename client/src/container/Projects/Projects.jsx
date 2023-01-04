import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
                    <motion.div
                    key={index}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    >
                        <ProjectCard 
                            key={index}
                            title={project.title}
                            role={project.role}
                            images={project.images}
                            summary={project.summary}
                            jobDescription={project.jobDescription}
                            technologies={project.technologies}
                            demoUrl={project.demoUrl}
                            codeUrl={project.codeUrl}
                            classified={project.classified}
                        />
                    </motion.div>

                ))}
            </div>
        </section>
    )
}

export default Projects