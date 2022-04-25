import './App.less';
import { BrowserRouter } from 'react-router-dom'
import { Affix, Layout, Col } from 'antd'
import 'antd/dist/antd.css';
import HeaderMenu from './components/HeaderMenu';
import ContentRoutes from './components/ContentRoutes';
import Socials from './components/Socials'
import PageFooter from './components/PageFooter';

const { Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ 'minHeight': '100vh'}}>
        <Content className="site-layout">
          <Affix>
            <HeaderMenu />
          </Affix>
          <Col
            className="site-layout-background"
            xs={24} sm={24} md={20} lg={18} xl={16}
            style={{ padding: '30px 5%', minHeight: 380, margin: 'auto'}}
          >
            <ContentRoutes />
          </Col>
          </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}><PageFooter /></Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
