import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { Wrapper } from '../../hocs'
import { Button } from '../../components'
import { skillsData } from '../../constants'
import './Skills.scss'

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1 })
    const [skills, setSkills] = useState([])
    const [filterSkills, setFilterSkills] = useState([])

    useEffect(() => {
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
                    <Button href='#projects' classes='btn btn--primary' text='See My Skills First Hand!' type='anchor--internal'/>
                </div>

                <div className='skills__content'>
                    <div className='app__flex'>
                        <div className='tile-filter app__flex'>
                            {
                                ['Languages', 'Frameworks/Libraries', 'Databases', 'Other', 'All'].map((item, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => handleSkillsFilter(item)}
                                        text={item}
                                        classes={`tile-filter__item btn btn--filter ${activeFilter === item ? 'active' : '' }`}
                                        type='filter'
                                    />
                                ))
                            }
                        </div>
                    </div>

            
                    <motion.div
                        animate={animateCard}
                        transition={{duration: 0.25, 
                        delayChildren: 0.5}}
                        className='skills__tiles app__flex'
                    >
                        {filterSkills.map((skill, index) => (
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
