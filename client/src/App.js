import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Learn</h1>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <footer>Footer</footer>
      </div>
    </Router>
  );
}

export default App;
