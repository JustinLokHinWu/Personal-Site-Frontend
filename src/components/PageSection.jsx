import PropTypes from 'prop-types';
import { React, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function PageSection({ children, id }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  const sectionVariant = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [inView, animation]);

  return (
    <section id={id} ref={ref}>
      <motion.div
        variants={sectionVariant}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
        }}
        animate={animation}
      >
        {children}
      </motion.div>
    </section>
  );
}
PageSection.defaultProps = {
  children: null,
};

PageSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  id: PropTypes.string.isRequired,
};

export default PageSection;
