import Todo from "./Todo";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/todo" exact component={Todo} />
        </Switch>
      </div>
    </Router>
  );
}
export default Main;
