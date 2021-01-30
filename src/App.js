import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Listing from './views/listing';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header>
              <Listing />
            </Header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;