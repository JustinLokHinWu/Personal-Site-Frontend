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
            <p>Teste</p>
            )}
        />

        <Route
          path='/demos/actgan'
          exact
          render={() => (
            <ModelDisplay />
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
