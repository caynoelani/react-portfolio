import React from 'react'
import { motion } from 'framer-motion'

const MotionWrapper = (Component, classNames) => function HOC() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ 
                y: [100, 50, 0],
                opacity: [0, 0, 1]
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className= { `${classNames} app__flex`}
        >
            <Component />
        </motion.div>
    )
}

export default MotionWrapper
