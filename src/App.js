import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login">
            <Login text="Log into your account" />
          </Route>

          <Route path="/signup">
            <Signup text="Create new account" />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
