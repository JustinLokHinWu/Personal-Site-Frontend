import { React, useEffect } from 'react';
import {
  Divider, Space, Typography, Layout,
} from 'antd';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { useInView } from 'react-intersection-observer';

import Socials from './Socials';

const { Title, Paragraph } = Typography;
const { Footer } = Layout;

function PageFooter() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  const footerVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
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
    <div
      ref={ref}
      id="contacts"
      style={{ 'overflow-y': 'hidden' }}
    >
      <motion.div
        variants={footerVariant}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
        }}
        animate={animation}
      >
        <Footer
          className="dark-theme"
          style={{ textAlign: 'center' }}
        >
          <Space direction="vertical">
            <div>
              <Title level={3}>Contact Me @</Title>
              <Socials />
            </div>
            <Divider />
            &#xA9; 2022 Justin Wu
          </Space>
        </Footer>
      </motion.div>
    </div>
  );
}

export default PageFooter;
