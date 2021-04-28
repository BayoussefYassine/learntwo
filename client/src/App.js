import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from "./Home";

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
