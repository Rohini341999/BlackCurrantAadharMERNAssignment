import AadharCardCreation from "./components/AadharCardCreation";
import Login from './components/Login';
import { Switch, Route, Redirect,BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AdminLogin from './components/AdminLogin';
import AadharInfoDisplayAdmin from './components/AadharInfoDisplayAdmin';

function App() {
  return (
    <Router>
    
      <div className="App">
        <div>
        <Switch>
        <Route exact path="/aadharCreation" component={AadharCardCreation}></Route>
        <Route exact path="/userLogin" component={Login}></Route>
        <Route exact path="/adminLogin" component={AdminLogin}></Route>
        <Route exact path="/aadharInfoDisplay" component={AadharInfoDisplayAdmin}></Route>
          <Redirect exact from="/" to="/userLogin" />
          </Switch>
        </div>
      </div>
    
    </Router>
  );
}

export default App;
