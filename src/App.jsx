import React from 'react';
import './App.less';
import { BrowserRouter } from 'react-router-dom';
import { Affix, Layout } from 'antd';
import HeaderMenu from './components/HeaderMenu';
import ContentRoutes from './components/ContentRoutes';
import PageFooter from './components/PageFooter';

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Content className="site-layout">
          <Affix>
            <HeaderMenu />
          </Affix>
          <ContentRoutes />
        </Content>
        <PageFooter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
