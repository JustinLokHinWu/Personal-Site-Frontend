import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css';
import ModelDemo from './components/ModelDemo'
import HeaderMenu from './components/HeaderMenu';
import Home from './components/Home';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ 'minHeight': '100vh'}}>
      <Header>
        <HeaderMenu />
      </Header>
      <Content className="site-layout" style={{ padding: '0 5%' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Router>
            <div className="App-header"> 
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
                  <ModelDemo backendURL='http://127.0.0.1:5000' />
                )}
              />
            </div>
          </Router>
        </div>
        </Content>
      <Footer style={{ textAlign: 'center' }}>Justin Wu &#xA9;2021</Footer>
    </Layout>
  );
}

export default App;
