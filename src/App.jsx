import React from 'react';
import './App.less';
import { BrowserRouter } from 'react-router-dom';
import { Affix, Layout, Col } from 'antd';
import { motion } from 'framer-motion/dist/framer-motion';
import HeaderMenu from './components/HeaderMenu';
import ContentRoutes from './components/ContentRoutes';
import PageFooter from './components/PageFooter';

const { Content } = Layout;

function App() {
  const contentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <motion.div
          variants={contentVariant}
          initial="hidden"
          animate="visible"
        >
          <Content className="site-layout">
            <Affix>
              <HeaderMenu />
            </Affix>
            <Col
              xs={24}
              sm={24}
              md={20}
              lg={18}
              xl={16}
              style={{ padding: '30px 5%', minHeight: 380, margin: 'auto' }}
            >
              <ContentRoutes />
            </Col>
          </Content>
        </motion.div>
        <PageFooter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
