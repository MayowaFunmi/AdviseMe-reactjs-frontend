import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import CourseList from './components/CourseList';
import { PrivateRouteNew } from './utils/PrivateRouteNew';
import HomeComponent from './components/HomeComponent';
import LogoutComponent from './components/LogoutComponent';
import Config from './utils/Config';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/" component={Login}></Route>
          <Route exact path={Config.logoutPageUrl} component={LogoutComponent}></Route>
          <PrivateRouteNew exact path="/home" activepage='0' page={<HomeComponent />}></PrivateRouteNew>
          <PrivateRouteNew exact path="/add_courses" activepage='1' page={<Courses />}></PrivateRouteNew>
          <Route exact path="/list_all_courses" component={CourseList}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
