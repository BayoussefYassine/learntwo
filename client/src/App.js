import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from "./Home";
import Task from "./Task";
import MyTasks from "./MyTasks";
import Profile from "./Profile";
import NotFound from "./NotFound";





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
          <Route exact path="/task">
            <Task />
          </Route>
          <Route path="/mytasks">
            <MyTasks />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>



          {/* not foud route */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
