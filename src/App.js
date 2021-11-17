import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/authentication/Signup";
import Login from "./pages/authentication/Login";
import { TopNavbar } from "./components/navbar/TopNavbar";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={Home}>
            
          </Route>

          <Route path="/signup" component={Signup} />

          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
