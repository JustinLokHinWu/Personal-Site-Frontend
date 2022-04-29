import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const pageVariant = {
  in: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  outRight: {
    opacity: 0,
    x: -50,
    y: 0,
    scale: 1,
  },
  outLeft: {
    opacity: 0,
    x: 50,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: 0,
    y: 0,
    scale: 1.01,
  },
};

function Page({
  children, initial, animate, exit,
}) {
  // React Router v6 doesn't automatically scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={pageVariant}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}

Page.defaultProps = {
  children: null,
  initial: 'out',
  animate: 'in',
  exit: 'out',
};

Page.propTypes = {
  children: PropTypes.element,
  initial: PropTypes.oneOf(Object.keys(pageVariant)),
  animate: PropTypes.oneOf(Object.keys(pageVariant)),
  exit: PropTypes.oneOf(Object.keys(pageVariant)),
};

export default Page;
