import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { Wrapper } from '../../hocs'
import { Button } from '../../components'
import { images } from '../../constants'
import './Skills.scss'

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1 })
    const [skills, setSkills] = useState([])
    const [filterSkills, setFilterSkills] = useState([])

    useEffect(() => {
        const skillsData = [
            { 
                name: 'JavaScript',
                src: images.javascript,
                category: ['All', 'Languages'],
            },
            { 
                name: 'Python',
                src: images.python,
                category: ['All', 'Languages'],
            },
            { 
                name: 'C#',
                src: images.csharp,
                category: ['All', 'Languages'],
            },
            { 
                name: 'Go',
                src: images.go,
                category: ['All', 'Languages'],
            },
            { 
                name: 'HTML',
                src: images.html,
                category: ['All', 'Languages'],
            },
            { 
                name: 'CSS',
                src: images.css,
                category: ['All', 'Languages'],
            },
            { 
                name: 'Express',
                src: images.express,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'React.js',
                src: images.react,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'Vue.js',
                src: images.vue,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'Node.js',
                src: images.node,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'Framer-Motion',
                src: images.framerMotion,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'Flask',
                src: images.flask,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'Bootstrap',
                src: images.bootstrap,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'Mongoose',
                src: images.mongoose,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'SQLAlchemy',
                src: images.sqlAlchemy,
                category: ['All', 'Tools'],
            },
            { 
                name: 'SASS/SCSS',
                src: images.sass,
                category: ['All', 'Tools'],
            },
            { 
                name: 'MySQL',
                src: images.MySQL,
                category: ['All', 'Databases'],
            },
            { 
                name: 'Git',
                src: images.git,
                category: ['All', 'Tools'],
            },
            { 
                name: 'GitHub',
                src: images.github,
                category: ['All', 'Tools'],
            },
            { 
                name: 'Restful Api',
                src: images.api,
                category: ['All', 'Tools'],
            },
            { 
                name: 'MongoDB',
                src: images.mongo,
                category: ['All', 'Databases'],
            },
            { 
                name: 'Django',
                src: images.django,
                category: ['All', 'Frameworks/Libraries'],
            },
            { 
                name: 'GraphQL',
                src: images.graphql,
                category: ['All', 'Other'],
            },
            { 
                name: 'Sanity',
                src: images.sanity,
                category: ['All', 'Other'],
            },
        ]

        setSkills(skillsData);
        setFilterSkills(skillsData)
    }, [])

    const handleSkillsFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y:100, opacity: 0}])

        setTimeout(() => {
            setAnimateCard([{ y:0, opacity: 1}])

            if(item === 'All'){
                setFilterSkills(skills)
            } else {
                setFilterSkills(skills.filter((skill) => skill.category.includes(item)))
            }
        }, 500)
    }

    return (
        <section className="skills app__section" id="skills">
            <div className="app__container skills__container">
                <div className="skills__description">
                    <h2>Skills</h2>
                    <p>
                    I am proficient in the Python, JavaScript (MERN), and C# stacks. And that's just where it starts!
                    </p>
                    <Button href='#projects' classes='btn btn--primary' text='See My Skills First Hand!' type='anchor'/>
                </div>

                <div className='skills__content'>
                    <div className='tile-filter app__flex'>
                        {
                            ['Languages', 'Frameworks/Libraries', 'Databases', 'Other', 'All'].map((item, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleSkillsFilter(item)}
                                    text={item}
                                    classes={`tile-filter__item btn btn--primary ${activeFilter === item ? 'active' : '' }`}
                                    type='filter'
                                />
                            ))
                        }
                    </div>
            
                    <motion.div
                        animate={animateCard}
                        transition={{duration: 0.25, 
                        delayChildren: 0.5}}
                        className='skills__tiles'
                    >
                        {filterSkills.map((skill, index)=> (
                            <motion.div
                                key={index}
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <article className="tile" key={index}>
                                    <img src={skill.src} alt={`${skill.name} logo`} />
                                    <h5>{skill.name}</h5>
                                </article>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills