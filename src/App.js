import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/authentication/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>welcome</h1>
          </Route>

          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
