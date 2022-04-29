import { React, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PageSection = ({children, id}) => {
    const {ref, inView} = useInView({
        threshold: 0.2
    })
    const animation = useAnimation()

    const sectionVariant = {
        hidden: {
            opacity: 0,
            y: 24
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        } else{
            animation.start('hidden')
        }
    }, [inView, animation])
    

    return (
        <section id={id} ref={ref}>
        <motion.div
            variants={sectionVariant}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 30
            }}
            animate={animation}
            >
            {children}
        </motion.div>
        </section>
    )
}

export default PageSection