import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Affix, Layout, Col } from 'antd'
import 'antd/dist/antd.css';
import HeaderMenu from './components/HeaderMenu';
import Home from './components/Home';
import { ActganInfo, PersonalSiteInfo } from './components/ArticleInfo'
import PersonalSiteArticle from './components/Articles/PersonalSiteArticle';
import ActganArticle from './components/Articles/ActganArticle';

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
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
            <Route
              path='/'
              exact
              render={() => (
                <Home />
                )}
            />

            <Route
              path='/demos/actgan'
              exact
              render={() => (
                <ActganArticle
                  info={ActganInfo}
                  backendURL='http://localhost:8000/actgan' />
              )}
            />

            <Route
              path='/articles/personal-site'
              exact
              render={() => (
                <PersonalSiteArticle
                  info={PersonalSiteInfo}
                />
              )}
            />
          </Col>
          </Content>
        <Footer style={{ textAlign: 'center' }}>Justin Wu &#xA9;2022</Footer>
      </Layout>
    </Router>
  );
}

export default App;
