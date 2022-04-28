import { React, useEffect } from 'react';
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
  children, initial = 'out', animate = 'in', exit = 'out',
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
const isValidAnimation = (props, propName) => {
  if (props[propName] && !(props[propName] in pageVariant)) {
    return new Error(`Prop '${propName}' has invalid value '${props[propName]}'`);
  }
};

Page.propTypes = {
  initial: isValidAnimation,
  animate: isValidAnimation,
  exit: isValidAnimation,
};

export default Page;
