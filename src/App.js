import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ModelDisplay from './components/ModelDisplay'

function App() {
  return (
    <Router>
      <div className="App-header"> 
        <Route
          path='/'
          exact
          render={() => (
            <p>Welcome</p>
            )}
        />

        <Route
          path='/demos/actgan'
          exact
          render={() => (
            <ModelDisplay backendURL='http://127.0.0.1:5000' />
          )}
        />
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <ModelDisplay></ModelDisplay>
    //   </header>
    // </div>
  );
}

export default App;
