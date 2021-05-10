import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <nav className='navbars'>
        <Link className={'nav-link'} to={'/'}>Home</Link>
        <Link className={'nav-link'} to={'/login'}>Login</Link>
        <Link className={'nav-link'} to={'/signup'}>Sign Up</Link>
      </nav>

        <Switch>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
